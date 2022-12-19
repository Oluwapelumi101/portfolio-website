<script>
    // import project from "../assets/jsons/projects.json"
    export let project
</script>

<style lang="scss">
.box_container {
  width: 49%;
  background-color: #16161a;
  margin: 0.5%;
  // position: relative;
  transition: 0.25s;
}

.box_container:hover {
  transform: scale(1.15);
  border: 1px solid #fff;
  opacity: 1;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 10%;
  /* height: 80%; */
  flex-grow: 1;
  justify-content: space-between;
  cursor: default;

  .project_details h3 {
    margin: 0;
    font-size: var(--project-font);
  }

  .project_details p {
    font-size: var(--normal-font);
    line-height: 21px;
    color: #777778;
    height: 5rem;
    font-family: 'air-light';
  }

  .project_details small {
    margin-bottom: 13px;
    font-size: var(--small-font);
    color: grey;
  }

  .project_links a {
    font-size: var(--small-font);
    line-height: 21px;
    color: inherit;
    text-decoration: none;
    margin-right: 7px;
    color: grey;
  }

  .project_links a i {
    margin-right: 2px;
  }
}

@media (max-width: 991px) {
  .box_container {
    width: 99%;
    margin: 4%;
  }

  .box .project_details p {
    height: 2.5rem;
  }
}

</style>

<!-- {#each project as p} -->


<div class="box_container md:hover:shadow-xs md:hover:z-50">
    <div class="box">
        <div class="project_details">
            <h3> {project.title} </h3>
            <p> {project.description} </p>
            <small class="py-3"> {project.stack} </small>
        </div>

        <div class="project_links"> 
            <!-- implement if condition -->
            {#if project.live != false}
            <small>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <i class="far fa-eye"></i> Live
                </a>
            </small>
            {/if}

                <!-- Implement another conditional -->
            <span>
                {#if project.github != false}
                <small>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-code-branch"></i> Code
                    </a>
                </small>
                {/if}
            </span>
    </div>

</div>
</div>
<!-- {/each} -->