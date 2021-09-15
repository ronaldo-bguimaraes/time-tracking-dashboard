
import { json } from "./json.js";

const routeArray = ["daily", "weekly", "monthly"];

const previousPrefixArray = ["Yesterday", "Last Week", "Last Month"];

const linkAll = document.querySelectorAll(".item .link");

const titleAll = document.querySelectorAll("header .title");

const currentAll = document.querySelectorAll(".current");

const previousList = document.querySelectorAll("footer .previous");

async function loadData() {

  let route = location.hash.substr(1);

  if (!routeArray.includes(route)) {

    route = location.hash = `#${routeArray[1]}`;

  }

  for (const routeKey in routeArray) {

    if (routeArray[routeKey] === route) {

      for (const dataKey in json) {

        const time = json[dataKey].timeframes[route];

        currentAll[dataKey].textContent = `${time.current}hrs`;

        const prefix = previousPrefixArray[routeKey];

        previousList[dataKey].textContent = `${prefix} - ${time.previous}hrs`;

      }

      linkAll[routeKey].classList.add("active");

    }

    else {

      linkAll[routeKey].classList.remove("active");

    }

  }

}

(function init() {

  for (const dataKey in json) {

    titleAll[dataKey].textContent = json[dataKey].title;

  }

  loadData();

  addEventListener("hashchange", loadData);

})();