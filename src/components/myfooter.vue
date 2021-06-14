<template>
    <div id="MyFooter">
        <b-container>
            <div class="flex-container">
                <div v-for="(value,index) in Svg" :key="index">
                    <component :is="value.svg"/>
                </div>
            </div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" >
                <path fill="rgb(255, 255, 255)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
            </svg>
            <div id="designer">© 2015 Startup, designer by shapedtheme</div>
        </b-container>
    </div>
</template>

<script>
    import TwitterSVG from '../components/svg_twitter';
    export default {
        name: "footer",
        data(){
            return{
               Svg:[{svg:TwitterSVG}, {svg:TwitterSVG}, {svg:TwitterSVG}, {svg:TwitterSVG},]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>