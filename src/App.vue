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
import Footer from "./components/myfooter";
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
$shadeOfGrey: rgb(85, 85, 85);
$shadeOfRed:rgb(192, 48, 28);
$fontFirst:'Roboto Slab', serif;
$fontSecond:'Montserrat', sans-serif;

#Home{
  background: url("../public/Home/background.png") 100% 100% no-repeat;
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
    font-family: $fontFirst;
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
    font-family: $fontSecond;
    text-transform: uppercase;
  }
}
.name_component{
  font-size: 19.8px;
  font-family: $fontSecond;
  color: rgb(85, 85, 85);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}
.underline{
  background-color: rgb(85, 85, 85);
  margin: 26px auto 0 ;
  display: block;
  width: 50px;
  height: 2px;
}
.descr_component{
  font-size: 15.5px;
  font-family: $fontFirst;
  color: rgb(85, 85, 85);
  letter-spacing: .28px;
  line-height: 1.5;
  text-align: center;
  margin-top: 24.8px;
}
#Services{
  padding-top: 95px;
  height: 578px;
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
        font-family: $fontSecond;
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
  font-family: $fontFirst;
  letter-spacing: .28px;
  line-height: 1.8;
}
#About{
  padding-top: 95px;
  height: 852px;
  background: #f8f8f8;
  color: rgb(85, 85, 85);
  .parts{
    margin-top: 62.75px;
    padding-bottom: 30px;
    .col:first-child{padding-left: 30px !important;}
    .col:last-child{padding-left: 0 !important;}
  }
  .flex-container{
    margin-top: 35px;
    margin-left: 5px;
    & > div{
      width: 23%;
      margin: 0 1%;
      .text,.who{text-align: center;}
      .text{
        margin-top: 15px;
        font-weight: 600;
        font-family: $fontSecond;
        margin-left: 1%;
      }
      .who{
        font-size: 12.6px;
        font-family: $fontFirst;
        letter-spacing: .28px;
        line-height: 1.8;
        padding-top: 3.5px;
      }
      &:nth-child(2) .who{margin-left: 2px;}
      &:nth-child(2n+1) .who{margin-left: -2px;}
      &:nth-child(4) .who{margin-left: 10px;}
    }
  }
}
#Works {
  padding-top: 95px;
  height: 1381px;
  font-family: $fontFirst;
  a{color: $shadeOfGrey !important;}
  .navbar-nav{
    display: flex;
    margin: 15px auto 0;
    flex-direction:initial;
    .nav-link{
      line-height: 1.5;
      font-size: 16px;
      padding: 0.5rem 14px 0.5rem  11.8px !important;
      letter-spacing: .28px;
    }
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
  background: url("../public/Call/Call.png") 100% 100% no-repeat;
  background-size:100% 100%;
  color: $shadeOfWhite;
  letter-spacing: .28px;
  text-align: center;
  #background{
    background-color: rgb(192, 48, 28,.65);
    padding-bottom: 98px;
  }
  #question{
    font-size: 29.5px;
    padding-top: 90px;
    padding-bottom: 43px;
  }
  #question,#Get_Started{
    font-family: $fontFirst;
    line-height: 1.5;
  }
  #Get_Started {
    font-size: 18px;
    text-transform: uppercase;
    border: 2px solid $shadeOfWhite;
    width: 180px;
    padding: 10px 10px 10px 15px;
    margin: 0 auto 0 45.3%;
  }
}
#Blog {
  padding-top: 92px;
  height: 1079px;

  .underline{margin-top: 25px;}
  .descr_component{
    margin-top: 24px;
    margin-bottom: 28px;
  }
  .blog{
    padding-top: 38px;
    margin-left: 1px;
    .col-5{
      margin-bottom: 38px;
    }
    .part_2{
      padding-left: 20px !important;
      padding-right: 20px !important;
      .col-2{
        .date {
          font-size: 24px;
          color: rgb(119, 119, 119);
          font-family: $fontSecond;
          letter-spacing: -1.6px;
          line-height: 1;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          padding: 16px;
          border: 2px solid rgb(119, 119, 119);
          width: 75px;
          height: 77px;
        }
        .month{
          font-size: 15px;
          padding-top: 4px;
        }
      }
      .col{
        padding: 0 !important;
        .name_post{
          font-size: 16px;
          font-family: $fontSecond;
          color: $shadeOfGrey;
          text-transform: uppercase;
          line-height: 1.5;
          text-align: left;
          padding-top: 10px;
          letter-spacing: -.2px;
          padding-left: 4px;
          font-weight: 600;
        }
        .author{
          font-size: 13px;
          font-family: $fontFirst;
          font-style: italic;
          color: rgb(119, 119, 119);
          padding-top: 7px;
          letter-spacing: .2px;
        }
      }
      .description {
        font-size: 13.55px;
        font-family: $fontFirst;
        color: rgb(85, 85, 85);
        letter-spacing: .292px;
        line-height: 1.8;
        text-align:left;
        margin-top: 16px;
        margin-left: 2px;
      }
      .read {
        font-size: 13.25px;
        font-family: $fontFirst;
        color: rgb(119, 119, 119);
        font-weight: bold;
        letter-spacing: .75px;
        padding-top: 24px;
        text-transform: uppercase;
      }
    }
    svg{
     // margin-top: 38px;
      margin-left: 15px;
      margin-bottom: 3px;
      &:last-child{
       display: none;
      }
    }
  }
 /*

  .part_1,.part_2{}
  .part_2 .text{
    padding: 0 12px 0 2px;
    margin-top: 18px;
  }

  .name_post{
    font-size: 16px;
    font-family: $fontSecond;
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
    font-family: $fontFirst;
    color: rgb(119, 119, 119);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.846;
  }
  svg{
    margin-top: 35px;
    margin-left: 32px;
    margin-bottom: 3px;
  } */
}
#Clients{
  padding-top: 95px;
  height: 475px;
  background: #f8f8f8;
  .flex-container {
    padding-top: 10px;
    margin: 2px 0 0 90px;
    & > div{
      img {width: 100%;}
      margin-right: 45px;
      &:first-child,&:nth-child(3),&:nth-child(4){margin-top: 0;}
      &:nth-child(2),&:nth-child(5){margin-top: -10px;}
      &:first-child{margin-left: 15px;}
      &:nth-child(2){margin-left: 15px;}
      &:nth-child(3){margin-left: 17px;}
      &:nth-child(4){margin-left: 20px;}
      &:nth-child(5){margin-left: 30px;}
    }
  }
  .phrase {
    margin-top: 61px;
    margin-left: -1px;
    font-size: 18px;
  }
  .author{
    margin-top: 2.4%;
    font-size: 21px;
  }
  .phrase,.author{
    font-family: $fontFirst;
    color: $shadeOfGrey;
    text-align: center;
    line-height: 1.667;
  }
}
#Feedback {
  padding-top: 95px;
  padding-bottom: 80px;
  height: 661px;
  .row{
    padding-top: 25px;
    .col-4{
      .row{
        margin-bottom:9.5px;
      }
      .name_information{
        font-size: 13.9px;
        letter-spacing: .28px;
        font-weight: 600;
        margin-left: 8px;
        text-transform: uppercase;
        font-family: $fontSecond;
      }
      .descr_information{
        font-family: $fontFirst;
        font-size: 12px;
        font-weight: 400;
        margin-left: 10px;
        margin-top: 10px;
      }
      svg{
        margin-left: 15px;
        margin-top: -8px;
      }
    }

  }
  form{
    margin-left: 10px;
    margin-right: 30px;
    input {height: 45px;}
    textarea{height: 105px;}
    input,textarea{
      padding: 14px 16px;
      border-radius: 0 !important;
      font-size: 11.8px;
      margin-bottom: 20px;
    }
    input,textarea,button{
      text-transform: uppercase;
      border: 1px solid $shadeOfGrey;
      font-family: $fontFirst;
      color: $shadeOfGrey;
      font-weight: 500;
      border-radius: 0 !important;
    }
    button{
      background: $shadeOfWhite;
      font-size: 12px;
      padding: 12px 15px;
      width: 170px;
      text-align: center;
      letter-spacing: .28px;
      margin-right: 39px;
      float: left;
    }
    .warning{
      padding-top: 14px;
      font-size: 11.6px;
      font-family: $fontFirst;
      letter-spacing: .28px;
      span{color: $shadeOfRed;}
    }
  }

}

@media (min-width: 1200px){
  #Nav,#Services,#About,#Works,#Blog,#Feedback{
    .container, .container-sm, .container-md, .container-lg, .container-xl {max-width: 1200px !important;}
  }
}

</style>
