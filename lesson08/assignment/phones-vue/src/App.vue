<template>
  <!-- navbar links  -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/latest">Latest</router-link> |
    <router-link to="/grid">Grid</router-link> |
    <router-link to="/pixels">Pixels</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import '@/sass/components.content';
@import '@/sass/base.normalize';
@import '@/sass/settings.responsive';
@import '@/sass/styles.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
