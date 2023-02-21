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
    -->
    <section class="links">
      <!--Google-->
      <a href="https://store.google.com/us/category/phones" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="Google logo" /></a>
      <!--Apple-->
      <a href="https://www.apple.com/iphone/" target="_blank"><img src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/APPLE-512.png" alt="Apple logo" /></a>
      <!--Samsung-->
      <a href="https://www.samsung.com/us/mobile/phones/all-phones/" target="_blank"><img src="https://openconnectivity.org/wp-content/uploads/2015/09/samsung-logo-4.png" alt="Samsung logo" /></a>
      <!--OnePlus-->
      <a href="https://www.oneplus.com" target="_blank"><img src="https://static.savings-united.com/shop/27740/logo/_0021_OnePlus-coupons.png" alt="OnePlus logo" /></a>
    </section>

    <!-- displays about button -->
    <HomePage></HomePage>
      
  </div>
</template>

<style>
  .main {
    padding-top: 10px;
    margin-top: 0;
  }
</style>

<script>
import HomePage from "@/components/HomePage.vue";

// Animates the header text on page scroll 
// Code from: https://css-tricks.com/books/greatest-css-tricks/scroll-animation/ 
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
};
</script>
