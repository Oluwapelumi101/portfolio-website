


<style lang="scss">
    form {
    display: flex;
    flex-direction: column;
  
    .form_section {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
  
        label {
            width: 100%;
            display: flex;
            flex-direction: column;
            line-height: var(--h3-font);
            font-size: var(--semi-font);
        }
        
        label input, textarea {
            background: #16161A;
            color: lightgray;
            border: 1px solid transparent;
            padding: 0.9rem;
            margin-top: 7px;
            font-family: 'air-regular';
        }
        
        label input:focus, textarea:focus {
            border-color: rgb(75, 75, 75);
            outline: none;
        }
        
        label input::placeholder, textarea::placeholder  {
            color: #777778;
            font-size: var(--small-font);
            line-height: 2;
            font-family: 'air-regular';
        }
        
        button {
            background-color: #16161A;
            color: #fff;
            border: none;
            padding: 0.9rem;
            font-size: var(--semi-font);
            font-family: 'air-regular';
        }
        
        button:focus {
            outline: none;
            border: none;
        }
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        border-color: rgb(75, 75, 75);
        box-shadow: 0 0 0 30px #16161A inset !important;
        -webkit-box-shadow: 0 0 0 30px #16161A inset !important; 
        -webkit-text-fill-color: #777778;
    }
}

.success {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #101011;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
  
    h1 {
        font-size: 700%;
        margin: 0;
        text-align: center;
    }
    
    h2 {
        margin: 0;
        text-align: center;
        position: relative;
        top: -10px;
    }
    
    p {
        margin: 0;
        text-align: center;
        position: relative;
        color: #777778;
        line-height: 1.5;
    }
}
</style>


<div>
    <form class="gform" name="contact" method="POST" data-email="azeezpelumi101@gmail.com" 
    action="https://script.google.com/macros/s/AKfycby5Jh1WYfI65olrKWShEZh8aJf9mDSlHm0rQFPzeidN43Rg47c1Z3AmpifdHXDmNz8-Ew/exec">
        <!-- <input type="hidden" name="form-name" value="contact" /> -->
        <div class="form_section">
            <label>
                <span>Your Name*</span>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </label>
        </div>

        <div class="form_section">
        <label>
            <span>Your Email*</span>
            <input required type="email" id="email" name="email" placeholder="Enter your email" />
        </label>
        </div>

        <div class="form_section">
        <label>
            <span>Your Message*</span>
            <textarea required id="message" name="message" rows={10} minLength={10}></textarea>
        </label>
        </div>

        <div class="form_section">
            <button type="submit"> Send Message</button>
        </div>
    </form> 
 </div>

<!-- Submit the Form to Google Using "AJAX" -->
<script data-cfasync="false" src="scripts/form-submission-handler.js"></script>
<!-- END -->