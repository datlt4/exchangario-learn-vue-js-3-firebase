<template>
  <div id="exchangario">
    <!-- NAVBAR -->
    <exchange-navbar v-bind:title="brandName" v-bind:items="menuItems" />
    <!-- HERO -->
    <exchange-hero />
    <!-- POST LIST START -->
    <exchange-list v-bind:exchanges="exchanges" />
    <!-- PAGINATION START -->
    <exchange-pagination />
  </div>
</template>

<script>
import ExchangeNavbar from "./components/NavigationBar.vue";
import ExchangeHero from "./components/HeroComponent.vue";
import ExchangeList from "./components/ExchangeList.vue";
import ExchangePagination from "./components/ExchangePagination.vue";
export default {
  name: 'App',
  components: {
    ExchangeNavbar,
    ExchangeHero,
    ExchangeList,
    ExchangePagination
  },

  data(){
    return {
      brandName: "Exchangario",
      menuItems: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "FAQ", link: "/faq" },
        { text: "Login", link: "/login" },
        { text: "Register", link: "/register" },
        ],
      exchanges: [{
        id: "ad7a1231238dasd",
        type: "product", // service or product
        title: "New Tesla Car",
        description: "I will exchange this nice Tesla car",
        price: 200,
        user: "NhiPK",
        image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
        country: "Germany",
        city: "Berlin",
        tags: ["cars", "electric"]
      },
      {
        id: "ad7asdzxasa68dasd",
        type: "service", // service or product
        title: "Programming Lessons",
        description: "I will make you a super programmer",
        price: 45, // value per hour in case of service,
        user: "AnhPM",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        country: "Spain",
        city: "Barcelona",
        tags: ["programming", "code"]
      }]
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';
</style>
