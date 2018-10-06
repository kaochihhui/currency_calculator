<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app>
        <router-link to="/">Prices</router-link> |
        <router-link to="/wallet">Wallet</router-link> |
        <router-link to="/account">Account</router-link>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view/>  
          </v-fade-transition>
        </v-container>
      </v-content>
    </v-app>
    <!-- <div id="nav">
      <router-link to="/">Prices</router-link> |
      <router-link to="/wallet">Wallet</router-link> |
      <router-link to="/account">Account</router-link>
    </div>
    <div class="main_page">
        <router-view/>
    </div>-->
  </div>

</template>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
