<template>
  <div class="latest">
    <!-- Header -->
    <header-comp>Latest Phones</header-comp>

    <!-- Displays images for each phone company on the site -->
    <LatestCards :images="images" :companyLinks="companyLinks" :alts="alts" :imageTitle="imageTitle">
    </LatestCards>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import LatestCards from "@/components/LatestCards.vue";

export default {
  name: 'LatestView',
  data () {
    return {
      companyLinks: ["https://store.google.com/category/phones?pli=1&hl=en-US", 
      "https://www.apple.com/iphone/", "https://www.samsung.com/us/smartphones/", 
      "https://www.oneplus.com/us"],
      images: ["https://media.wired.com/photos/634622c07b75d692a43c00ba/191:100/w_1280,c_limit/Google-Pixel-7-7-Pro-Review-Gear.jpg",
      "https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/1662817352126-V5029GRZHPFVSTPF45KU/iPhone+14.jpg",
      "https://i.ytimg.com/vi/E0NeyKu-XIk/maxresdefault.jpg",
      "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/08/OnePlus-10-Pro-vs-OnePlus-10T-vs-OnePlus-10R.jpg?fit=1920%2C1080&ssl=1"],
      alts: ["All the Pixel 7 variants", "All the iPhone 14 variants", 
      "All the Samsung S22 variants", "All the OnePlus 10 variants"],
      imageTitle: ["Pixel 7 variants", "iPhone 14 variants", "Samsung S22 variants", "OnePlus 10 variants"]
    }
  },
  components: {
    LatestCards,
    HeaderComp,
  },
}
</script>