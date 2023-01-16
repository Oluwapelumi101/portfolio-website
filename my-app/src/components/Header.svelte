<script>
    // import logo from "/assets/imgs/zeez.png"

    let addClass = false;

    function toggleClass() {
        console.log("hey")
        addClass = !addClass;
    }
    
</script>
 
<style lang="scss">

#header {
    display: flex;
    flex-direction: column;

    .header_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        z-index: 100;

        .logo_container {
            width: 100%;
        }

        .logo_container .img_link img {
            max-width: 80%;
        }

        .menu_btn_wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu_btn_wrapper .menu_btn {
            background: none;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            border: none;
            position: relative;
        }

        .menu_btn_wrapper .menu_btn .menu_btn_line {
            height: 1px;
            width: 25px;
            margin: 5px 0;
            background-color: #fff;
        }

        .menu_btn_wrapper .menu_btn .menu_btn_line:nth-child(1) {
            width: 35px;
        }

        // /* Open Menu */

        .menu_btn_wrapper .menu_btn.menu_btn_open {
            min-height: 25px;
        }

        .menu_btn_wrapper .menu_btn.menu_btn_open .menu_btn_line {
            width: 25px;
            transition: width .2s linear;
        }
        .menu_btn_wrapper .menu_btn.menu_btn_open .menu_btn_line:nth-child(1) {
            transform: rotate(45deg) translateY(7px);
            position: relative;
            top: 1px;
            transition: transform .2s linear;
        } 
        .menu_btn_wrapper .menu_btn.menu_btn_open .menu_btn_line:nth-child(2) {
            transform: rotate(-45deg) translateY(-7px);
            transition: transform .2s linear;
        }
    }
}


.menu_btn:focus {
    outline: none;
    box-shadow: none;
}

/*====== NAV MENU STYLES =====*/

#header nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #16161A;
    z-index: 2;
    animation-name: slide;
    animation-duration: .3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    transition: 0.6s;
    overflow-y: hidden;

    
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width: 100%;
    
        li {
            display: flex;
            margin: 15px 0;
            font-size: 1.3rem;
        }
        
        a {
            color: inherit;
            text-decoration: none;
        }
    }
    
    nav .connect_box {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
    }
    
    .social_box {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        align-items: center;
        flex-direction: column;
        
        a {
            color: grey;
        }
        .social_icons {
            display: flex;
            justify-content: center;
        }
        
        .social_icons a {
            color: grey;
            text-decoration: none;
            margin: 15px 7.5px 0 7.5px;
            font-size: 24px;
        }

    }
}

@keyframes slide {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.mobile_menu_container {
    width: 100%;
    padding: 20% 5% 15%;
    display: flex;
    flex-direction: column;
    height: 0%;
}

// #myNav{
//     height: 0%;
// }

</style>

<div id="header">
    <div class="header_wrapper">

        <div class="logo_container pt-4">
            <a href="/" class="img_link">
                <img class="w-25" src="/assets/imgs/logo_small.png" alt="My logo" /> 
            </a>
        </div>

        <div class="menu_btn_wrapper">
            <button class="menu_btn" class:menu_btn_open={addClass} on:click={toggleClass}>
                <div class="menu_btn_line"></div>
                <div class="menu_btn_line"></div>
            </button>
        </div>

    </div>

    {#if addClass}
        <nav id="myNav">
            <div  class="mobile_menu_container" >
                <ul>
                    <li>
                    <a href="/" on:click={toggleClass}>
                        Home
                    </a>
                    </li>

                    <li>
                    <a href="/projects" on:click={toggleClass}>
                        Projects
                    </a>
                    </li>

                    <li>
                    <a href="/resume" on:click={toggleClass}>
                        Résumé
                    </a>
                    </li>

                    <li>
                    <a href="/contact" on:click={toggleClass}>
                        Contact
                    </a>
                    </li>

                </ul>

                <div class="social_box">
                    <h3>Connect With Me</h3>
                    <a href="#" class="mt-4">
                        hello@zeez.tech
                    </a>
                    <div class="social_icons">
                        <a href="https://github.com/Oluwapelumi101/">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/the_prince_101">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com/in/zeez-tech">
                            <i class="fab fa-linkedin"></i>
                        </a>
                </div>
            </div>
        </nav>
    {/if}
</div>

