<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/companies">Companies</router-link> |
    <router-link to="/grid">Grid</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}

nav {
  padding: 30px;
  background-color: #343a40; /* Navigation color */
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: rgba(255,255,255,.5); /* nav lins */
}

nav a.router-link-exact-active {
  color: #fff;
}
</style>
