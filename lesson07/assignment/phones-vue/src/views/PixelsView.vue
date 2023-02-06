<template>
  <div class="pixels">
    <!-- <header></header> -->
  </div>
</template>

<script>
import '/../data.js';
document.getElementById("h1").innerHTML = "Pixels";
export default {
  name: "PixelsView",
  data () {
    return {
      pixels: [
        {name: "Pixel 7 Pro", id: "pixel-7-pro-features"}
      ]
    }
  }
}
</script>