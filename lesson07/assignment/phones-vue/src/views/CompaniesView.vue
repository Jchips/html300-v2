<template>
  <div class="companies">
    <!-- <header>
      <h1 id="h1">Companies</h1>
    </header> -->

    <!-- Makes a card for each different image (phone company) using v-for loop with an array -->
    <div v-for="image in images" :key="image" class="phone-company">
      <img :src="image" class="img-fluid img-thumbnail company-img" alt="pixel 7 variants">
      <div class="card text-center">
        <div class="card-header">
          Google Pixel 7
        </div>
        <div class="card-body">
          <p class="card-text">The Google Pixel 7 comes in 2 different variants:</p>
          <ul class="card-text">
            <li>Pixel 7 Pro</li>
            <li>Pixel 7</li>
          </ul>
          <p class="card-text">Later in 2023 we should also be expecting a Pixel 7a -- the budget Pixel 7 phone.</p>
          <p class="card-text">The upgrades the Pixel 7s have from the Pixel 6 are better cameras, ... and they are pre-installed with Android 13. The Pixel 7 Pro won 'best phone of 2022' by the Android Authority people's vote.</p>
          <a v-bind:href="google" class="btn btn-primary" target="_blank">Google</a>
        </div>
        <div class="card-footer text-muted">
          Phone released: October 2022
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
document.getElementById("h1").innerHTML = "Companies"; // Supposed to change header text
export default {
  name: 'CompaniesView',
  data () {
    return {
      google: "https://store.google.com/category/phones?pli=1&hl=en-US",
      images: ["https://media.wired.com/photos/634622c07b75d692a43c00ba/191:100/w_1280,c_limit/Google-Pixel-7-7-Pro-Review-Gear.jpg",
      "https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/1662817352126-V5029GRZHPFVSTPF45KU/iPhone+14.jpg",
      "https://i.ytimg.com/vi/E0NeyKu-XIk/maxresdefault.jpg",
      "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/08/OnePlus-10-Pro-vs-OnePlus-10T-vs-OnePlus-10R.jpg?fit=1920%2C1080&ssl=1"]
    }
  }
}
</script>