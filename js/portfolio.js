const about = document.getElementById("abouts");
const aboutTop = about.offsetTop;

// 자기소개 올라오기
document.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > aboutTop + 100) {
    about.classList.add("abouts--up");
  } else {
    about.classList.remove("abouts--up");
  }
});

// 헤더 글자 움직이기
const header = document.getElementById("header");
const myname = document.querySelector(".name");
const vision = document.querySelector(".vision");
const headerTop = header.offsetTop;

document.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > headerTop) {
    myname.classList.add("name--right");
    vision.classList.add("vision--left");
  } else {
    myname.classList.remove("name--right");
    vision.classList.remove("vision--left");
  }
});

// strength 나타나기
const contentBox1 = document.querySelector(".contentBox1");
const contentBox2 = document.querySelector(".contentBox2");

const contentBoxTop1 = contentBox1.offsetTop;
const contentBoxTop2 = contentBox2.offsetTop;
console.log(contentBoxTop1);
document.addEventListener("scroll", () => {
  if (window.scrollY > contentBoxTop1 - 500) {
    contentBox1.style.opacity = "1";
    contentBox1.style.transform = "rotateY(0deg)";
  } else {
    contentBox1.style.opacity = "0";
    contentBox1.style.transform = "rotateY(180deg)";
  }
});
document.addEventListener("scroll", () => {
  if (window.scrollY > contentBoxTop2 - 550) {
    contentBox2.style.opacity = "1";
    contentBox2.style.transform = "rotateY(0deg)";
  } else {
    contentBox2.style.opacity = "0";
    contentBox2.style.transform = "rotateY(180deg)";
  }
});

// career 배경색 하얗게 바꾸기.
const total = document.getElementById("career");
// const totalbox = document.getElementsByClassName("total_box");
// const body = document.body;
const totalTop = total.offsetTop;
const background = document.getElementById("background");
const activity_text = document.getElementsByClassName("activity_text");
const career_text = document.getElementsByClassName("career_text");

document.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > totalTop + 250) {
    background.classList.add("career-change");
    for (let i = 0; i < activity_text.length; i++) {
      activity_text[i].style.opacity = "1";
    }
    for (let i = 0; i < career_text.length; i++) {
      career_text[i].style.opacity = "1";
    }
  } else {
    background.classList.remove("career-change");
    for (let i = 0; i < activity_text.length; i++) {
      activity_text[i].style.opacity = "0";
    }
    for (let i = 0; i < career_text.length; i++) {
      career_text[i].style.opacity = "0";
    }
  }
});

// career 글자 스크롤 내리면 나타나기.

// document.addEventListener("scroll", () => {
//   if (window.scrollY + window.innerHeight > totalTop + 250) {
//     for (let i = 0; i < activity_text.length; i++) {
//       activity_text[i].style.opacity = "1";
//     }
//     for (let i = 0; i < career_text.length; i++) {
//       career_text[i].style.opacity = "1";
//     }

//     // activity_text.style.opacity = "1";
//     // career_text.style.opacity = "1";
//   } else {
//     for (let i = 0; i < activity_text.length; i++) {
//       activity_text[i].style.opacity = "0";
//     }
//     for (let i = 0; i < career_text.length; i++) {
//       career_text[i].style.opacity = "0";
//     }

//     // activity_text.style.opacity = "0";
//     // career_text.style.opacity = "0";
//   }
// });
