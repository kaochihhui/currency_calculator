<template>
  <div class="currencyGrid">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs6>
          <div class="currencyText">
            <p class="currencyName">{{currencyName}}</p>
            <p class="currencyNameShort">({{currencyNameShort}})</p>
          </div>
        </v-flex>
        <v-flex xs6>
          <div class="currencyImg">
            <img :src="getImgUrl()" alt="">
          </div>
        </v-flex>
        <v-flex xs12>
          <!-- <pre>{{ currency_data['BTC'] }}</pre> -->
          <!-- <div class="currencyUpdated">{{currencyUpdated*parseInt(currency_data['BTC'])}}</div> -->
          <div class="currencyUpdated">{{currencyUpdated}}</div>
        </v-flex>
    <!-- <div class="currencyType">
      <div class="currencyText">
        <p class="currencyName">{{currencyName}}</p>
        <p class="currencyNameShort">({{currencyNameShort}})</p>
      </div>
      <div class="currencyImg">
        <img :src="getImgUrl()" alt="">
      </div>

    </div>
    <div class="currencyUpdated">

    </div> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'currencyGrid',
  props: {
    currencyName: String,
    currencyNameShort: String,
    currencyImg: String,
    currencyUpdated: null
  },
  methods:{
    getImgUrl:function() {
      return require('../assets/crypto/'+this.currencyImg+'.svg');
    }
  }
}
</script>

<style scoped lang="scss">
.currencyGrid{
  // .currencyType{
    .currencyText{
      .currencyName{
        font-family: Roboto-Medium;
        font-size: 24px;
        color: #3A4160;
        line-height: 35px;
        margin: 0
      }
      .currencyNameShort{
        font-family: Roboto-Regular;
        font-size: 20px;
        color: #9CA6D3;
        line-height: 25px;
        margin: 0

      }
    }
    .currencyImg{
      img{
        width: 80px;
        height: 80px;
      }
    }
  // }
  .currencyUpdated{
    font-family: Roboto-Medium;
    font-size: 24px;
    color: #3A4160;
    line-height: 20px;

  }
}
</style>
