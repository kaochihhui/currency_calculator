<template>
  <div class="navbar">
      <v-toolbar app>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat><router-link to="/">{{ $t('prices') }}</router-link></v-btn>
          <v-btn flat><router-link to="/wallet">{{ $t('wallet') }}</router-link></v-btn>
          <v-btn flat><router-link to="/account">{{ $t('account') }}</router-link></v-btn>
          <v-flex xs12>
            <v-select
              item-text="text"
              item-value="value"
              v-model="defaultSelected"
              :items="items"
              @input="changedLang"
              outline solo
            ></v-select>
          </v-flex>
        </v-toolbar-items>
      </v-toolbar>
  </div>

</template>
<script>
export default {
  name: 'navbar',
  data: () => ({
    items: [
      {
        text: '繁體中文',
        value: 'zh-TW'
      },
      {
        text: 'English',
        value:'en-US'
      }
    ],
    defaultSelected: {
      text: 'English',
      value:'en-US'
    },
  }),
  methods: {
    changedLang(event) {
      this.$i18n.locale = event;
    }
  }
}
</script>
