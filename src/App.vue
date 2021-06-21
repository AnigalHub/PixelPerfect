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
      <MyFooter/>
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
import MyFooter from "./components/myfooter";
export default {
  name: 'App',
  components: {
    MyFooter,
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
$shadeOfGray: rgb(85, 85, 85);
$shadeOfLightGray: rgb(119, 119, 119);
$shadeOfRed:rgb(192, 48, 28);

#Home #Welcome_to_STARTUP, #Home #Get_Started, .name_component, #Services .name_services, #Works button .view, #Call #Get_Started, #Blog .date, #Blog .name_post, #Blog .read, #Feedback .name_information, #Feedback input, #Feedback textarea, #Feedback button, #MyFooter #designer{
  text-transform: uppercase;
}
#Home, .name_component,.descr_component, #Services, #About .flex-container .text, #About .who, #Works .work_hover, #Works .type_work, #Call, #Blog .date, #Clients .phrase, #Clients .author, #Feedback button, #MyFooter #designer{
  text-align: center;
}
#Home #Your_Favourite_Creative_Age,.descr_component,.text, #About .who, #Works, #Call #question, #Call #Get_Started, #Blog .author, #Blog .description, #Blog .read, #Clients .phrase, #Clients .author, #Feedback .descr_information, #Feedback .warning, #Feedback input, #Feedback textarea, #Feedback button, #MyFooter #designer{
  font-family: 'Roboto Slab', serif;
}
#Nav #name_company, #Nav .nav-link, #Home #Welcome_to_STARTUP, #Home #Get_Started, .name_component, #Services .name_services, #About .flex-container .text, #Blog .date, #Blog .name_post, #Feedback .name_information{
  font-family: 'Montserrat', sans-serif;
}
.navbar-light .navbar-toggler, #Nav #name_company, #Nav .nav-link, #Home, #Works .work_hover, #Call, #MyFooter #designer{
  color: $shadeOfWhite !important;
}
.name_component, .descr_component, #Services, #About, #Works a, #Blog .name_post, #Blog .description, #Clients .phrase, #Clients .author, #Feedback, #Feedback button{
  color: $shadeOfGray !important;
}
#Blog .date, #Blog .author, #Blog .read{
  color: $shadeOfLightGray;
}
#Home #Get_Started, #Call #Get_Started, #MyFooter .flex-container svg{
  border: 2px solid $shadeOfWhite;
}
#About, #Clients{
  background: #f8f8f8;
}
#Blog .author, #Clients .phrase{
  font-style: italic;
}
.text, #About .who, #Call, #Blog .month, #Feedback .name_information, #Feedback button{
  letter-spacing: .28px;
}
#Home #Welcome_to_STARTUP, #Home #Get_Started, .name_component, #Services .name_services, #About .flex-container .text, #Blog .name_post, #Blog .read, #Feedback .name_information, #Feedback input, #Feedback textarea, #Feedback button{
  font-weight: 600;
}
#Nav #name_company, #Nav .nav-link, .descr_component, #Works .nav-link, #Call #question, #Blog .name_post{
  line-height: 1.5;
}
.text, #About .who, #Blog .description{
  line-height: 1.8;
}
#Services, #About, #Works, #Clients{
  padding-top: 95px;
}
.navbar-light .navbar-toggler {
  border-color: $shadeOfWhite !important;
}
#Nav{
  #name_company{
    font-size: 23px;
    margin-left: 13px;
    letter-spacing: .15px;
    font-weight: bold;
  }
  .nav-link{
    font-size: 13.7px;
    letter-spacing: .48px;
    font-weight: 500;
    padding: 2px 16.45px 0 !important;
  }
}
#Home{
  background: url("../public/Home/background.png") 100% 100% no-repeat;
  background-size:100% 100%;
  height: 770px;
  #background{
    padding-top: 20px;
    background-color: rgba(0, 0, 0, 0.45);
    height: 100%;
  }
  #Welcome_to_STARTUP{
    font-size: 47.8px;
    margin: 249.5px 0 2.55rem;
  }
  #Your_Favourite_Creative_Age {
    font-size: 19px;
    letter-spacing: 0.65px;
    text-transform: capitalize;
  }
  #Get_Started {
    font-size: 16px;
    width: 180px;
    padding: 1%;
    margin: 58px auto 58px 41.5%;
  }
  #Welcome_to_STARTUP,  #Your_Favourite_Creative_Age{line-height: 0.5;}
}
.name_component{
  font-size: 19.8px;
  line-height: 1.2;
}
.underline{
  background-color: $shadeOfGray;
  margin: 26px auto 0;
  display: block;
  width: 50px;
  height: 2px;
}
.color_underline{fill:$shadeOfGray;}
.descr_component{
  font-size: 15.5px;
  letter-spacing: .32px;
  margin-top: 24.8px;
}
.text{font-size: 13.5px;}
#Services{
  height: 578px;
  .flex-container{
    margin-top: 68px;
    & > div {
      width: 30%;
      margin: 0 1.58% 0 1.7% !important;
      .name_services{
        font-size: 13.9px;
        margin: 25px 0 0.8rem !important;
        letter-spacing: -.1px;
      }
      .svg{margin: -2px 0 0 16.8px;}
      .svg_services{
        width: 93px;
        height: 91px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
#About{
  height: 852px;
  .parts{
    margin-top: 62.75px;
    padding-bottom: 30px;
    .col:first-child{padding-left: 30px !important;}
    .col:last-child{padding-left: 0 !important;}
  }
  .flex-container{
    margin: 35px 0 0 5px;
    position: relative;
    & > div{
      position: relative;
      img{width: 98.5%;}
      width: 23%;
      margin: 0 1%;
      &:hover .svgs {display: block;}
      .svgs{
        display: none;
        position: absolute;
        top: 61%;
        width: 48%;
        margin: 0 auto 0 28% !important;
        div{
          float: left;
          width: 26px;
          height: 26px;
          margin-right:4%;
          svg{
            margin: 20% auto;
            display: block;
          }
          &:hover{background: $shadeOfRed;}
        }
      }
      &:hover img{filter: brightness(80%);}
      .text{margin: 15px 0 0 1%;}
      .who{
        font-size: 12.6px;
        padding-top: 3.5px;
      }
      &:nth-child(2) .who{margin-left: 2px;}
      &:nth-child(2n+1) .who{margin-left: -2px;}
      &:nth-child(4) .who{margin-left: 10px;}
    }
  }
  #left,#right{
    position: absolute;
    background: rgb(85, 85, 85, .48);
    top: 34%;
    width: 34.5px;
    height: 38px;
    padding: 6.5px 11px 10px 14px;
    &:hover{background: $shadeOfRed;}
  }
  #right{left: 94.6%;}
  .arrow{fill:rgb(221,221,221);}
}
#Works {
  height: 1381px;
  .navbar-nav{
    display: flex;
    margin: -10px auto 0;
    flex-direction:initial;
    .nav-link{
      font-size: 16px;
      padding: 0.5rem 14px 0.5rem 11.75px !important;
      letter-spacing: 0.245px;
    }
    #first a{color: $shadeOfRed !important;}
  }
  .flex-container {
    margin-top: 60px;
    & > div {
      position: relative;
      &:hover{
        background-color: $shadeOfRed;
        img{opacity: .45;}
        .work_hover{display: block;}
      }
      .work_hover{
        display: none;
        position: absolute;
        top:32%;
        margin-left: 35%;
        .name_work{
          letter-spacing: 1.2px;
          margin-left: -.75px;
        }
        .type_work{
          margin: 6px 0 0 2px;
          font-size: 12px;
        }
        button{
          .view{
            font-size: 13.4px;
            line-height: 1.714;
            letter-spacing: 1px;
            float: left;
            padding: 1px 0 0 21px;
          }
          svg{
            margin-top: -2px;
            margin-left: -9px;
            .arrow{fill:$shadeOfRed;}
          }
          padding: 8px 0 7.5px;
          border: none !important;
          background: $shadeOfWhite;
          margin: 25px 0 0 2px;
          color: #c0301c;
          border-radius: 0 !important;
          width: 100px;
        }
      }
      img{width: 100%;}
      width: 30.76%;
      height: 100%;
      margin: 0 1.27% 2.6% !important;
    }
  }
}
#Call{
  background: url("../public/Call/Call.png") 100% 100% no-repeat;
  background-size:100% 100%;
  #background{
    background-color: rgb(192, 48, 28,.65);
    padding-bottom: 100px;
  }
  #question{
    font-size: 29.5px;
    padding: 90px 0 42px;
  }
  #Get_Started {
    font-size: 17px;
    width: 180px;
    padding: 10px 10px 10px 15px;
    margin: 0 auto 0 45.22%;
  }
}
#Blog {
  padding-top: 92px;
  height: 1079px;
  .underline{margin-top: 25px;}
  .descr_component{margin: 24px 0 28px;}
  .blog{
    padding-top: 39px;
    margin-left: 1px;
    .col-5{margin-bottom: 38px;}
    .part_2{
      padding:0 20px !important;
      .col-2{
        .date {
          font-size: 24px;
          letter-spacing: -.9px;
          line-height: 1;
          font-weight: bold;
          padding: 16px;
          border: 2px solid $shadeOfLightGray;
          width: 75px;
          height: 77px;
        }
        .month{
          font-size: 15px;
          padding-top: 3px;
        }
      }
      .col{
        padding: 0 !important;
        .name_post{
          font-size: 16px;
          padding: 10px 0 0 4px;
          letter-spacing: -.15px;
        }
        .author{
          font-size: 13px;
          margin-left: 2px;
          padding-top: 7px;
          letter-spacing: .1px;
        }
      }
      .description {
        font-size: 13.55px;
        letter-spacing: .292px;
        margin: 16px 0 0 2px;
      }
      .read {
        font-size: 13.25px;
        letter-spacing: .85px;
        padding-top: 24px;

      }
    }
    &:nth-child(2){
      .name_post,.read,span{
        color: $shadeOfRed !important;
      }
    }
    svg{margin: 0 0 -3px 15px;}
    &:last-child{
      svg{display: none;}
    }
  }
}
#Clients{
  height: 475px;
  .clients {
    padding-top: 10px;
    margin: 2px 0 0 90px;
    & > div{
      img {width: 100%;}
      margin-right: 45px;
      &:first-child,&:nth-child(3),&:nth-child(4){margin-top: 0;}
      &:nth-child(2),&:nth-child(5){margin-top: -10px;}
      &:first-child, &:nth-child(2){margin-left: 15px;}
      &:nth-child(3){margin-left: 17px;}
      &:nth-child(4){margin-left: 20px;}
      &:nth-child(5){margin-left: 30px;}
    }
  }
  .phrase {
    font-size: 17.8px;
    letter-spacing: 0.18px;
    margin: 61px 0 0 -2px;;
  }
  .author{
    font-size: 21px;
    letter-spacing: -.4px;
    margin-top: 2.4%;
  }
  .phrase,.author{line-height: 1.7;}
  .points{
    width: 60px;
    margin: 35px auto 0 47.7%;
  }
  svg{
    width: 20px;
    float: left;
  }
  .flex-container div:first-child .color{fill: $shadeOfRed;}
  .color{fill: rgb(221, 221, 221);}
}
#Feedback{
  padding: 96px 0 80px;
  height: 661px;
  .row{
    padding-top: 25.3px;
    .col-4{
      .row{
        margin-bottom:6px;
        &:first-child{
          .descr_information{margin-top: 13px;}
        }
        &:nth-child(2){
          margin-bottom:5.5px;
          .descr_information{margin-top: 10px;}
        }
        &:last-child{
          .name_information{margin: 3px 0 0 11px;}
          .descr_information{margin-top: 10px;}
          .part_information{margin: 3px 0 0 -1px;}
        }
      }
      .name_information{
        font-size: 13.25px;
        margin-left: 9px;
      }
      .descr_information{
        font-size: 12px;
        margin: 14.5px 0 0 10px;
      }
      .part_information{margin-top: 2px;}
      svg{margin: -7.5px 0 0 15px;}
    }
  }
  form{
    margin: 0 30px 0 10px;
    input {height: 45px;}
    #name{border: 1px solid $shadeOfRed;}
    textarea{height: 105px;}
    input,textarea{
      font-size: 11.8px;
      padding: 14px 16px;
      border-radius: 0 !important;
      margin-bottom: 20px;
    }
    input,textarea,button{
      border: 1px solid $shadeOfGray;
      border-radius: 0 !important;
    }
    button{
      background: $shadeOfWhite;
      font-size: 12px;
      padding: 12px 15px;
      width: 170px;
      margin-right: 39px;
      float: left;
    }
    .warning{
      padding-top: 14px;
      font-size: 11.6px;
      letter-spacing: .22px;
      span{color: $shadeOfRed;}
    }
  }
}
#MyFooter{
  background-color: $shadeOfRed;
  height: 320px;
  .color_underline{fill:$shadeOfWhite;}
  .flex-container{
    padding-top: 101px;
    margin-left: 465px;
    & > div{margin-right: 16px;}
    svg{
      width: 33px;
      height: 33px;
      padding: 6px;
      border-radius: 50%;
    }
  }
  .underline{margin: 32px auto 0;}
  #designer{font-size: 12px;}
}

