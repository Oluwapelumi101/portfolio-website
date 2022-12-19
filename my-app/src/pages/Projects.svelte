 <script>
    import projects from "../assets/jsons/projects.json"
    import Project from "../components/Project.svelte";

 </script>
 
 
 <style lang="scss">

    .project {
      display: flex;
      flex-direction: column;
      width: 100%;
    
      .go_button_container {
          display: none;
      }
    
      .portfolio_showcase {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
      }
    
      .go_button_container {
          display: none;
      }
  } 
 
  @media (max-width: 993px) {
      .project {
        margin: 30px 0;
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
          
          .go_button_container a button {
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
          .go_button_container button b {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            margin: 0 5px 0 0;
            font-weight: 100;
          }
        }
  }

</style>
 
 
 
 
<div class="project">
  <div class="group portfolio_showcase">
      {#each projects as project}
        <!-- <p> {project.title}</p> -->
        <Project project= {project} />
      {/each}
  </div>

  <div class="go_button_container">
    <a href="/"> 
      <button><b>➜ </b> Home</button> 
    </a>
    <a href="/resume">
      <button>Résumé ➜ </button>
    </a>
  </div>
</div>
