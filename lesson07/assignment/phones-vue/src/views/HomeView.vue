<template>
  <div class="home">
    <section class="hero-image" title="photo creds: https://i.gadgets360cdn.com/large/Best_phones_2018_cover_ndtv_1545054680573.jpg">
      <!--
      animates the text in the header using lax.js
      lax.js code from https://alexfox.dev/laxxx/
      -->
      <div id="hero-1" class="hero-text">
        <h1 class="lax" data-lax-scale="(vh*0.3) 1, -elh 0.2" data-lax-anchor="self" style="backface-visibility: hidden; transform: scale(1);">Phones.com</h1>
      </div>
      <div id="hero-2" class="hero-text">
        <h4 class="lax" data-lax-translate-x="vh 0, -elh (vw*.2)" data-lax-anchor="self" style="backface-visibility: hidden; transform: translateX(56.8889px);">Helping you chose your next smartphone!</h4>
      </div>
    </section>

    <!-- 
    Displays links to phone company sites.
    Also animates the link icons using lax.js 
    -->
    <section class="links">
      <!--Google-->
      <a class="lax" data-lax-preset="fadeIn swing" data-lax-anchor="self" href="https://store.google.com/us/category/phones" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="Google logo" /></a>
      <!--Apple-->
      <a class="lax" data-lax-preset="fadeIn swing" data-lax-anchor="self" href="https://www.apple.com/iphone/" target="_blank"><img src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/APPLE-512.png" alt="Apple logo" /></a>
      <!--Samsung-->
      <a class="lax" data-lax-preset="fadeIn swing" data-lax-anchor="self" href="https://www.samsung.com/us/mobile/phones/all-phones/" target="_blank"><img src="https://openconnectivity.org/wp-content/uploads/2015/09/samsung-logo-4.png" alt="Samsung logo" /></a>
      <!--OnePlus-->
      <a class="lax" data-lax-preset="fadeIn swing" data-lax-anchor="self" href="https://www.oneplus.com" target="_blank"><img src="https://static.savings-united.com/shop/27740/logo/_0021_OnePlus-coupons.png" alt="OnePlus logo" /></a>
    </section>

    <!-- <main class="main"> -->
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Ultrices dui sapien eget mi proin sed libero enim. Auctor eu augue ut lectus. Pellentesque sit amet porttitor eget dolor morbi non arcu. Laoreet sit amet cursus sit amet dictum. Non tellus orci ac auctor augue mauris. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Lorem dolor sed viverra ipsum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Dignissim diam quis enim lobortis. Nibh tellus molestie nunc non blandit massa. Vel facilisis volutpat est velit egestas dui id ornare arcu. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Ipsum consequat nisl vel pretium lectus quam id leo in. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Iaculis at erat pellentesque adipiscing commodo elit.</p>

      <p>Viverra adipiscing at in tellus integer feugiat. Tellus cras adipiscing enim eu turpis egestas pretium. Auctor urna nunc id cursus metus aliquam eleifend mi in. Ac tincidunt vitae semper quis lectus nulla at. Volutpat blandit aliquam etiam erat velit scelerisque in. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Porta nibh venenatis cras sed felis eget velit aliquet. At imperdiet dui accumsan sit amet. Pellentesque dignissim enim sit amet venenatis urna. Varius vel pharetra vel turpis nunc eget.</p> -->
      
      <!-- Dismissable popover -->
      <!-- Code from https://getbootstrap.com/docs/5.0/components/popovers/ -->
      <!-- <button id="popover" tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="About Me" data-bs-content="I am a phone enthusiast, web developer in the making, and I have cold hands.">About Me</button> -->
      <HomePage/>
      
    <!-- </main> -->
  </div>
</template>

<style>
  .main {
    padding-top: 10px;
    margin-top: 0;
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomePage from "@/components/HomePage.vue";
// document.getElementById("h1").innerHTML = "Phones.com";

// import "bootstrap/dist/js/bootstrap.min.js";
// import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
// import { Popover } from '@popperjs/core'

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

export default {
  name: "HomeView",
  components: {
    HomePage,
  },
  // mounted() {
  //    // got code from https://therichpost.com/vue-3-bootstrap-5-popover-working-demo/
  //   Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
  //   .forEach(popoverNode => new Popover(popoverNode, {
  //     trigger: 'focus'
  //   }))
  // }
};
</script>
