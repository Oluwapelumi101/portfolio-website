



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

