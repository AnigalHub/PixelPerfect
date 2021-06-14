<template>
    <b-navbar id="Nav" class="navbar-expand-xl" toggleable>
        <b-container>
            <b-navbar-brand href="#Home" @click.prevent="scrollToTop()">
                <div id="name_company">Startup</div>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav v-model="isExpanded">
                <b-navbar-nav>
                    <b-nav-item href="#Home" @click="scrollToId">Home</b-nav-item>
                    <b-nav-item href="#Services" @click="scrollToId">Services</b-nav-item>
                    <b-nav-item href="#About" @click="scrollToId">About</b-nav-item>
                    <b-nav-item href="#Works" @click="scrollToId">Works</b-nav-item>
                    <b-nav-item href="#Blog" @click="scrollToId">Blog</b-nav-item>
                    <b-nav-item href="#Clients" @click="scrollToId">Clients</b-nav-item>
                    <b-nav-item href="#Feedback" @click="scrollToId">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return {
                isExpanded: false,
            }
        },
        methods:{
            scrollToTop(){
                window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
            },
            scrollToId(event){
                let offsetY = 0;
                if(this.isExpanded){
                    let nav = document.getElementById(("Nav"));
                    let bounds =  nav.getBoundingClientRect();
                    offsetY = bounds.height;
                }
                let element = document.getElementById(event.target.hash.replace("#", ""));
                window.scrollTo({top: element.offsetTop - offsetY, left: 0, behavior: 'smooth'});
                event.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>