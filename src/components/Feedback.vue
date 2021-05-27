<template>
    <div id="Feedback">
        <b-container>
            <div class="name_component">GET IN TOUCH</div>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" width="50px" height="2px">
                <path fill-rule="evenodd"  fill="rgb(85, 85, 85)" d="M0.000,1.999 L0.000,-0.000 L50.000,-0.000 L50.000,1.999 L0.000,1.999 "/>
            </svg>
            <p class="descr_component">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Feedback"
    }
</script>

<style scoped lang="scss">
    #Feedback {
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

    }
</style>