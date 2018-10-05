<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Prices</router-link> |
      <router-link to="/wallet">Wallet</router-link> |
      <router-link to="/account">Account</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
