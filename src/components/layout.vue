<template>
    <div>
        <div class="name_component">{{name_component}}</div>
        <svg class="underline" xmlns="http://www.w3.org/2000/svg">
            <path class="color_underline"  d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999"/>
        </svg>
        <p class="descr_component">{{descr_component}}</p>
    </div>
</template>

<script>
    export default {
        name: "layout",
        props:{
            name_component: String,
            descr_component: String,
        },
    }
</script>

<style scoped>

</style>