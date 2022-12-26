<svelte:head>
  <!-- <link rel='stylesheet' href='/global.scss'> -->
  <link rel="preload" href="https://tenor.com/view/loading-loading-forever-bobux-loader-gif-18368917" as="image">
  <style>
    .splash {
      background-image: url('splash.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: transform 1s ease-in-out;
      transform: translateY(0);
    }
    .splash.hidden {
      transform: translateY(-100%);
    }
  </style>
</svelte:head>



<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  import Header from "./components/Header.svelte"
  import DesktopLayout from './layouts/DesktopLayout.svelte';
  import Social from './components/Social.svelte';

  // Screen 
  let innerWidth = 0
	let innerHeight = 0
	
	$: condition = innerWidth <= 993
  $: conditionMobile = innerWidth <= 993

  setTimeout(() => {
    document.querySelector('.splash').classList.add('hidden');
  }, 2000);

</script>



<style lang="scss">
  
  .desktop-view {
    display: none;
  }

	.desktopLayout-conditional{
    display:flex;
}
	.desktopLayout-conditionalMobile{
    display: none;
}



/*===== IMPORTING FONTS =====*/

@font-face {
  font-family: 'air-regular';
  src: url('./assets/fonts/AirbnbCereal-Book.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
  font-family: 'air-semibold';
  src: url('./assets/fonts/AirbnbCereal-Medium.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
  font-family: 'air-light';
  src: url('./assets/fonts/AirbnbCereal-Light.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
  font-family: 'air-bold';
  src: url('./assets/fonts/AirbnbCereal-Bold.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
  font-family: 'air-extrabold';
  src: url('./assets/fonts/AirbnbCereal-ExtraBold.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
  font-family: 'air-black';
  src: url('./assets/fonts/AirbnbCereal-Black.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "air-regular";
  background: #101011;
  color: #fff;
}

#root {
  height: 100%;
}

.App {
  height: 100%;
  overflow: hidden;
}

.app-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.app-container .fixed {
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
}

.app-container .main {
  height: 100%;
  width: 50%;
  overflow-y: auto;
}

.main::-webkit-scrollbar {
  width: 7px;
}

.main::-webkit-scrollbar-track {
  background: #101011;
}

.main::-webkit-scrollbar-thumb {
  background: #101011;
}

.main::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.app-container .main .pages_container {
  padding: 8% 15% 8% 5%;
  flex-grow: 1;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  font-size: var(--normal-font);
}

@media (min-width: 1400px) {
  .App {
    max-width: 1600px;
    margin: auto;
  }
}

body {
  --h1-font: 2.5rem;
  --h2-font: 36px;
  --h3-font: 22px;
  --project-font: 19px;
  --semi-font: 16px;
  --normal-font: 14px;
  --small-font: 13px;
  --xsmall-font: 12px;
}

@media (min-width: 1440px) {
  body {
    --h1-font: 3.2rem;
    --h2-font: 42px;
    --h3-font: 28px;
    --project-font: 25px;
    --semi-font: 22px;
    --normal-font: 18px;
    --small-font: 17px;
    --xsmall-font: 16px;
  }
}

/*===== RESPONSIVE STYLING =====*/

.mobile_container {
  display: none;
}

@media (min-width: 994px) and (max-width: 1200px) {
  .App .app-container .fixed .base_container {
    padding-left: 8%;
  }

  .App .app-container .main .pages_container {
    padding-right: 8%;
  }

  h1 {
    font-size: 34px !important;
  }
}

@media (max-width: 993px) {
  .App {
    overflow: auto;
  }

  .App .app-container {
    display: none;
  }

  .mobile_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5%;
  }

  .mobile_container.set_height {
    height: 90%;
    height: -moz-available;
    height: -webkit-fill-available;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .loader {
    animation: slide infinite 1.5s linear;
  }
}

@keyframes slide {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }

  to {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -o-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    transform: scale(2);
    opacity: 1;
  }
}
</style>

<svelte:window bind:innerWidth bind:innerHeight />




<div class="App">
<!-- Rendinering image before page todo -->
  <div class="splash">  
    <!-- Azeez -->
    <!-- <link rel="preload" href="/assets/imgs/me.jpeg" as="image"> -->
    <!-- <img src="assets/svgs/zeez-logo-png" alt="">
    <img class=" rounded-circle " style="width: 192px; height: 200px;" src="/assets/imgs/me.jpeg" alt="my-avatar" /> -->
  </div>

  <div class= "desktop-view mobile_container" class:desktopLayout-conditional={condition}>
    <Header />

    <Router {routes} />
 
    <Social />
  </div>

  <div class="app-container" class:desktopLayout-conditionalMobile={conditionMobile}>
    <div class="fixed">
      <DesktopLayout />
    </div>
    <div class="main">
      <div class="pages_container">
        <Router {routes} />
      </div>
    </div>
  </div>
</div>

