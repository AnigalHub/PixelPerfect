<template>
    <div id="Services">
        <b-container>
            <div class="name_component">SERVICES</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" width="50px" height="2px">
                <path fill-rule="evenodd"  fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
            </svg>
            <p class="descr_component">We offer ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
            <div class="flex-container">
                <div v-for="(value, index) in Services" :key="index">
                    <div style="margin-left: 4.7%">
                        <component :is="value.svg" class="svg_services"/>
                    </div>

                    <p class="name_services">{{value.name_services}}</p>
                    <div class="descr_services">{{value.descr_services}}</div>
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
                    {
                        name_services:'CLEAN TYPOGRAPHY',
                        svg:CleanTypographySVG,
                        descr_services:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'
                    },
                    {
                        name_services:'ROCK SOLID CODE',
                        svg:RockSolidCodeSVG,
                        descr_services:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'
                    },
                    {
                        name_services:'EXPERT SUPPORT',
                        svg:ExpertSupportSVG,
                        descr_services:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'
                    },
                ]
            }
        }
    }
</script>

<style scoped  lang="scss">
    #Services{
        padding-top: 95px;
        padding-bottom: 95px;
        .name_component  {
            font-size: 20px;
            font-family: "Montserrat";
            color: rgb(85, 85, 85);
            font-weight: 600;
            text-transform: uppercase;
            line-height: 1.2;
            text-align: center;
            z-index: 416;
        }
        .descr_component{
            font-size: 15.5px;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            letter-spacing: .28px;
            line-height: 1.5;
            text-align: center;
            margin-top: 25.25px;
            z-index: 414;
        }
        .underline{
            background-color: rgb(85, 85, 85);
            margin-top: 26px;
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: 50px;
            height: 2px;
            z-index: 415;
        }
        .flex-container{
            margin-top: 68px;
        }
        .flex-container > div {
            width: 30%;
            height: 100%;
            margin: 0 1.4% 0 1.82% !important;
        }
        .name_services{
            font-size: 13.6px;
            font-family: "Montserrat";
            margin-top: 21.6px;
            color: rgb(85, 85, 85);
            margin-bottom: 0.9rem !important;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            z-index: 405;
        }
        .descr_services{
            font-size: 13.5px;
            letter-spacing: 0.28px;
            font-weight: 400;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            line-height: 1.8;
            text-align: center;
            z-index: 414;
        }
        .svg_services{
            display: block;
            margin-right: auto;
            margin-left: auto;
        }

        @media (min-width: 1200px){
            .container, .container-sm, .container-md, .container-lg, .container-xl {
                max-width: 1200px !important;
            }
        }
    }
</style>