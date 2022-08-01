// 判断是否进入可视区
function isContain(dom) {
  // 获取可视窗口的高度。
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  // 获取滚动条滚动的高度
  const scrollTop = document.documentElement.scrollTop;
  // 获取元素偏移的高度。就是距离可视窗口的偏移量。
  const offsetTop = dom.offsetTop;
  const top = offsetTop - scrollTop;
  //   -100 延迟加载
  return top <= screenHeight - 100;
}

window.onscroll = () => {
  const header = document.querySelector("#header");
  var t = document.documentElement.scrollTop;
  // 导航栏
  if (t !== 0) {
    header.classList.add("header_main_change");
    header.style.height = "60px";
  } else {
    header.className = "header_main";
    header.style.height = "70px";
  }
  // 动画
  const bannerDom = document.querySelector("#banner_dom");
  if (isContain(bannerDom)) {
    bannerDom.classList.add("slideInLeft");
    bannerDom.style.opacity = 1;
  }
  const service = document.querySelector("#serviceDom");
  const service1 = document.querySelector("#service1");
  const service2 = document.querySelector("#service2");
  const service3 = document.querySelector("#service3");
  if (isContain(service)) {
    service1.classList.add("fadeInUp");
    service1.style.opacity = 1;
    setTimeout(() => {
      service2.classList.add("fadeInUp");
      service2.style.opacity = 1;
    }, 500);
    setTimeout(() => {
      service3.classList.add("fadeInUp");
      service3.style.opacity = 1;
    }, 300);
  }
};

// swiper
var mySwiper = new Swiper(".swiper", {
  direction: "horizontal", // 垂直切换选项
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");

const offtop = num1.offsetTop - document.documentElement.scrollTop;
var numvalue1 = {
  newV1: 0,
};

window.addEventListener("scroll", () => {
  anime({
    targets: numvalue1,
    newV1: 928,
    round: 1,
    easing: "linear",
    update: function () {
      num1.innerHTML = JSON.stringify(numvalue1.newV1);
    },
  });
});
var numvalue2 = {
  newV2: 0,
};
window.addEventListener("scroll", () => {
  anime({
    targets: numvalue2,
    newV2: 91,
    round: 1,
    easing: "linear",
    update: function () {
      num2.innerHTML = JSON.stringify(numvalue2.newV2);
    },
  });
});
var numvalue3 = {
  newV3: 0,
};
window.addEventListener("scroll", () => {
  anime({
    targets: numvalue3,
    newV3: 11,
    round: 1,
    easing: "linear",
    update: function () {
      num3.innerHTML = JSON.stringify(numvalue3.newV3);
    },
  });
});
var numvalue4 = {
  newV4: 0,
};
window.addEventListener("scroll", () => {
  anime({
    targets: numvalue4,
    newV4: 376,
    round: 1,
    easing: "linear",
    update: function () {
      num4.innerHTML = JSON.stringify(numvalue4.newV4);
    },
  });
});
