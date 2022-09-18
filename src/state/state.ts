import mugshot from "../assets/headshot.jpeg";

export let model = {
  global: {
    size: "large",
    windowWidth: 800,
    windowHeight: 600,
    screenWidth: 800,
    screenHeight: 600,
    get respContent() {
      if (model.global.size == "large") return true;
      else return false;
    },
    update: function (e: any) {
      model.global.screenWidth = window.screen.availWidth;
      model.global.screenHeight = window.screen.availHeight;
      model.global.windowWidth = window.innerWidth;
      model.global.windowHeight = window.innerHeight;
      if (model.global.windowWidth < 800 || model.global.screenWidth < 1000) model.global.size = "small";
      else model.global.size = "large";
    },
  },
  main: {
    mug: mugshot,
  },
};
