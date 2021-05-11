<template>
    <div id="Works">
        <b-container>
        <div class="name_component">LATEST WORKS</div>
        <svg class="underline" xmlns="http://www.w3.org/2000/svg" width="50px" height="2px">
            <path fill-rule="evenodd"  fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
        </svg>
        <div class="nav_component">
            <b-navbar-nav align="center">
                <b-nav-item>All</b-nav-item>
                <b-nav-item>Branding</b-nav-item>
                <b-nav-item>Design</b-nav-item>
                <b-nav-item>Development</b-nav-item>
                <b-nav-item>Strategy</b-nav-item>
            </b-navbar-nav>
        </div>
        <div class="flex-container">
            <img v-for="(work, index) in Works" :key="index" :src="work.src" :alt="work.alt"/>
        </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Works",
        data(){
            return{
                publicPath: process.env.BASE_URL,
               Works:[
                    {src: "./1.png", alt: "",},
                    {src: "./2.png", alt: "",},
                    {src: "./3.png", alt: "",},
                    {src: "./4.png", alt: "",},
                    {src: "./5.png", alt: "",},
                    {src: "./6.png", alt: "",},
                    {src: "./7.png", alt: "",},
                    {src: "./8.png", alt: "",},
                    {src: "./9.png", alt: "",},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    #Works {
        padding-top: 95px;
        padding-bottom: 70px;
        .name_component {
            font-size: 20px;
            font-family: "Montserrat";
            color: rgb(85, 85, 85);
            font-weight: 600;
            text-transform: uppercase;
            line-height: 1.2;
            text-align: center;
            z-index: 416;
        }
        .nav_component {
            font-size: 15.5px;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            letter-spacing: .28px;
            line-height: 1.5;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 15px;
            z-index: 414;
        }
        .underline {
            background-color: rgb(85, 85, 85);
            margin-top: 26px;
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: 50px;
            height: 2px;
            z-index: 415;
        }
        .navbar-nav {
            display: flex;
            flex-direction:initial;
        }
        .nav-link{
            font-family: "Roboto Slab";
            color: #152534 !important;
            padding-right: 13.8px !important;
            padding-left: 12.6px !important;
            letter-spacing: 0.4px;
            display: flex;
            font-weight: 500;
            font-size: 15.5px;
        }
        .flex-container{
            margin-top: 60px;
        }
        .flex-container>img{
            background: radial-gradient(70% 70%,#fff,#d2ced3);
            width: 30.76%;
            height: 100%;
            margin: 0 1.27% 2.6% 1.27%!important;
        }
        @media (min-width: 1200px){
            .container, .container-sm, .container-md, .container-lg, .container-xl {
                max-width: 1200px !important;
            }
        }
    }
</style>