<template>
  <div id="app">
    <b-container fluid>
      <Home/>
      <Services/>
      <About_us/>
      <Works/>
      <Call/>
      <Blog/>
      <Clients/>
      <Feedback/>
    </b-container>
  </div>
</template>

<script>


import Home from "./components/Home";
import Services from "./components/Services";
import About_us from "./components/About_us";
import Works from "./components/Works";
import Call from "./components/Call";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Feedback from "./components/Feedback";
export default {
  name: 'App',
  components: {
    Feedback,
    Clients,
    Blog,
    Call,
    Works,
    About_us,
    Services,
    Home

  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
}
/*контейнер на блоки на всю площадь экрана*/
.container-fluid{
  padding-left: 0 !important;
  padding-right: 0 !important;
}
/*контейнер на блоки посередине экрана*/
.container{
  padding-right: 15px !important;
  padding-left: 15px !important;
}
/*контейнер, который включает в себя повтор блоков*/
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
/*параметры сетки бутстрап*/

</style>
