<template>
  <div class="pixels">
    <!-- Header -->
    <header-comp>
      Pixels
    </header-comp>

    <!-- Creates accordion for each phone using v-for loop with an array of objects -->
    <div class="accordion">
      <div v-for="phones in pixels" v-bind:key="phones.id" class="accordion-item">
        <div class="accordion-header" :id="phones.header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            :data-bs-target="phones.target" aria-expanded="false" aria-controls="collapseOne">
            {{ phones.name }}
          </button>
        </div>
        <div :id="phones.id" class="accordion-collapse collapse" :aria-labelledby="phones.header">
          <div class="accordion-body">
            <h2>Features</h2>
            <ul>
              <li v-for="feature in phones.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- shows 'more content' if you press the button (using v-if) -->
		<button	v-on:click="toggleContent	=	!toggleContent">Press to see more content</button>
    <p v-if="toggleContent">more content</p>
    <p v-else></p>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
export default {
  name: "PixelsView",
  data() {
    return {
      pixels: [
        {
          name: "Pixel 6 Pro",
          id: "pixel-6-pro",
          target: "#pixel-6-pro",
          features: ["120 Hz refresh rate", "Wireless charging", "UFS 3.1 storage", "Gaming Mode",
            "Extra dim mode", "Stereo speakers", "Mute camera and mic option",
            "Battery Share (Reverse wireless charging)", "Optical in-display fingerprint scanner",
            "IP68 water/dust resistant"],
          header: "HeadingOne"
        },
        {
          name: "Pixel 6",
          id: "pixel-6",
          target: "#pixel-6",
          features: ["90 Hz refresh rate", "Wireless charging", "UFS 3.1 storage", "Gaming Mode",
            "Mute camera and mic option", "Battery Share (Reverse wireless charging)",
            "In-display fingerprint scanner", "IP68 water/dust resistant"],
          header: "HeadingTwo"
        },
        {
          name: "Pixel 6a",
          id: "pixel-6a",
          target: "#pixel-6a",
          features: ["5G", "Wifi 6E", "UFS 3.1 storage", "Stereo speakers", "One-handed mode",
            "IP67 water/dust resistant", "In-display fingerprint sensor",
            "At least 5yrs of Google updates"],
          header: "HeadingThree"
        }
      ],
      toggleContent: false,
    }
  },
  components: {
    HeaderComp
  }
}
</script>