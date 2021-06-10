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
.underline{
  background-color: rgb(85, 85, 85);
  margin: 26px auto 0 !important;
  display: block;
  width: 50px;
  height: 2px;
}
.descr_component{
  font-size: 15.5px;
  font-family: 'Roboto Slab', serif;
  color: rgb(85, 85, 85);
  letter-spacing: .28px;
  line-height: 1.5;
  text-align: center;
  margin-top: 24.8px;
}
#Services{
  padding-top: 95px;
  height: 61.7vh;
  text-align: center;
  color: $shadeOfGrey;
  letter-spacing: 0.28px;
  .flex-container{
    margin-top: 68px;
    & > div {
      width: 30%;
      height: 100%;
      margin: 0 1.4% 0 1.82% !important;
      .name_services{
        font-size: 13.9px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 24px;
        letter-spacing: -.1px;
        margin-bottom: 0.8rem !important;
        font-weight: 600;
        text-transform: uppercase;
      }
      .svg_services{
        width: 93px;
        height: 91px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
.text{
  font-size: 13.5px;
  font-family: 'Roboto Slab', serif;
  letter-spacing: .28px;
  line-height: 1.8;
}
#About{
  padding-top: 95px;
  height: 91vh;
  background: #f8f8f8;
  color: rgb(85, 85, 85);
  .who{
    font-size: 13px;
    font-family: 'Roboto Slab', serif;
    line-height: 1.846;
    padding-top: 2px;
    text-align: center;
  }
  .parts{
    margin-top: 62.75px;
    padding-bottom: 30px;
    .col:first-child{padding-left: 30px !important;}
    .col:last-child{padding-left: 0 !important;}
  }
  .imgs{
    margin-top: 35px;
    .col:first-child{
      padding-left: 30px !important;
      .text{
        margin-left: 10px;
      }
    }
    .col:nth-child(2){

      margin-left: -10px !important;}
    .col:nth-child(3){

      margin-left: -10px !important;}
    .col:last-child{
      color: red !important;
      margin-left: -15px !important;
    }
    .text{
      margin-top: 15px;
      font-size: 13.5px;

      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: .28px;
      text-align: center;
      &:first-child{

      }
    }
  }
}
#Works {
  padding-top: 95px;
  height: 147.3vh;
  color: rgb(85, 85, 85);

  .nav_component {
    font-size: 15.5px;
    font-family: 'Roboto Slab', serif;
    letter-spacing: .28px;
    line-height: 1.5;
    margin: 15px auto 0;
    display: block;
  }
  .navbar-nav {
    display: flex;
    flex-direction:initial;
  }
  .nav-link{
    font-family: 'Roboto Slab', serif;
    color: #152534 !important;
    padding-right: 13.8px !important;
    padding-left: 12.6px !important;
    letter-spacing: 0.4px;
    display: flex;
    font-weight: 500;
    font-size: 15.5px;
  }

  .flex-container {
    margin-top: 60px;
    & > img {
      width: 30.76%;
      height: 100%;
      margin: 0 1.27% 2.6% !important;
    }
  }
}
#Call{
  background: url("../public/Call.png") 100% 100% no-repeat;
  background-size:100% 100%;
  color: rgb(255, 255, 255);
  letter-spacing: .28px;
  text-align: center;

  #question{
    font-size: 29.5px;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    line-height: 1.48;
    padding-top: 90px;
    padding-bottom: 50px;
  }
  #Get_Started {
    font-size: 18px;
    font-family: 'Roboto Slab', serif;
    padding-bottom: 111px;
    padding-left: 5px;
    text-transform: uppercase;
    line-height: 1.5;
    font-weight: 500;
    width: 1900px;
    margin-top: 5px;
  }
}
#Blog {
  padding-top: 90px;
  padding-bottom: 80px;
  .text {
    font-size: 13.5px;
    font-family: 'Roboto Slab', serif;
    color: rgb(85, 85, 85);
    letter-spacing: .275px;
    line-height: 1.8;
    text-align:left;
    margin-top: 25.25px;
  }
  .blog{margin-top: 3.8%;}
  .part_1,.part_2{padding-left: 30px !important;}
  .part_2 .text{
    padding: 0 12px 0 2px;
    margin-top: 18px;
  }
  .date {
    padding: 16px;
    border: 2px solid rgb(119, 119, 119);
    height: 75px;
    width: 75px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    color: rgb(119, 119, 119);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 0.833;
    text-align: center;
  }
  .month{
    font-size: 15px;
    padding-top: 10px;
  }
  .name_post{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: rgb(85, 85, 85);
    text-transform: uppercase;
    line-height: 1.5;
    text-align: left;
    padding-top: 1.4%;
    letter-spacing: -.18px;
    padding-left: .5%;
    font-weight: 600;
  }
  .blog:nth-child(4) .name_post{padding-top: 1.5% !important;}
  .col .col{padding: 0 !important;}
  .read {
    padding-top: 21.5px;
    font-size: 13.25px;
    letter-spacing: .75px;
    font-family: 'Roboto Slab', serif;
    color: rgb(119, 119, 119);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.846;
  }
  svg{
    margin-left: 15px;
    margin-bottom: 3px;
  }
}

@media (min-width: 1200px){
  #Services,#About,#Works,#Blog{
    .container, .container-sm, .container-md, .container-lg, .container-xl {max-width: 1200px !important;}
  }
}

</style>
