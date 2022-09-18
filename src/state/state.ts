import mugshot from "../assets/headshot.jpeg";
import menuopen from "../assets/menu.png";
import menuclose from "../assets/menuclose.png";

export let model = {
  global: {
    size: "large",
    orientation: "portrait",
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
      if (window.matchMedia("(orientation: portrait)").matches) {
        model.global.orientation = "portrait";
      } else if (window.matchMedia("(orientation: landscape)").matches) {
        model.global.orientation = "landscape";
      }
      if ((model.global.windowWidth < 800 || model.global.screenWidth < 1000) && model.global.orientation == "portrait")
        model.global.size = "small";
      else model.global.size = "large";

      console.log(model.global.orientation);
    },
  },
  main: {
    mug: mugshot,
  },
  menu: {
    src: menuopen,
    cssString: "",
    isOpen: false,
    toggle: (_event: any, model: any) => {
      if (model.menu.isOpen) {
        model.menu.isOpen = false;
        model.menu.src = menuopen;
        model.menu.cssString = "";
      } else {
        model.menu.isOpen = true;
        model.menu.src = menuclose;
        model.menu.cssString = "menuOpen";
      }
    },
  },
};
