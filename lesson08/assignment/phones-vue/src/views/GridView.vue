<template>
  <div class="grid">
    <!-- Header -->
    <HeaderComp>
      Grid
    </HeaderComp>

    <!-- creates a 2 column row for each phone using v-for loop -->
    <div class="grid-container">
      <div v-for="samsung in samsungs" :key="samsung.id" class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12">
          <img :src="require(`./../assets/imgs/${samsung.id}.png`)" class="img img-fluid" :alt="samsung.name">
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12">
          <!-- Adds a carousel about the Galaxy S22 Ultra  -->
          <div :id="samsung.id" class="carousel slide" data-bs-interval="false">
            <div class="carousel-inner">

              <!-- Phone colors, prices and release date -->
              <div class="carousel-item active">
                <h2>{{ samsung.name }}</h2>
                <h5>{{ samsung.companyOS }}</h5>

                <!-- All the prices for the phone (rounded) -->
                <div class="prices">
                  <h5>Starting prices:</h5>
                  <p v-for="(storageOption, price) in samsung.storageOptions" :key="price">
                    <span>{{ storageOption }}</span> {{ samsung.prices[price] }}
                  </p>
                </div>

                <!-- US release date for the phone -->
                <h5>{{ samsung.release }}</h5>
              </div>

                <!-- Lists the key phone specs (will be API data)-->
              <div class="carousel-item specs">
                <h2>{{ samsung.name}} (not the real specs)</h2>
                <h4>Phone Specs:</h4>
                <div class="phone-specs">
                  <p><span class="info-title">UI:</span> Stock Android 12</p>
                  <p><span class="info-title">Display:</span> 6.7 in; 1440x3120 px, Curved QHD+ OLED</p>
                  <p><span class="info-title">Build:</span> Gorilla Glass Victus (curved)</p>
                  <p><span class="info-title">Size:</span> 6.50 x 3.0 x 0.40 in</p>
                  <p><span class="info-title">Cameras:</span> Rear: <i>[Primary: 50MP, Ultrawide: 12MP, Telephoto: 48MP]</i>, Front: <i>[11.1MP]</i></p>
                  <p><span class="info-title">Ram:</span> 12 GB</p>
                  <p><span class="info-title">Battery:</span> 5003 mAh <i>[30W, 12W wireless, 23W Pixel stand]</i></p>
                  <p><span class="info-title">Capacity:</span> 128 / 256 / 512 GB</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" :data-bs-target="`#${ samsung.id }`" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="`#${ samsung.id }`" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
export default {
  data () {
    return {
      samsungs: [
        {
          name: "Galaxy S22 Ultra",
          id: "galaxy-s22-ultra",
          companyOS: "Samsung/Android 12",
          storageOptions: ["8 / 128 GB:", "12 / 256 GB:", "12 / 512 GB:", "12 / 1 TB:"],
          prices: ["$1200", "$1300", "$1400", "$1600"],
          release: "Feb. 25, 2022 (US)" 
        },
        {
          name: "Galaxy S22+",
          id: "galaxy-s22-plus",
          companyOS: "Samsung/Android 12",
          storageOptions: ["128 GB:", "256 GB:"],
          prices: ["$1000", "$1200"],
          release: "Feb. 25, 2022 (US)"
        }
      ]
    }
  },
  components: {
    HeaderComp
  }
}
</script>