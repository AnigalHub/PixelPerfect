<template>
    <div id="Services">
        <b-container>
            <div class="name_component">SERVICES</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd"  fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
            </svg>
            <p class="descr_component">We offer ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
            <div class="flex-container">
                <div v-for="(value, index) in Services" :key="index">
                    <div style="margin-left: 4.7%">
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
    import CleanTypographySVG from '../components/svg_services/clean_typography';
    import RockSolidCodeSVG from '../components/svg_services/rock_solid_code';
    import ExpertSupportSVG from '../components/svg_services/expert_support';
    export default {
        components: {CleanTypographySVG, RockSolidCodeSVG, ExpertSupportSVG},
        name: "Services",
        data(){
            return{
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