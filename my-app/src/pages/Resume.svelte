<script>
  import resume from "../assets/jsons/resume.json";
  // import { Route } from 'svelte-router-spa'
  // export let currentRoute
  // console.log('hey',currentRoute)
    console.log('hey', Event.target)
</script>
<style lang="scss">
.resume_container {
    display: flex;
    flex-direction: column;
    background-color: #16161A;
    padding: 5%;
  
    .top_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        h2 {
            font-size: var(--h2-font);
            line-height: 47px;
            margin: 0;
        }
        
        .buttons {
            display: flex;
            justify-content: space-between;
            align-self: flex-start;
        }
        
        .buttons a {
            margin: 5px;
            color: inherit;
            text-decoration: none;
            font-size: var(--normal-font);
        }
    }
    
    .subheading {
        margin: 6px 0;
        color: #cfcfcf;
        font-size: var(--semi-font);
    }
    
    .summary {
        display: flex;
        margin-top: 5px;
    
        p {
            font-size: var(--normal-font);
            line-height: 1.5;
            color: #777778;
            font-family: 'air-light';
            font-size: 16px;
        }
    }
    
    .divider {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        margin-top: 15px;
    
        p {
            margin: 0 10px 0 0;
            font-size: var(--normal-font);
            color: #e2e2e2;
        }
        
        span {
            flex-grow: 1;
            height: 1px;
            background-color: #777778;
        }
    }
    
    .skills p {
        font-size: 14px;
        font-family: 'air-light';
        color: #777778;
        // display: flex;
        margin: 0;
        line-height: 2;
    }
    
    .exp_container .experience{
        .title {
            margin: 0;
            /* font-size: 15px; */
            font-size: var(--semi-font);
            line-height: 2;

            span {
                font-size: 14px;
                color: #777778;
                margin-left:5px;
            }
        }
        
        a {
            color: #fff
        }
        
        .description {
            display: block;
            line-height: 1.5;
            color: #777778;
            margin: 10px 0;
            padding: 0;

            p {
                margin: 2px 0;
                width: 100%;
                color:  #777778;
                font-size: 14px;
                display: flex;
                font-family: 'air-light';

                span {
                    margin-right: 5px;
                }
            }
        }
    }
}
  
.resume .go_button_container {
    display: none;
}
  
// @media (max-width: 993px) {
//   .resume_container {
//       margin: 30px 0;

//       .top_row .buttons {
//               align-self: unset;
      
//           span {
//               display: none;
//           }
      
//           a {
//               margin: 7px;
//               font-size: 20px;
//           }
//     }

//     // .go_button_container {
//     //       display: flex;
//     //       justify-content: center;
//     //       margin: 20px 0 0;
//     //     }
        
//     //     .go_button_container a {
//     //       margin: 5px;
//     //       text-decoration: none;
//     //     }
        
//     //     .go_button_container a button {
//     //       background-color: #16161A;
//     //       color: #fff;
//     //       padding: 0.7rem 2rem;
//     //       font-size: var(--small-font);
//     //       border: 1px solid transparent;
//     //       display: flex;
//     //       align-items: center;
//     //       font-family: 'air-regular';
//     //     }
        
//     //     .go_button_container button.explore {
//     //       font-size: 15px;
//     //     }
        
//     //     .go_button_container button:hover {
//     //       border: 1px solid #A6A6A7;
//     //     }
        
//     //     .go_button_container button:focus {
//     //       outline: none;
//     //     }
//     //     .go_button_container button b {
//     //       -webkit-transform: rotate(180deg);
//     //       transform: rotate(180deg);
//     //       margin: 0 5px 0 0;
//     //       font-weight: 100;
//     //     }


//   }

// }

    
@media (max-width: 993px) {
    .resume {
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


<div class="resume">
    <div class="resume_container">
        <div class="top_row">
           <h2>{resume.firstName} {resume.lastName}</h2>
            <div class="buttons">
                <a href="https://drive.google.com/file/d/1K69yO6lei1IaZMBeICGkpXCXGSFB7HtN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <small>
                    <i class="fas fa-download"></i> <span>Download </span>
                </small>
                </a>
            </div>
        </div>

        <div class="divider">
          <p class="subheading">{resume.title}</p>
          <span></span>
        </div>

        <div class="summary" >
          <p style="white-space: pre-line;">{resume.intro}</p>
        </div>

        <div class="divider">
          <p>Skills</p>
          <span></span>
        </div>

        <div class="skills"><p class="">
          <!-- //skills -->
          {#each resume.skills as skill}
          <p>
            <span class="pr-2 font-bold text-white">{skill.title}:{': '}</span>
           
            {#each skill.body as i}
            <span>{i}{', '}</span>
            {/each}
          </p>
          {/each}
        </div>

        <div class="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div class="exp_container">
            {#each resume.experience as experience}
              <section class="experience">
              <p class="title">
                {experience.company} - {experience.role}
                <span>
                  <br /> {experience.startDate} - {experience.endDate ? experience.endDate : 'CURRENT'}
                </span>
              </p>
              <article class="description">
                <!-- {experience.achievements ? experience.achievements: 'null'} -->
                {#each experience.achievements as achievement }
                  <p>
                    <span>&#8594;</span>
                    {achievement}
                  </p>
                {/each}
              </article>
              </section>
            {/each}
        </div>

        <div class="divider">
          <p>Education</p>
          <span></span>
        </div>

        <div class="exp_container">
          <section class="experience">
              {#each resume.education as education}
              <p class="title">
                {education.title}
                <br />
                <span>
                  {education.startDate} - {education.endDate}
                </span>
              </p>
              {/each}
          </section>
        </div>


        <div class="divider">
          <p>Professional Development</p>
          <span></span>
        </div>

       <div class="exp_container">
          <section class="experience">
            {#each resume.development as development}
              <p class="title">
                {development.title} <br />
                <small>{development.organisation}</small> <br />
                <span>{development.date} </span>
                <span> <a href="{development.verification}" style="color: #777778;">
                  Show credential
                  <li-icon aria-hidden="true" type="link-external" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"                   data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg></li-icon>
                </a> </span> 
              </p>
             {/each}
          </section>
        </div>

        <div class="divider">
          <p>Languages</p>
          <span></span>
        </div>

        <div class="exp_container">
          <section class="experience">
            {#each resume.languages as language}
              <p class="title">
                {language.name} -<span>{language.level}</span>
              </p>
            {/each}
          </section>
        </div>

        <div class="divider">
          <p>Hobbies</p>
          <span></span>
        </div>

        <div class="exp_container">
          <section class="experience">
            <article class="description">
              <p>
                {#each resume.hobbies as hobby}
                  <span>{hobby},</span>
                {/each}
              </p>
            </article>
          </section>
        </div>


        <div class="divider">
          <p>Other Interests</p>
          <span></span>
        </div>

        <div class="exp_container">
          <section class="experience">
            <article class="description">
              <p>
                {#each resume.others as others}
                  <span>{others},</span>
                {/each}
              </p>
            </article>
          </section>
        </div>

        <div class="divider">
          <p>Projects</p>
          <span></span>
        </div>


        <div class="exp_container">
          <section class="experience">
            <article class="description">
              <p>
                Some selected projects can be found <span> </span>
                <span class="underline">
                    <a href="/projects">here</a>
                </span>
              </p>
            </article>
          </section>
        </div>
    </div>

    <div class="go_button_container">
        <a href="/projects">
          <button>
            <b>➜ </b> Projects
          </button>
        </a>
        <a href="/contact">
          <button>Contact ➜ </button>
        </a>
    </div>

</div>
