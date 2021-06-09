<template>
    <div id="Blog">
        <b-container>
            <div class="name_component">RECENT BLOG POSTS</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg">
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
                           <div class="date">18<br>
                               <div class="month">ост</div>
                           </div>
                       </b-col>
                       <b-col>
                           <div class="name_post">STARTUP IDEAS NEEDS TO BE FUNDED</div>
                           <div>By Khalil Uddin in Development</div>
                       </b-col>
                   </b-row>
                    <div class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam.</div>
                    <div class="read">READ MORE</div>
                </b-col>
            </b-row>
            <svg xmlns="http://www.w3.org/2000/svg" width="1140px" height="1px">
                <path fill-rule="evenodd"  fill="rgb(221, 221, 221)" d="M-0.000,1.000 L-0.000,-0.001 L1140.000,-0.001 L1140.000,1.000 L-0.000,1.000 "/>
            </svg>
            <b-row class="blog">
                <b-col cols="5" class="text part_1">
                    <img src="../../public/blog2.png">
                </b-col>
                <b-col class="text part_2">
                    <b-row>
                        <b-col cols="2" >
                            <div class="date">18<br>
                                <div class="month">ост</div>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="name_post">USER INTERFACE DESIGNING ELEMENTS</div>
                            <div>By Khalil Uddin in Development</div>
                        </b-col>
                    </b-row>
                    <div class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam.</div>
                    <div class="read">READ MORE</div>
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

</style>