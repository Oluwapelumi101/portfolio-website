<script>
    import { onMount } from 'svelte';

    // A Function to set the active menu with event listeners 
    let currentPage = '/resume';
    function getListItemAttribute(event) {
        let attributeValue = event.target.getAttribute('href');
        currentPage = attributeValue;
    }

    // Function to parse the Current URL in case of a page reload
    function getLastUrlPart(currentUrl) {
        const match = currentUrl.match(/[^/]+$/);
        return match ? match[0] : '';
    }
     
    // Ensuring the active button is set on the right page in a page reload
    onMount(() => {
        let currentUrl = window.location.href;
        currentPage = "/" + getLastUrlPart(currentUrl)
    });

</script>

<style lang="scss">
    nav {
    display: flex;
    flex-direction: column;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
        }

        ul li {
            display: flex;
            align-items: center;
            cursor: pointer;
            width: fit-content;
            margin: 10px 0;
            padding: 0;
            color: #777778;
        }

        ul li small {
            display: flex;
            align-items: center;
            margin: 0;
            font-size: var(--small-font);
        }

        ul li small a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: inherit;
        }

        ul li a img {
            margin: 0 10px;
            width: 30px;
            pointer-events: none;
            transition: width 0.3s linear;
            opacity: 0.5;
        }

        ul li.active_menu {
            opacity: 1;
            transition: all 0.3s linear;
            color: #fff;
        }

        ul li.active_menu a img {
            margin: 0 10px;
            width: 50px;
            transition: width 0.3s linear;
            opacity: 1;
        }

        ul li:hover {
            opacity: 1;
            transition: all 0.3s linear;
            color: #fff;
        }

        ul li:hover a img {
            margin: 0 10px;
            width: 50px;
            transition: width 0.3s linear;
        }
}

</style>


<nav>
    <div class="">
        <div>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li class="menu" class:active_menu={currentPage === '/resume'} on:click={getListItemAttribute}>
                    <small>00 
                        <a class="nav-link" href="/resume">
                            <img src="assets/svgs/menu-line.svg" alt="">
                            Resume
                        </a>
                    </small>
                </li>

                <li class="menu" class:active_menu={currentPage === '/projects'} on:click={getListItemAttribute} >
                    <small>01 
                        <a class="nav-link" href="/projects" >
                            <img src="assets/svgs/menu-line.svg" alt="">
                            Projects
                        </a>
                    </small>
                </li>

                <li class="menu" class:active_menu={currentPage === '/contact'} on:click={getListItemAttribute}>
                    <small>ß2
                        <a class="nav-link" href="/contact">
                            <img src="assets/svgs/menu-line.svg" alt="">
                            Contact
                        </a>
                    </small>
                </li>

            </ul>
        </div>
    </div>
</nav>