<script>
  import axios from "axios"
  import AppNavBar from "./components/AppNavBar.vue"
  import AppFooter from "./components/AppFooter.vue"
   import Map from "./components/Map.vue"
    import ListMap from "./components/ListMap.vue"
  import "@fortawesome/fontawesome-free/css/all.css"
import 'bootstrap/js/dist/carousel.js'
  

  export default {
    components: { AppNavBar, AppFooter, Map, ListMap},
  }
</script>

<template>
  <AppNavBar />
  <main>
      <router-view>
    
      </router-view>
    </main>
  
  <AppFooter />
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

main {
  overflow: hidden;
}
</style>