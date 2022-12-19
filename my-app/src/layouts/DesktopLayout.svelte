<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  // import { Route } from 'svelte-router-spa'
  // export let currentRoute
  // console.log('hey', Event.target)
</script>

<style lang="scss">

.base_container {
  padding: 8% 5% 8% 15%;
  /* padding-left: 15%; */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

}

.intro_box {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: var(--h1-font);
        margin-right: 15px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .my-pic {
        display: none;
        // width: 12rem;
        // height: 12rem;
    }
}
    
.description {
  display: flex;
  padding-right: 20%;
    p {
        font-style: normal;
        font-weight: normal;
        font-size: var(--normal-font);
        line-height: 21px;
        color: #ffffff;
        margin: 0;
        line-height: 2;

        span {
            color: #777778;
        }

        span.highlight {
            color: #fff;
        }

        a {
            color: #fff;
            text-decoration: none;
        }
    }
}

.hero .social_buttons {
  display: none;
}



.base_container .go_button_container {
  display: none !important;
}

@media (max-width: 993px) {
  .intro_box .my-pic {
    display: initial;
  }

  .base_container .go_button_container {
    display: flex !important;
  }
}

// @media (max-wdth: 993px) {
// #mobile {
//     display: flex;
//     flex-direction: column;
//     /* height: 100%; */
//     /* overflow: hidden !important; */
//     position: relative;
//     /* padding-bottom: 10%; */
//   }
  
//   .base_container {
//     padding: 0;
//     height: auto;
//     flex-grow: unset;
//   }
  
//   .base_container nav {
//     display: none;
//   }
  
//    .base_container .footer {
//     display: none;
//   }
  
//   .base_container .hero {
//     justify-content: center;
//   }
//   .base_container .hero .intro_box {
//     flex-direction: column-reverse;
//     margin: 0;
//   }
  
//   .base_container .hero .intro_box h1 {
//     font-size: 26px;
//     text-align: center;
//     margin: 0;
//     line-height: 1.5;
//     padding: 15px;
//     padding-bottom: 0;
//   }
  
//   .base_container .hero .description {
//     justify-content: center;
//     text-align: center;
//     padding: 0;
//   }
  
//   .base_container .hero .intro_box h1 br {
//     display: none;
//   }
  
//   .social_buttons {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//   }
  
//   .social_buttons a {
//     margin: 3% 6%;
//     color: inherit;
//     font-size: 1.25rem;
//     text-decoration: none;
//     display: flex;
//   }
  
//  .social_buttons .credits {
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     box-sizing: border-box;
//     padding: .5rem 0 0;
//     margin: 0;
//   }
  
//  .social_buttons .credits p {
//     display: flex;
//     width: fit-content;
//     box-sizing: border-box;
//     margin: .2rem 0 0;
//     padding: 0;
//     justify-content: center;
//     font-size: var(--xsmall-font) !important;
//     color: #777778;
//   }
  
//   .social_buttons .credits p  a {
//     margin: 0;
//     font-size: var(--xsmall-font) !important;
//     text-decoration: none;
//     color: #cecece;
//     margin-left: 5px;
//   }
  
//   /*===== BUTTON STYLE =====*/
  
//   .go_button_container {
//     display: flex;
//     justify-content: center;
//     margin: 20px 0 0;
//   }
  
//   .go_button_container a {
//     margin: 5px;
//     text-decoration: none;
//   }
  
//   .go_button_container button {
//     background-color: #16161A;
//     color: #fff;
//     padding: 0.7rem 2rem;
//     font-size: var(--small-font);
//     border: 1px solid transparent;
//     display: flex;
//     align-items: center;
//     font-family: 'air-regular';
//   }
  
//   .go_button_container button.explore {
//     font-size: 15px;
//   }
  
//   .go_button_container button:hover {
//     border: 1px solid #A6A6A7;
//   }
  
//   .go_button_container button:focus {
//     outline: none;
//   }
  
//   .go_button_container button b {
//     transform: rotate(180deg);
//     margin: 0;
//     font-weight: 100;
//     margin-right: 5px;
//   }
  
// }

</style>


<div class="base_container">
    <div class="hero">
        <div class="intro_box">
            <h1>
                Hello! I'm <br /> Oluwapelumi Azeez.
            </h1>
        </div>

        <div class="description">
          <p>
            <span>
              Welcome to my portfolio! I'm a <span class="highlight">Software Developer</span> passionate about creating innovative and user-friendly solutions.
            </span>
          </p>
        </div>
    </div>

    <div>
        <Navbar />
    </div>
      
      <div class=" ">
          <Footer />
      </div>
</div>

