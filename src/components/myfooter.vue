<template>
    <div id="MyFooter">
        <b-container>
            <div class="flex-container">
                <div v-for="(value,index) in Svg" :key="index">
                    <component :is="value.svg"/>
                </div>
            </div>
            <layout/>
            <div id="designer">© 2015 Startup, designer by shapedtheme</div>
        </b-container>
    </div>
</template>

<script>
    import TwitterSVG from './svg_footer/svg_twitter';
    import Layout from "./layout";
    export default {
        name: "myfooter",
        components: {Layout},
        data(){
            return{
               Svg:[{svg:TwitterSVG}, {svg:TwitterSVG}, {svg:TwitterSVG}, {svg:TwitterSVG},]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>