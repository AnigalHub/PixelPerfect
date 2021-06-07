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
      <Footer/>
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
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    Footer,
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
$shadeOfWhite:rgb(255, 255, 255);
$shadeOfGrey:rgb(85, 85, 85);

#Home{
  background: url("../public/Home.png") 100% 100% no-repeat;
  background-size:100% 100%;
  height: 770px;
  color: $shadeOfWhite;
  #background{
    padding-top: 20px;
    background-color: rgba(0, 0, 0, 0.45);
    height: 100%;
  }
  #Welcome_to_STARTUP{
    margin-top: 249.5px;
    font-size: 47.8px;
    margin-bottom: 2.55rem;
    font-weight: 600;
    text-align: center;
  }
  #Your_Favourite_Creative_Age {
    font-size: 19px;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 0.65px;
  }
  #Get_Started {
    font-size: 16px;
    font-weight: 500;
    border: 2px solid $shadeOfWhite;
    width: 180px;
    padding: 1% ;
    margin: 57px auto 0 41.5%;
  }
  #Welcome_to_STARTUP,  #Your_Favourite_Creative_Age{line-height: 0.5;}
  #Welcome_to_STARTUP, #Your_Favourite_Creative_Age, #Get_Started{text-align: center;}
  #Welcome_to_STARTUP,#Get_Started{
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
  }
}
.name_component  {
  font-size: 19.8px;
  font-family: 'Montserrat', sans-serif;
  color: rgb(85, 85, 85);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}
.descr_component{
  font-size: 15.5px;
  font-family: 'Roboto Slab', serif;
  color: rgb(85, 85, 85);
  letter-spacing: .28px;
  line-height: 1.5;
  text-align: center;
  margin-top: 24px;
}
.underline{
  background-color: rgb(85, 85, 85);
  margin: 25px auto 0;
  display: block;
  width: 50px;
  height: 2px;
}
#Services{
  padding-top: 95px;
  height: 61.7vh;
  text-align: center;
  color: $shadeOfGrey;
  .flex-container{
    margin-top: 68px;
    & > div {
      width: 30%;
      height: 100%;
      margin: 0 1.4% 0 1.82% !important;
    }
  }
  .name_services{
    font-size: 13.9px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 24px;
    letter-spacing: -.1px;
    margin-bottom: 0.9rem !important;
    font-weight: 600;
    text-transform: uppercase;

  }
  .descr_services{
    font-size: 13.55px;
    letter-spacing: 0.28px;
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
    line-height: 1.8;
  }
  .svg_services{
    width: 93px;
    height: 91px;
    display: block;
    margin: 0 auto;
  }
}
#About{
  padding-top: 95px;
  padding-bottom: 95px;
  background: #f8f8f8;
  .text {
    font-size: 13.5px;
    font-family: "Roboto Slab";
    color: rgb(85, 85, 85);
    letter-spacing: .28px;
    line-height: 1.8;
    text-align:left;
    margin-top: 25.25px;
    z-index: 414;
  }
  .who{
    font-size: 13px;
    font-family: "Roboto Slab";
    color: rgb(85, 85, 85);
    line-height: 1.846;
    padding-top: 2px;
    text-align: center;
  }
  .parts{
    margin-top: 37.5px;
    padding-bottom: 30px;
  }
  .part_1{padding-left: 30px !important;}
  .part_2{padding-left: 0 !important;}
  .imgs{
    margin-top: 35px;
    .col:first-child{
      padding-left: 30px !important;
    }
    .text{
      margin-top: 15px;
      font-size: 13px;  font-family: "Montserrat";
      letter-spacing: .28px;
      text-align: center;
    }
  }
}
@media (min-width: 1200px){
  #Services,#About{
    .container, .container-sm, .container-md, .container-lg, .container-xl {max-width: 1200px !important;}
  }
}

</style>
