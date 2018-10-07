<template>
  <div class="prices_page">
    <v-form>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <v-flex xs6 offset-xs3>
             <!-- @input="up"  -->
            <v-text-field placeholder="Input USD Amount" v-model="price" single-line></v-text-field>
          </v-flex>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Bitcoin" currencyNameShort="BTC" currencyImg="btc/btc" :currencyUpdated="newCurrency['BTC']"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Ethereum" currencyNameShort="ETH" currencyImg="eth/eth" :currencyUpdated="newCurrency['ETH']"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Litecoin" currencyNameShort="LTC" currencyImg="ltc/ltc" :currencyUpdated="newCurrency['LTC']"/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <currencyGrid currencyName="Ethereum Classic" currencyNameShort="ETC" currencyImg="etc/etc" :currencyUpdated="newCurrency['ETC']"/>
          </v-card>
        </v-flex>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </v-layout>
    </v-container>
    </v-form>
    <!-- <pre>{{ currency_data }}</pre> -->
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
      price: null,
      newCurrency:{
        "BTC":0,
        "ETH":0,
        "LTC":0,
        "ETC":0
      }
    }
  },
  mounted () {
    axios
      .get('https://api.coinbase.com/v2/exchange-rates?currency=USD')
      .then(response => (this.currency_data = response.data.data.rates))
  },
  watch: {
   price (value) {
     if(value!=null || value!=""){
       // console.log(value);
       // console.log(this.currency_data["BTC"]);
       // console.log(value*this.currency_data["BTC"]);
       this.newCurrency["BTC"]=value*this.currency_data["BTC"];
       this.newCurrency["ETH"]=value*this.currency_data["ETH"];
       this.newCurrency["LTC"]=value*this.currency_data["LTC"];
       this.newCurrency["ETC"]=value*this.currency_data["ETC"];
     }
     // console.log(parseInt(this.price)*parseInt(this.currency_data["BTC"]));

   }
 },
  methods: {
    _checkifNumber(){

    },
    up (){

      // this.newCurrency["BTC"]=parseInt(this.price)*parseInt(this.currency_data["BTC"]);
      // this.newCurrency["ETH"]=parseInt(this.price)*parseInt(this.currency_data["ETH"]);
      // this.newCurrency["LTC"]=parseInt(this.price)*parseInt(this.currency_data["LTC"]);
      // this.newCurrency["ETC"]=parseInt(this.price)*parseInt(this.currency_data["ETC"]);


      // parseInt(this.price)*parseInt(this.currency_data[""])

      // console.log(this.prices)
    // console.log('pf', parseFloat(this.price))
      // if (parseFloat(this.price) > 5) {
      //   this.$nextTick(() => {
      //     this.price = 9
      //   })
      // }

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
