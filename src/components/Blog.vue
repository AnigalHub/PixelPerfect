<template>
    <div id="Blog">
        <b-container>
            <layout :name_component="name_component" :descr_component="descr_component"/>
            <b-row class="blog" v-for="(blog,index) in Blogs" :key="index">
                <b-col cols="5">
                    <img :src="blog.img_src" :alt="blog.img_alt">
                </b-col>
                <b-col class="text part_2">
                   <b-row>
                       <b-col cols="2">
                           <div class="date">{{blog.date}}<br><div class="month">{{blog.month}}</div></div>
                       </b-col>
                       <b-col>
                           <div class="name_post">{{blog.name_post}}</div>
                           <div class="author" v-html="blog.author"></div>
                       </b-col>
                   </b-row>
                    <div class="description">{{blog.text}}</div>
                    <div class="read">{{blog.button}}</div>
                </b-col>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1px">
                    <path fill="rgb(221, 221, 221)" d="M-0.000,1.000 L-0.000,-0.001 L1140.000,-0.001 L1140.000,1.000 L-0.000,1.000 "/>
                </svg>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Layout from "./layout";
    export default {
        name: "Blog",
        components: {Layout},
        data(){
            return{
                name_component:"Recent blog posts",
                descr_component:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet",
                Blogs:[
                    {
                        img_src:"./Blog/blog1.png",
                        img_alt:"blog1",
                        date:"18",
                        month:"ост",
                        name_post:"Startup ideas needs to be funded",
                        author:'By <span> Khalil </span> Uddin <span> in Development </span> ',
                        text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam.",
                        button:"Read more",
                    },
                    {
                        img_src:"./Blog/blog2.png",
                        img_alt:"blog2",
                        date:"18",
                        month:"ост",
                        name_post:"User interface designing elements",
                        author:'By <span> Khalil </span> Uddin <span> in Development </span> ',
                        text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor idunt ut labore et dolore aliquyam.",
                        button:"Read more",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>