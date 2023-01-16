<script>
    // import DesktopLayout from './DesktopLayout.svelte';
    // import Navbar from '../components/Navbar.svelte';
    import resume from "../assets/jsons/resume.json";
</script>    

<style lang="scss">

#mobile {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    /* overflow: hidden !important; */
    position: relative;
    /* padding-bottom: 10%; */
}
  
.base_container {
    padding: 0;
    height: auto;
    flex-grow: unset;
}
  
  
.hero {
    justify-content: center;
}
  
.hero .intro_box {
    flex-direction: column-reverse;
    margin: 0;
}
  
.base_container .hero .intro_box h1 {
    font-size: 26px;
    text-align: center;
    margin: 0;
    line-height: 1.5;
    padding: 15px;
    padding-bottom: 0;
  }


.my-pic {
    text-align: center;
    padding: 15px;
    padding-bottom: 0;
  }
  
// .base_container .hero .description {
//     justify-content: center;
//     text-align: center;
//     padding: 0;
//   }

.description {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0;

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

  
  
  /*===== BUTTON STYLE =====*/
  
  .go_button_container {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;
  }
  
  .go_button_container a {
    margin: 5px;
    text-decoration: none;
  }
  
  .go_button_container button {
    background-color: #16161A;
    color: #fff;
    padding: 0.7rem 2rem;
    font-size: var(--small-font);
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    font-family: 'air-regular';
  }
  
  .go_button_container button.explore {
    font-size: 15px;
  }
  
  .go_button_container button:hover {
    border: 1px solid #A6A6A7;
  }
  
  .go_button_container button:focus {
    outline: none;
  }

</style>

<!-- <Navbar /> -->

<div id="mobile">
    <div class="base_container">
        <div class="hero">
            <div class="intro_box">
                <div class="my-pic">
                    <img class=" rounded-circle " style="width: 192px; height: 200px;" src="/assets/imgs/azeez.jpg" alt="my-avatar" />
                </div>

                <h1>
                    Hello! <br /> I'm  Oluwapelumi Azeez.
                </h1>

 
            </div>

            <div class="description">
            <p>
                <!-- <span>
                I'm a <span class="highlight">Software Engineer</span>. I like to craft solid, scalable and automated
                products with great user experiences.
                </span> -->
                <!-- {/* <span class="highlight">Javascript</span> */} -->
            </p>
            </div>

            <!-- For Mobile View  -->
            <div class="go_button_container">
                <a class="nav-link" href="/projects">
                    <button class="explore">Explore ➜</button>
                </a>
            </div>
        </div>
    </div>
</div>