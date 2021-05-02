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
                    <b-nav-item @click="scrollToId" href="#Features">Характеристики</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Catalog">Каталог</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Delivery">Доставка</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Portfolio">Наши работы</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Contact">Контакты</b-nav-item>
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
        font-size: 24px;
        font-family: "Montserrat";
        color: rgb(255, 255, 255);
        font-weight: bold;
        line-height: 1.5;
        text-align: left;
        position: absolute;
        left: 228.274px;
        top: 31.25px;
        z-index: 438;
    }

</style>