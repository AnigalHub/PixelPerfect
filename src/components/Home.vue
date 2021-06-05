<template>
    <div id="Home">
        <div id="background">
            <Navbar/>
            <b-container>
                <p id="Welcome_to_STARTUP">Welcome to StartUp</p>
                <div id="Your_Favourite_Creative_Age">Your Favourite Creative Agency Template</div>
                <div id="Get_Started">Get Started</div>
            </b-container>
        </div>
    </div>
</template>

<script>
    import Navbar from "./navbar";
    export default {
        name: "Home",
        components: {Navbar}
    }
</script>

<style scoped lang="scss">

</style>