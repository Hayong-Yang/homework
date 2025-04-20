// 부모클래스 Pet
class Pet {
  energy = 50;
  hunger = 50;
  age = 0;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = this.setAgeRandom();
  }

  setAgeRandom() {
    return Math.floor(Math.random() * 11);
  }

  speak() {
    console.log("펫이 당신을 부릅니다.");
  }
  energyAlert() {
    if (this.energy <= 0) {
      console.log("주인님 힘이 없어요.😥");
    }
    if (this.energy >= 100) {
      console.log("주인님 힘이 넘쳐요.😮");
    }
    if (this.energy <= 20) {
      console.log("주인님 졸려요.😴");
    }
  }
  hungerAlert() {
    if (this.hunger <= 0) {
      console.log("주인님 배고파요.😥");
    }
    if (this.hunger >= 100) {
      console.log("주인님 배불러요.😮");
    }
    if (this.hunger <= 20) {
      console.log("주인님 밥주세요.😛");
    }
  }
  getInfo() {
    console.log(
      `펫 이름: ${this.name}, 종류: ${this.type}, 나이: ${this.age.toFixed(
        1
      )}, 에너지: ${this.energy}, 배고픔: ${this.hunger}`
    );
  }
  eat() {
    this.energy += 10;
    this.hunger -= 30;
    console.log("주인님, 맛있게 먹겠습니다!😛");
    console.log(`${this.name}이 밥을 먹는다. 에너지+10, 배고픔-30`);
    if (this.energy >= 100) {
      this.energy = 100;
      console.log(
        `*알림* 현재 에너지: ${this.energy}, 더 이상 에너지가 증가하지 않습니다.`
      );
    }
    if (this.hunger <= 0) {
      this.hunger = 0;
      console.log(
        `*알림* 현재 배고픔: ${this.hunger}, 더 이상 배고픔이 감소하지 않습니다.`
      );
    }
  }

  play() {
    this.energy -= 20;
    this.hunger += 20;

    this.age += 0.1;
    console.log("주인님, 같이 놀아요!😆");
    console.log(`${this.name}이 뛰어논다. 에너지-20, 배고픔+20 나이+0.1`);

    if (this.energy <= 0) {
      this.energy = 0;
      console.log(
        `*알림* 현재 에너지: ${this.energy}, 더 이상 에너지가 감소하지 않습니다.`
      );
    }
    if (this.hunger >= 100) {
      this.hunger = 100;
      console.log(
        `*알림* 현재 배고픔: ${this.hunger}, 더 이상 배고픔이 증가하지 않습니다.`
      );
    }
  }

  sleep() {
    this.energy += 40;
    this.hunger += 10;
    console.log("쿨쿨.. 주인님이 최고..쿨!😴");
    console.log(`${this.name}이 잔다. 에너지+40, 배고픔+10`);

    if (this.energy >= 100) {
      this.energy = 100;
      console.log(
        `*알림* 현재 에너지: ${this.energy}, 더 이상 에너지가 증가하지 않습니다.`
      );
    }
    if (this.hunger >= 100) {
      this.hunger = 100;
      console.log(
        `*알림* 현재 배고픔: ${this.hunger}, 더 이상 배고픔이 증가하지 않습니다.`
      );
    }
  }
}

// ---------------------------------------------------------------------------------------------------
// 자식클래스 Dog, Cat, Hamster

class Dog extends Pet {
  constructor(name) {
    super(name, "강아지");
  }
  speak() {
    console.log(`${this.name}: 멍멍!`);
  }
}

class Cat extends Pet {
  constructor(name) {
    super(name, "고양이");
  }

  speak() {
    console.log(`${this.name}: 야옹!!`);
  }
}

class Hamster extends Pet {
  constructor(name) {
    super(name, "햄스터");
  }
  speak() {
    console.log(`${this.name}: 찍찍!`);
  }
}
// ---------------------------------------------------------------------------------------------------
// PetManager 클래스
class PetManager {
  petList = ["펫1", "펫2", "펫3", "펫4", "펫5", "펫6", "펫7", "펫8", "펫9"];
  typeList = ["강아지", "고양이", "햄스터"];

  randomPet() {
    const name = this.petList[Math.floor(Math.random() * this.petList.length)];
    const type =
      this.typeList[Math.floor(Math.random() * this.typeList.length)];

    switch (type) {
      case "강아지":
        return new Dog(name);
      case "고양이":
        return new Cat(name);
      case "햄스터":
        return new Hamster(name);
    }
  }

  addPet(count) {
    const pets = [];
    for (let i = 0; i < count; i++) {
      pets.push(this.randomPet());
    }
    return pets;
  }
  simulateDay(pet) {
    const actionList = [
      pet.eat.bind(pet),
      pet.play.bind(pet),
      pet.sleep.bind(pet),
    ];
    const randomAction =
      actionList[Math.floor(Math.random() * actionList.length)];
    randomAction();
  }

  showAllPets(petArray) {
    petArray.forEach((pet) => pet.getInfo());
  }
}
// ---------------------------------------------------------------------------------------------------
// test

const numList = [3, 4, 5];
const randomNum = numList[Math.floor(Math.random() * numList.length)];
console.log(randomNum);

const simul = new PetManager();
const myPets = simul.addPet(randomNum);
myPets.forEach((pet) => {
  pet.getInfo();
  pet.speak();
  //   simul.simulateDay(pet);
});

for (let i = 0; i < randomNum; i++) {
  console.log(`----------Day ${i}----------`);
  myPets.forEach((pet) => {
    simul.simulateDay(pet);
    console.log("\n");
  });

  console.log("-------End Of The Day--------");
  simul.showAllPets(myPets);
  console.log("\n");
}
