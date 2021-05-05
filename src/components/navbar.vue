<template>
    <b-navbar id="Nav" class="navbar-expand-xl" toggleable>
        <b-container>
            <b-navbar-brand href="#Home">
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
                    <b-nav-item>Home</b-nav-item>
                    <b-nav-item>Services</b-nav-item>
                    <b-nav-item>About</b-nav-item>
                    <b-nav-item>Works</b-nav-item>
                    <b-nav-item>Blog</b-nav-item>
                    <b-nav-item>Clients</b-nav-item>
                    <b-nav-item>Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    #name_company{
        font-size: 23px;
        font-family: "Montserrat";
        margin-left: 13px;
        color: rgb(255, 255, 255);
        letter-spacing: .15px;
        font-weight: bold;
        line-height: 1.5;
        text-align: left;
        z-index: 438;
    }
    .nav-link{
        font-size: 14px;
        font-family: "Montserrat";
        letter-spacing: .28px;
        padding: 0 16.8px !important;
        color: rgb(255, 255, 255) !important;
        line-height: 1.714;
        text-align: left;
    }
    @media (min-width: 1200px){
        .container, .container-sm, .container-md, .container-lg, .container-xl {
            max-width: 1200px !important;
        }
    }

</style>