@media screen and (max-width: 500px) {
  #Services, #About, #Works, #Blog, #Clients, #Feedback{padding-top: 40px;}
  #Home {
    background-size:cover;
    height: auto;
    #background{padding-bottom: 65px;}
    #Welcome_to_STARTUP {
      font-size: 20px;
      margin: 120px 0 2.55rem;
    }
    #Your_Favourite_Creative_Age {
      font-size: 15px;
      line-height: 20px;
    }
    #Get_Started {margin: 58px auto 0;}
  }
  #Services,#About,#Works,#Blog,#Clients,#Feedback{
    height: auto;
    padding-bottom: 35px;
  }
  #Services .flex-container, #About .parts, #Works .flex-container {margin-top: 25px !important;}
  #Services{
    .flex-container > div {
      width: 100%;
      margin: 5px 0  !important;
    }
  }
  #About{
    .parts{
      padding-bottom: 20px;
      flex-direction: column;
      .col:first-child, .col:last-child{padding-left: 15px !important;}
      .col:first-child{padding-bottom: 15px;}
    }
    .flex-container{
      margin: 15px 0 0 15px;
      & > div {
        img{width: 94%;}
        width: 46%;
        margin: 0 1%;
        .svgs {
          top: 45%;
          width: 100%;
          margin: 0 auto 0 2.5% !important;
        }
        .who{padding-bottom: 10px;}
      }
    }
    #left,#right{top: 38%;}
    #right{left: 81%;}
  }
  #Works {
     .navbar-nav {
      display: block;
      text-align: center;
      .nav-link{padding: 0.25rem 0 !important;}
    }
    .flex-container {
      margin-top: 60px;
      & > div {
        width: 47%;
        .work_hover {
          top: 5% !important;
          margin-left: 12% !important;
        }
      }
    }
  }
  #Call{
    #background{padding-bottom: 40px;}
    #question {
      font-size: 20px;
      padding: 50px 0 20px;
    }
    #Get_Started {
      padding: 5px;
      margin: 0 auto;
    }
  }
  #Blog{
    img{width: 100%;}
    .blog {
      padding-top: 10px;
      margin-left: -15px;
      flex-direction: column;
      .col-5{
        flex: 0 0 90% !important;
        max-width: 90% !important;
        padding-bottom: 20px;
        display: block;
        margin: 0 auto;
      }
      .part_2{
        margin-left: -15px;
        padding: 0 40px !important;
        .col-2 .date {
          padding: 6.6px;
          width: 54px;
          height: 58px;
        }
        .col{
          padding-left: 8px !important;
          .name_post{padding: 0 0 0 30px;}
          .author {
            margin-left: -45px;
            padding-top: 20px;
          }
        }
        .read {padding-top: 10px;}
      }
      svg {
        width: 170px;
        margin: 10px auto !important;
      }
    }
  }
  #Clients{
    .clients {
      margin: 10px 0 0;
      & > div{
        margin-left: 30px !important;
        margin-right: 0 !important;
        margin-bottom: 25px;
        &:last-child{
          margin-top: 5px !important;
          margin-left: 28% !important;
        }
      }
    }
    .phrase {
      font-size: 13.5px;
      margin: 0;
    }
    .author{font-size: 15.5px;}
  }
  #Feedback{
    .row{
      padding: 5px 0;
      flex-direction: column;
      .row{flex-direction: inherit;}
      form{
        .row{flex-direction: column;}
        button{
          margin-bottom: 10px;
          margin-right: 100%;
        }
      }
      .col-4{
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
  }
  #MyFooter{
    height: 215px;
    .flex-container{
      padding-top: 40px;
      margin-left: 25%;
    }
  }
}
@media screen and (min-width:500px) and (max-width: 768px) {
  #Services, #About, #Works, #Blog, #Clients, #Feedback{padding-top: 40px;}
  #Home {
    background-size:cover;
    height: auto;
    #background{padding-bottom: 65px;}
    #Welcome_to_STARTUP {
      font-size: 35px;
      margin: 120px 0 2.55rem;
    }
    #Get_Started {margin: 58px auto 0;}
  }
  #Services,#About,#Works,#Blog,#Clients,#Feedback{
    height: auto;
    padding-bottom: 45px;
  }
  #Services .flex-container, #About .parts, #Works .flex-container {margin-top: 25px !important;}
  #Services{
    .flex-container > div {
      width: 45%;
      margin: 0 1.58% 0 1.7% !important;
      &:last-child{margin: 0 auto !important;}
    }
  }
  #About{
    .parts{
      padding-bottom: 20px;
      flex-direction: column;
      .col:first-child, .col:last-child{padding-left: 15px !important;}
      .col:first-child{padding-bottom: 15px;}
    }
    .flex-container{
      margin: 15px 0 0 15px;
      & > div {
        img{width: 94%;}
        width: 46%;
        margin: 0 1%;
        .svgs {
          top: 58%;
          width: 100%;
          margin: 0 auto 0 15% !important;
        }
        .who{padding-bottom: 10px;}
      }
    }
    #left,#right{top: 38%;}
    #right{left: 84%;}
  }
  #Works {
    .flex-container {
      margin-top: 60px;
      & > div {
        width: 47%;
        .work_hover {
          top:22% !important;
          margin-left: 22% !important;
        }
      }
    }
  }
  #Call{
    #background{padding-bottom: 40px;}
    #question {padding: 42px 0;}
    #Get_Started {margin: 0 auto ;}
  }
  #Blog{
    img{width: 100%;}
    .blog {
      padding-top: 10px;
      margin-left: -15px;
      flex-direction: column;
      .col-5{
        flex: 0 0 75% !important;
        max-width: 75% !important;
        padding-bottom: 20px;
        display: block;
        margin: 0 auto;
      }
      .part_2{
        margin-left: -15px;
        padding: 0 40px !important;
        .col-2 .date {
          padding: 6.6px;
          width: 54px;
          height: 58px;
        }
        .col{
          padding-left: 8px !important;
          .name_post{padding: 0 0 0 4px;}
        }
        .read {padding-top: 10px;}
      }
      svg {
        width: 470px;
        margin: 10px auto !important;
      }
    }
  }
  #Clients{
    .clients {
      margin: 10px 0 0 -8px;
      & > div{
       margin-left: 12px !important;
       margin-right: 12px !important;
       margin-bottom: 15px;
        &:nth-child(4){margin-left: 20% !important;}
      }
    }
    .phrase {margin: 25px 0 0 -3.5px;}
  }
  #Feedback{
    .row{
      padding: 5px 0;
      flex-direction: column;
      .row{flex-direction: inherit;}
      .col-4{
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
  }
  #MyFooter{
    height: 215px;
    .flex-container{
      padding-top: 40px;
      margin-left: 150px;
    }
  }
}
@media screen and (min-width:768px) and (max-width: 992px) {
  #Services, #About, #Works, #Blog, #Clients, #Feedback{padding-top: 40px;}
  #Home {
    height: auto;
    #Welcome_to_STARTUP {margin: 170px 0 2.55rem;}
    #Get_Started {margin: 58px auto;}
  }
  #About{
    .flex-container > div .svgs {
      top: 47%;
      width: 90%;
      margin: 0 auto 0 5% !important;
    }
    #left,#right{top: 25%;}
    #right{left: 92.5%;}
  }
  #Works{
    .work_hover {
      top:22% !important;
      margin-left: 22% !important;
    }
  }
  #Home #background, #Call #background{padding-bottom: 45px;}
  #Services,#About,#Works,#Blog,#Clients,#Feedback{
    height: auto;
    padding-bottom: 55px;
  }
  #Services .flex-container, #About .parts, #Works .flex-container {margin-top: 40px;}
  #About .flex-container{margin: 15px 0 0 5px;}
  #Call{
    #question {padding: 55px 0 42px;}
    #Get_Started {margin: 0 auto ;}
  }
  #Blog{
    img{width: 100%;}
    .blog {
      padding-top: 10px;
      .part_2{
        margin-left: -15px;
        .col-2 .date {
          padding: 6.6px;
          width: 54px;
          height: 58px;
        }
        .col{
          padding-left: 8px !important;
          .name_post{padding: 0 0 0 4px;}
        }
        .read {padding-top: 10px;}
      }
      svg {margin: 10px 15px !important;}
    }
  }
  #Clients{
    .clients {
      margin: 10px 0 0 -8px;
      & > div{
        margin-left: 6px !important;
        margin-right: 6px !important;
      }
    }
    .phrase {margin: 25px 0 0 -3.5px;}
  }
  #Feedback .row{padding-top: 15px;}
  #MyFooter{
    height: 215px;
    .flex-container{
      padding-top: 40px;
      margin-left: 250px;
    }
  }
}
@media screen and (min-width:992px) and (max-width: 1200px) {
  #Services, #About, #Works, #Blog, #Clients, #Feedback{padding-top: 50px;}
  #Home {
    height: auto;
    #Welcome_to_STARTUP {margin: 200px 0 2.55rem;}
    #Get_Started {margin: 58px auto;}
  }
  #About{
    .flex-container > div .svgs {
      width: 60%;
      margin: 0 auto 0 20% !important;
    }
    #left,#right{top: 30%;}
    #right{left: 94%;}
  }
  #Works{
    .work_hover {margin-left: 30% !important;}
  }
  #Services,#About,#Works,#Blog,#Clients,#Feedback{
    height: auto;
    padding-bottom: 55px;
  }
  #Home #background, #Call #background{padding-bottom: 55px;}
  #Blog{
    img{width: 100%;}
    .blog .part_2{
      .col-2 .date {
        width: 65px;
        height: 70px;
      }
      .read {padding-top: 10px;}
    }
  }
  #Clients{
    .clients {
      margin: 10px 0 0 40px;
      & > div{margin-right: 20px;}
    }
    .phrase {margin: 45px 0 0 -3.5px;}
  }
  #MyFooter{
    height: 255px;
    .flex-container{
      padding-top: 60px;
      margin-left: 380px;
    }
  }
}
@media screen and  (max-width: 1200px) {
  #Nav .nav-link {
    text-align: left;
    padding: 3.5px 16.45px 0 !important;
  }
}
@media (min-width: 1200px){
  #Nav,#Services,#About,#Works,#Blog,#Feedback{
    .container, .container-sm, .container-md, .container-lg, .container-xl {max-width: 1200px !important;}
  }
}

</style>
