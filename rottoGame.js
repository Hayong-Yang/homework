// for문 이용해서 배열에 1~45번까지 담았음.
let rottoArr = [];
for (let i = 0; i < 45; i++) {
  rottoArr[i] = i + 1;
}
const rottoArrLength = rottoArr.length; //45
const rottoResult = []; // 6자리 랜덤 로또번호의 배열

//버전 2. inclued와 continue문을 이용한 중복제거.
for (let j = 0; j <= 5; ) {
  let rottoBall = rottoArr[Math.floor(Math.random() * rottoArrLength)];
  if (rottoResult.includes(rottoBall) == true) {
    continue;
  }
  rottoResult[j] = rottoBall;
  j++; // 증감식을 바깥으로 뺐기때문에, continue하더라도 j가 증가하지 않는군.
}
console.log(rottoResult);
