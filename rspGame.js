// 컴퓨터의 가위바위보 결과
const gameArr = ["가위", "바위", "보"];
const gameArrLength = gameArr.length;
const computer = gameArr[Math.floor(Math.random() * gameArrLength)];
// console.log(computer);

// 유저의 가위바위보 입력
const fs = require("fs");
const input = fs.readFileSync("rspGameInput.txt").toString().trim();
const user = input;

// 유저와 컴퓨터의 가위바위보 승부 게임
switch (user) {
  case "바위":
    if (computer == "바위") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😐비겼습니다.`);
    } else if (computer == "가위") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😥졌습니다.`);
    } else if (computer == "보") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😁이겼습니다.`);
    } else {
      console.log(`잘못내셨습니다.`);
    }
    break;
  case "가위":
    if (computer == "가위") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😐비겼습니다.`);
    } else if (computer == "보") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😥졌습니다.`);
    } else if (computer == "바위") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😁이겼습니다.`);
    } else {
      console.log(`잘못내셨습니다.`);
    }
    break;
  case "보":
    if (computer == "보") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😐비겼습니다.`);
    } else if (computer == "바위") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😥졌습니다.`);
    } else if (computer == "가위") {
      console.log(`컴퓨터: ${computer}, 유저: ${user}`);
      console.log(`😁이겼습니다.`);
    } else {
      console.log(`잘못내셨습니다.`);
    }
    break;
  default:
    console.log(`잘못내셨습니다. 패배!😛`);
}
