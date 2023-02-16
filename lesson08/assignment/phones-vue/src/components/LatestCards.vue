<template>
  <div class="cards">
    <!-- Makes a card for each different image (phone company) using v-for loop with an array -->
    <div v-for="(image, index) in images" :key="index" class="phone-company">
      <img :src="image" class="img-fluid company-img" :alt="alts[index]" 
      :title="imageTitle[index]" @click="toggleBorder" :class="{'img-border': isHidden}">
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
          <a v-bind:href="companyLinks[index]" class="btn btn-primary" target="_blank">Google</a>
        </div>
        <div class="card-footer text-muted">
          Phone released: October 2022
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import borderMixin from '@/mixins/borderMixin';
export default {
  name: 'LatestCards',
  props: {
    images: {
      type: Array
    },
    companyLinks: {
      type: Array
    },
    alts: {
      type: Array
    },
    imageTitle: {
      type: Array
    }
  },
  mixins: [borderMixin]
}
</script>