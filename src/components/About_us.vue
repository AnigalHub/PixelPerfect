<template>
    <div id="About">
        <b-container>
            <div class="name_component">ABOUT US</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" width="50px" height="2px">
                <path fill-rule="evenodd"  fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
            </svg>
            <p class="descr_component">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
            <b-row class="parts">
                <b-col class="text part_1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod
                    tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliguyam erat.
                    Lorem ipsum dolor sit amet. Lorem ipsum eat.
                </b-col>
                <b-col class="text part_2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirtempor
                    invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos eaccusam
                    et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliguyam erat. Loreipsum
                    dolor sit amet. Lorem ipsum dolor et.
                </b-col>
            </b-row>
            <b-row class="imgs">
                <b-col>
                    <img src="../../public/14.png">
                    <div class="text">MD. KHALIL UDDIN</div>
                    <div class="who">Head of Ideas</div>
                </b-col>
                <b-col>
                    <img src="../../public/13.png">
                    <div class="text">RUBEL MIAH</div>
                    <div class="who">Lead WordPress Developer</div>
                </b-col>
                <b-col>
                    <img src="../../public/12.png">
                    <div class="text">SHAMIM MIA</div>
                    <div class="who">Sr. Web Developer</div>
                </b-col>
                <b-col>
                    <img src="../../public/11.png">
                    <div class="text">JOHN DOE</div>
                    <div class="who">Front-end Developer</div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "About_us"
    }
</script>

<style scoped lang="scss">
    #About{
        padding-top: 95px;
        padding-bottom: 95px;
        background: #f8f8f8;
        .name_component {
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
        .text {
            font-size: 13.5px;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            letter-spacing: .28px;
            line-height: 1.8;
            text-align:left;
            margin-top: 25.25px;
            z-index: 414;
        }
        .who{
            font-size: 13px;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            line-height: 1.846;
            padding-top: 2px;
            text-align: center;
        }
        .parts{
            margin-top: 37.5px;
            padding-bottom: 30px;
        }
        .part_1{padding-left: 30px !important;}
        .part_2{padding-left: 0 !important;}
        .imgs{
            margin-top: 35px;
            .col:first-child{
                padding-left: 30px !important;
            }
            .text{
                margin-top: 15px;
                font-size: 13px;  font-family: "Montserrat";
                letter-spacing: .28px;
                text-align: center;
            }
        }
        @media (min-width: 1200px){
            .container, .container-sm, .container-md, .container-lg, .container-xl {
                max-width: 1200px !important;
            }
        }
    }
</style>