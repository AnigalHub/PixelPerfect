<template>
    <div id="Call">
        <div id="question">
            Do you like OUR WORK so far?
            <br>
            Let's talk about YOUR PROJECT!
        </div>
        <div id="Get_Started">Get In Touch</div>
    </div>
</template>

<script>
    export default {
        name: "Call"
    }
</script>

<style scoped lang="scss">
    #Call{
        background: url("../../public/Call.png") 100% 100% no-repeat;
     background-size:100% 100%;

        #question{
            font-size: 29.5px;
            font-family: 'Roboto Slab', serif;
            color: rgb(255, 255, 255);
            font-weight: 400;
            line-height: 1.48;
            text-align: center;
            letter-spacing: .28px;
            z-index: 163;
            padding-top: 90px;
            padding-bottom: 50px;
        }
        #Get_Started {
            font-size: 18px;
            font-family: 'Roboto Slab', serif;
            padding-bottom: 111px;
            letter-spacing: .28px;
            color: rgb(255, 255, 255);
            text-transform: uppercase;
            line-height: 1.5;
            font-weight: 500;
            width: 1910px;
            margin-top: 5px;
            text-align: center;
            z-index: 428;
        }

    }
</style>