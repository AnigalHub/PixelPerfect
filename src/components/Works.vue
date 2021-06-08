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

</style>