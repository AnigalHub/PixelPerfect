<template>
    <div id="Home">
        <div id="background">
            <Navbar/>
            <b-container>
                <p id="Welcome_to_STARTUP">WELCOME TO STARTUP</p>
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
#Home{
    background: url("../../public/Home.png") 100% 100% no-repeat;
    background-size:100% 100%;
    height: 770px;
    #background{
        padding-top: 20px;
        background-color: rgba(0, 0, 0, 0.48);
        height: 100%;
    }
    #Welcome_to_STARTUP{
        font-size: 47.8px;
        font-family: "Montserrat";
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        line-height: 0.5;
        margin-top: 248px;
        margin-bottom: 2.55rem !important;
        font-weight: 600;
        text-align: center;
    }
    #Your_Favourite_Creative_Age {
        font-size: 19px;
        font-family: "Roboto Slab";
        color: rgb(255, 255, 255);
        line-height: 0.5;
        letter-spacing: 0.65px;
        text-align: center;
    }
    #Get_Started {
        font-size: 16px;
        font-family: "Montserrat";
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        line-height: 1.5;
        font-weight: 500;

        text-align: center;
        border: 2px solid white;
        width: 17%;
        padding: 1% 1% 1% .5%;
        display: block;
        margin: 59.5px auto 0;
    }




}
</style>