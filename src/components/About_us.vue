<template>
    <div id="About">
        <b-container>
            <div class="name_component">About us</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg">
                <path fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999"/>
            </svg>
            <p class="descr_component">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
            <b-row class="parts">
                <b-col class="text" v-for="(text,index) in DescriptionText" :key="index">
                    {{text.part}}
                </b-col>
            </b-row>
            <div class="flex-container">
                <div v-for="(img,index) in Imgs" :key="index">
                    <img :src="img.img_src" :alt="img.img_alt">
                    <div class="text">{{img.text}}</div>
                    <div class="who">{{img.who}}</div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "About_us",
        data(){
            return{
                DescriptionText:[
                    {part:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliguyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.',},
                    {part:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirtempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos eaccusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliguyam erat. Loreipsum dolor sit amet. Lorem ipsum dolor et.',},
                ],
                Imgs:[
                    {img_src:"./About/MD._KHALIL_UDDIN.png",img_alt:"MD._KHALIL_UDDIN",text:'MD. KHALIL UDDIN',who:'Head of Ideas'},
                    {img_src:"./About/RUBEL_MIAH.png",img_alt:"RUBEL_MIAH",text:'RUBEL MIAH',who:'Lead WordPress Developer'},
                    {img_src:"./About/SHAMIM_MIA.png",img_alt:"SHAMIM_MIA",text:'SHAMIM MIA',who:'Sr. Web Developer'},
                    {img_src:"./About/JOHN_DOE.png",img_alt:"JOHN_DOE",text:'JOHN DOE',who:'Front-end Developer'},
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>