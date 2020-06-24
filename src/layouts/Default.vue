<template>
  <div class="layout" >


    <header class="header">
      <figure class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 86.685 86.685">
            <defs>
              <filter id="Path_2" x="0" y="0" width="86.685" height="86.685" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="5" result="blur"/>
                <feFlood flood-opacity="0.051"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g transform="translate(-917 -21.827)">
              <g transform="matrix(1, 0, 0, 1, 917, 21.83)" filter="url(#Path_2)">
                <path id="Path_2-2"  d="M-21.658-50C-41.5-50-50-41.5-50-21.658h0c0,19.84,8.5,28.342,28.342,28.342h0c19.84,0,28.342-8.5,28.342-28.342h0C6.685-41.5-1.818-50-21.658-50Z" transform="translate(65 62)" fill="#fff"/>
              </g>
              <path  d="M-35.875-50C-45.762-50-50-45.762-50-35.875h0c0,9.888,4.238,14.125,14.125,14.125h0c9.888,0,14.125-4.238,14.125-14.125h0C-21.749-45.762-25.987-50-35.875-50Z" transform="translate(996 98.259)" fill="none" stroke="#399cff" stroke-width="4"/>
              <circle id="Ellipse_24"  cx="5" cy="5" r="5" transform="translate(955 57)" fill="#399cff"/>
            </g>
          </svg>
          
      </figure>
    </header>
   
   

    <main class="main" >
      <section class="block">
        <h1>Smoother corners</h1>
        <p class="serif">Inspired by the design of apple icons, make your corners looks as smooth as butter ! A litle tool and plugin made by Simon Renault.</p>
      </section>


      <section class="block" >
        <div class="actions">
          <button class="button disabled" disabled >Get Sketch plugin</button>
          <button class="button disabled"> Download Xd plugin</button>
          <button class="button disabled" disabled >Get Figma plugin</button>
        </div>
          
      </section>


      <section class="block" >
        <slot/>
      </section>

      <section class="block light why">
          <h2>Why?</h2>
          <p class="serif">Where did I got the idea to build this tool ? And how I made it happen for real, here are some insight about my work.</p>
          <p>
            No doubt that today bold border radius are a big Ui trend. While this is nothing bad I still think that large border radius sometimes seems odd to eyes. This is due to the transition betwwen the rounded part and the linear one. Apple and some other brands have since a long time udurstood that pricinciple and found ways to smoothen the transition betwwen the rounded and straigt part of icons or even devices edges.
            <br>
            <br>
            The result? More pleasing icons!
            <br>
            <br>
            <br>
          </p>
        
      </section>

      <section class="block contact">
        <h2>Feature request</h2>
        <p class="serif">
          Found a bug ? Have an awesome idea and you want to talk about it ? Or maybe you simply want to have an improvement idea for this tool. In all the cases here is a way to get in touch.
        </p>

        <form action="" class="form form-feedback">
            <input type="text" name="s_email" id="" placeholder="Your email if you want" class="email">
            <textarea name="s_message" id="" class="copy" placeholder="Tell me about the feature or change you would like me to implement :)"></textarea>
            <button class="button pulsing submit">
              <div> Submit </div> 
              <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="paper-plane">
                  <rect id="Rectangle_124" data-name="Rectangle 124" width="24" height="24" fill="#fff" opacity="0"/>
                  <path id="Path_149" data-name="Path 149" d="M21,4a1.31,1.31,0,0,0-.06-.27V3.64a.884.884,0,0,0-.49-.49h-.09A.86.86,0,0,0,20.05,3H20a1,1,0,0,0-.3,0L1.7,9a1,1,0,0,0,0,1.9l8.53,2.84,2.84,8.53a1,1,0,0,0,1.9,0l6-18A1,1,0,0,0,21,4ZM16.3,6.29l-5.57,5.57L5.16,10ZM14,18.84l-1.86-5.57L17.71,7.7Z" fill="#fff"/>
                </g>
              </svg>
            </button>
        </form>
      
      </section>
    



  </main>


  <footer class="footer">

    <section class="block">
      <p class="light">
        <span>Made with</span> 
        <svg class="love"  width="100%" height="100%" viewBox="0 0 24 24">
          <g id="heart">
            <rect width="24" height="24" fill="#faf9f9" opacity="0"/>
            <path d="M12,21a1,1,0,0,1-.71-.29L3.52,12.93a5.233,5.233,0,1,1,7.4-7.4L12,6.61l1.08-1.08a5.233,5.233,0,1,1,7.4,7.4l-7.77,7.78A1,1,0,0,1,12,21Z" fill="#faf9f9"/>
          </g>
        </svg>        
        <span>by Simon Renault</span>
      </p>
      <hr class="sep">
      <ul class="contacts">
        <li>
          <a target="_blank" href="https://simon-renault.com">
            <img src="icons/social/website.svg" alt="website icon">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://https://github.com/Simon-Renault">
            <img src="icons/social/github.svg" alt="github icon">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/simon_r404">
            <img src="icons/social/tweeter.svg" alt="tweeter icon">
          </a>
        </li>
        <li>
          <a target="_blank" href="http://simon-renault.com">
            <img src="icons/social/medium.svg" alt="medium icon">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/simon.renault">
            <img src="icons/social/instagram.svg" alt="instagram icon">
          </a>
        </li>

        <span class="flex-w">
          <li>
            <a target="_blank" href="https://dribbble.com/Simon-Renault">
              <img src="icons/social/dribble.svg" alt="dribble icon">
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:simon.renault.pro@gmail.com">
              <img src="icons/social/email.svg" alt="email icon">
            </a>
          </li>
        </span>
       
      </ul>
    </section>
  </footer>


  </div>

</template>

<script>
export default {
  components: {

  }
}
</script>


<style>


</style>
