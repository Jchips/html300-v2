<template>
  <div class="cards">
    <!-- Makes a card for each different image (phone company) using v-for loop with an array -->
    <div v-for="(image, index) in images" :key="index" class="phone-company">
      <img :src="image" class="img-fluid company-img" :alt="alts[index]" 
      :title="imageTitle[index]" @click="toggleBorder" :class="{'img-border': isHidden}">
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