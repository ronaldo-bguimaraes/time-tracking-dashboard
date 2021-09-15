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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUVsRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVyRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFekQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV6RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVuRSxLQUFLLFVBQVUsUUFBUTtJQUVyQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUUvQixLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBRTdDO0lBRUQsS0FBSyxNQUFNLFFBQVEsSUFBSSxVQUFVLEVBQUU7UUFFakMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBRWxDLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUUxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU3QyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDO2dCQUV2RCxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLE1BQU0sTUFBTSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7YUFFdkU7WUFFRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUUzQzthQUVJO1lBRUgsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FFOUM7S0FFRjtBQUVILENBQUM7QUFFRCxDQUFDLFNBQVMsSUFBSTtJQUVaLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxFQUFFO1FBRTFCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUVyRDtJQUVELFFBQVEsRUFBRSxDQUFDO0lBRVgsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRTNDLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==