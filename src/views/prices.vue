<template>
  <div class="prices_page">
    <v-form>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <v-flex xs6 offset-xs3>
            <v-text-field label="Input USD Amount" v-model="price" @input="up" placeholder="Placeholder" single-line></v-text-field>
          </v-flex>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Bitcoin" currencyNameShort="BTC" currencyImg="btc/btc" :currencyUpdated="price"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Ethereum" currencyNameShort="ETH" currencyImg="eth/eth" :currencyUpdated="price"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Litecoin" currencyNameShort="LTC" currencyImg="ltc/ltc" :currencyUpdated="price"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Ethereum Classic" currencyNameShort="ETC" currencyImg="etc/etc" :currencyUpdated="price"/>
          </v-card>
        </v-flex>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </v-layout>
    </v-container>
    </v-form>
    <pre>{{ currency_data }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import currencyGrid from '@/components/currencyGrid.vue'
import axios from 'axios'

export default {
  name: 'prices_page',
  components: {
    currencyGrid
  },
  data() {
    return {
      currency_data: null,
      price: "0.00000000"
    }
  },
  mounted () {
    axios
      .get('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
      .then(response => (this.currency_data = response.data.data.rates))

  },
  methods: {
    up (){
      // console.log(this.prices)
    // console.log('pf', parseFloat(this.price))
      if (parseFloat(this.price) > 5) {
        this.$nextTick(() => {
          this.price = 9
        })
      }
    },
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
