<template>
  <div class="prices_page">
    <v-form>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <v-flex xs6 offset-xs3>
            <v-text-field :placeholder="$t('inputAmount')" v-model="price" @keypress="onlyForCurrency" single-line></v-text-field>
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
      </v-layout>
    </v-container>
    </v-form>
    <!-- <pre>{{ currency_data }}</pre> -->
  </div>
</template>

<script>
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
     if(value!=null){
       this.newCurrency["BTC"] = value*this.currency_data["BTC"];
       this.newCurrency["ETH"] = value*this.currency_data["ETH"];
       this.newCurrency["LTC"] = value*this.currency_data["LTC"];
       this.newCurrency["ETC"] = value*this.currency_data["ETC"];
     }
   }
 },
  methods: {
    onlyForCurrency ($event) {
       // console.log($event.keyCode); //keyCodes value
       let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

       // only allow number and one dot
       if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.price.indexOf('.') != -1)) { // 46 is dot
          $event.preventDefault();
       }

       // restrict to 2 decimal places
       if(this.price!=null && this.price.indexOf(".")>-1 && (this.price.split('.')[1].length > 1)){
         $event.preventDefault();
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
