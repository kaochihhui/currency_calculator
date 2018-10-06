<template>
  <div class="prices_page">
    <v-form>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <v-flex xs6 offset-xs3>
            <v-text-field id="usdAmount"
              label="Input USD Amount"
              single-line
            ></v-text-field>
          </v-flex>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Bitcoin" currencyNameShort="BTC" currencyImg="btc/btc"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Ethereum" currencyNameShort="ETH" currencyImg="eth/eth"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Litecoin" currencyNameShort="LTC" currencyImg="ltc/ltc"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Ethereum Classic" currencyNameShort="ETC" currencyImg="etc/etc"/>
          </v-card>
        </v-flex>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </v-layout>
    </v-container>
    </v-form>
    <pre>{{ projects }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import currencyGrid from '@/components/currencyGrid.vue'

export default {
  name: 'prices_page',
  components: {
    currencyGrid
  },
  data() {
    return {
      projects: null
    }
  },
  mounted () {
    axios
      .get('https://developers.coinbase.com/api/v2#exchange-rates')
      .then(response => (this.projects = response))
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true

      return binding
    }
  }
}
</script>
