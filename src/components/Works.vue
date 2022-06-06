<template>
    <div id="Works">
        <b-container>
            <layout :name_component="name_component"/>
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
                <div v-for="(work, index) in Works" :key="index">
                    <img :src="work.img_src" :alt="work.img_alt"/>
                    <div class="work_hover">
                        <div class="name_work">{{work.name}}</div>
                        <div class="type_work">{{work.type}}</div>
                        <b-button>
                            <div class="view">View</div>
                            <component :is="arrow"/>
                        </b-button>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import Layout from "./layout";
    import arrowSVG from "./svg_works/arrow_svg";
    export default {
        name: "Works",
        components: {Layout},
        data(){
            return{
               name_component:"Latest works",
               Works:[
                    {img_src: "./Works/Hair_Dresser.jpg", img_alt: "Hair_Dresser",name:"Hair Dresser",type:"Branding"},
                    {img_src: "./Works/Bird.jpg", img_alt: "Bird",name:"Bird",type:"Design"},
                    {img_src: "./Works/Work_Caption.jpg", img_alt: "Work_Caption",name:"Work Caption",type:"Development"},
                    {img_src: "./Works/Camera.jpg", img_alt: "Camera", name:"Camera",type:"Strategy"},
                    {img_src: "./Works/Bicycle.jpg", img_alt: "Bicycle",name:"Bicycle",type:"Strategy"},
                    {img_src: "./Works/Single_Work.jpg", img_alt: "Single_Work",name:"Single Work",type:"Development"},
                    {img_src: "./Works/Workplace.jpg", img_alt: "Workplace",name:"Workplace",type:"Development"},
                    {img_src: "./Works/Stationery.jpg", img_alt: "Stationery",name:"Stationery",type:"Design"},
                    {img_src: "./Works/Events_Entertainment.jpg", img_alt: "Design",name:"Design",type:"Branding"},
                ],
                arrow:arrowSVG,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>