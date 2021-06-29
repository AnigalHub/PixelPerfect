<template>
    <div id="Services">
        <b-container>
            <layout :name_component="name_component" :descr_component="descr_component"/>
            <div class="flex-container">
                <div v-for="(value, index) in Services" :key="index">
                    <div class="svg">
                        <component :is="value.svg" class="svg_services"/>
                    </div>
                    <p class="name_services">{{value.name_services}}</p>
                    <div class="text">{{value.descr_services}}</div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import CleanTypographySVG from '../components/svg_services/clean_typography_svg';
    import RockSolidCodeSVG from '../components/svg_services/rock_solid_code_svg';
    import ExpertSupportSVG from '../components/svg_services/expert_support_svg';
    import Layout from "./layout";
    export default {
        components: {Layout, CleanTypographySVG, RockSolidCodeSVG, ExpertSupportSVG},
        name: "Services",
        data(){
            return{
                name_component:"Services",
                descr_component:"We offer ipsum dolor sit amet, consetetur sadipscing elitr amet",
                Services:[
                    {name_services:'Clean Typography', svg:CleanTypographySVG, descr_services:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'},
                    {name_services:'Rock solid Code', svg:RockSolidCodeSVG, descr_services:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'},
                    {name_services:'Expert Support', svg:ExpertSupportSVG, descr_services:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'},
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>