<template>
    <div id="Blog">
        <b-container>
            <div class="name_component">RECENT BLOG POSTS</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" width="50px" height="2px">
                <path fill-rule="evenodd"  fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
            </svg>
            <p class="descr_component">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
            <b-row class="blog">
                <b-col cols="5" class="text part_1">
                 <img src="../../public/blog1.png">
                </b-col>
                <b-col class="text part_2">
                   <b-row>
                       <b-col cols="2" >
                           <div class="date">
                               18
                               <br>
                               <div class="month">
                                   ост
                               </div>
                           </div>

                       </b-col>
                       <b-col>

                       </b-col>
                   </b-row>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam.
                    </div>
                    <div class="read">
                        READ MORE
                    </div>
                </b-col>
            </b-row>
            <svg xmlns="http://www.w3.org/2000/svg" width="1140px" height="1px">
                <path fill-rule="evenodd"  fill="rgb(221, 221, 221)" d="M-0.000,1.000 L-0.000,-0.001 L1140.000,-0.001 L1140.000,1.000 L-0.000,1.000 "/>
            </svg>
            <b-row class="blog">
                <b-col cols="5" class="text part_1">
                    <img src="../../public/blog1.png">
                </b-col>
                <b-col class="text part_2">
                    <b-row>
                        <b-col cols="2" >
                            <div class="date">
                                18
                                <br>
                                <div class="month">
                                    ост
                                </div>
                            </div>

                        </b-col>
                        <b-col>

                        </b-col>
                    </b-row>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam.
                    </div>
                    <div class="read">
                        READ MORE
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Blog"
    }
</script>

<style scoped lang="scss">
    #Blog {
        padding-top: 90px;
        padding-bottom: 80px;

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

        .descr_component {
            font-size: 15.5px;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            letter-spacing: .28px;
            line-height: 1.5;
            text-align: center;
            margin-top: 25.25px;
            padding-bottom: 25px;
        }

        .underline {
            background-color: rgb(85, 85, 85);
            margin-top: 26px;
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: 50px;
            height: 2px;

        }
        .text {
            font-size: 13.5px;
            font-family: "Roboto Slab";
            color: rgb(85, 85, 85);
            letter-spacing: .275px;
            line-height: 1.8;
            text-align:left;
            margin-top: 25.25px;
        }
        .blog{
            padding-bottom: 25px;
        }
        .part_1,.part_2{padding-left: 30px !important;}
        .part_2 .text{
            padding: 0 12px 0 2px;

            margin-top: 18px;
        }
        .date {
            padding: 16px;
            border: 2px solid rgb(119, 119, 119);
            height: 75px;
            width: 75px;
            font-size: 24px;
            font-family: "Montserrat";
            color: rgb(119, 119, 119);
            font-weight: bold;
            text-transform: uppercase;
            line-height: 0.833;
            text-align: center;
        }
        .month{
            font-size: 15px;
            padding-top: 10px;
        }
        .read {
            padding-top: 21.5px;
            font-size: 13.25px;
            letter-spacing: .75px;
            font-family: "Roboto Slab";
            color: rgb(119, 119, 119);
            font-weight: bold;
            text-transform: uppercase;
            line-height: 1.846;
        }
        svg{
            margin-left: 15px;
            margin-bottom: 3px;

        }


    }
    @media (min-width: 1200px){
        .container, .container-sm, .container-md, .container-lg, .container-xl {
            max-width: 1200px !important;
        }
    }
</style>