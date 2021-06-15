<template>
    <div id="Works">
        <b-container>
        <div class="name_component">Latest works</div>
        <svg class="underline" xmlns="http://www.w3.org/2000/svg" >
            <path fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
        </svg>
        <div class="nav_component">
            <b-navbar-nav align="center">
                <b-nav-item id="first">All</b-nav-item>
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
               Works:[
                    {src: "./Works/Hair_Dresser.png", alt: "Hair_Dresser",},
                    {src: "./Works/Bird.png", alt: "Bird",},
                    {src: "./Works/Work_Caption.png", alt: "Work_Caption",},
                    {src: "./Works/Camera.png", alt: "Camera",},
                    {src: "./Works/Bicycle.png", alt: "Bicycle",},
                    {src: "./Works/Single_Work.png", alt: "Single_Work",},
                    {src: "./Works/Workplace.png", alt: "Workplace",},
                    {src: "./Works/Stationery.png", alt: "Stationery",},
                    {src: "./Works/Events_Entertainment.png", alt: "Events_Entertainment",},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>