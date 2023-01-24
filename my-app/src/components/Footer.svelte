<script>

</script>

<style lang="scss">
    
    .footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  /* flex-direction: column; */

    img {
        margin-right: 15px;
    }

    .social {
        display: flex;
        flex-direction: row;
        margin-top: 7px;
    }

    .social a {
        display: flex;
        align-items: center;
        font-size: var(--normal-font);
        margin-right: 2px;
        color: inherit;
        text-decoration: none;
    }

    .social a i {
        margin-right: 10px;
        color: grey;
    }

    .social a img {
        width: 40%;
        margin-left: 2px;
        height: 80%;
    }
}

</style>



<div class="footer">
    <img class=" rounded-circle img-fluid" style="width: 4rem; height: 5.15rem;" src="/assets/imgs/azeez.jpg" alt="my-avatar" />

    <div class="social">
        <a href="https://github.com/Oluwapelumi101/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> Github
        <img src="/assets/svgs/arrow.svg" alt="pointer" />
        </a>

        <a href="https://twitter.com/the_prince_101" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i> Twitter <img src="/assets/svgs/arrow.svg" alt="pointer" />
        </a>

        <a href="https://linkedin.com/in/zeez-tech" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i> LinkedIn <img src="/assets/svgs/arrow.svg" alt="pointer" />
        </a>
    </div>
</div>

