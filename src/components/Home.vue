<template>
    <div id="Home">
        <div id="background">
            <Navbar/>
            <b-container>
                <p id="Welcome_to_STARTUP">Welcome to startup</p>
                <div id="Your_Favourite_Creative_Age">Your favourite creative agency template</div>
                <div id="Get_Started">Get started</div>
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