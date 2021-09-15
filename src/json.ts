interface TimeFrame {

  current: number;
  previous: number;

}

interface TimeFrameObject {

  daily: TimeFrame;
  weekly: TimeFrame;
  monthly: TimeFrame;

  [key: string]: TimeFrame;

}

interface Data {

  title: string;
  timeframes: TimeFrameObject;

}

const response = await fetch("./data.json");

const json = await response.json() as Data[];

export { json };