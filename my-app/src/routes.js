import Home from "./pages/Home.svelte";
import Resume from "./pages/Resume.svelte";
import Projects from "./pages/Projects.svelte";
import Contact from "./pages/Contact.svelte";
import Header from "./components/Header.svelte";
import MobileLayout from "./layouts/MobileLayout.svelte";

// function to small screen
function isSmallScreen() {
  if (window.innerWidth < 993) {
    console.log("yh")
    return true;
  }
  console.log("nah");
  return false;
}

window.addEventListener("resize", isSmallScreen);


const routes = [
  {
    name: "/",
    component: MobileLayout,
    onlyIf: { guard: isSmallScreen, redirect: "/resume" },
  },
  {
    name: "/resume",
    component: Resume,
  },
  {
    name: "/projects",
    component: Projects,
  },
  {
    name: "/contact",
    component: Contact,
  },
  {
    name: "/header",
    component: Header,
  },
];

export { routes };
