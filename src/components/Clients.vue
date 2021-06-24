<template>
    <div id="Clients">
        <b-container>
           <div class="flex-container clients">
               <div v-for="(client,index) in Clients" :key="index">
                   <img :src="client.img_src" :alt="client.img_alt">
               </div>
           </div>
           <div class="phrase">
               Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
               <br>
               Temporibus autem quibusdam et aut officiis debitis aut rerum"
           </div>
           <div class="author">John Doe, Google Inc.</div>
            <div class="points flex-container">
                <div v-for="(value,index) in Points" :key="index">
                    <component :is="value.svg"/>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import PointSVG from "./svg_clients/svg_point";
    export default {
        name: "Clients",
        data(){
            return{
                Points:[{svg:PointSVG}, {svg:PointSVG}, {svg:PointSVG},],
                Clients: [
                    {img_src: "./Clients/Deorham.png",img_alt: "Deorham",},
                    {img_src: "./Clients/Ratings.png", img_alt: "Ratings",},
                    {img_src: "./Clients/Malk_Media.png", img_alt: "Malk_Media",},
                    {img_src: "./Clients/Bcause.png", img_alt: "Bcause",},
                    {img_src: "./Clients/Wompify.png",img_alt: "Wompify",},
                ]
            }
        }
    }
</script>

<style scoped>

</style>