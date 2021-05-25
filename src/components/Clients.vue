<template>
    <div id="Clients">
        <b-container>
           <b-row>
               <b-col>
                   <img src="../../public/clients5.png">
               </b-col>
               <b-col>
                   <img src="../../public/clients4.png">
               </b-col>
               <b-col>
                   <img src="../../public/clients1.png">
               </b-col>
               <b-col>
                   <img src="../../public/clients3.png">
               </b-col>
               <b-col>
                   <img src="../../public/clients2.png">
               </b-col>
           </b-row>
            <div class="text">
                Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                <br>
                Temporibus autem quibusdam et aut officiis debitis aut rerum"
            </div>
            <div class="author">John Doe,Google Inc.</div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Clients"
    }
</script>

<style scoped>
    #Clients{
        padding-top: 105px;
        padding-bottom: 121px;
        background: #f8f8f8;
    }
    .row{
        padding: 0 90px !important;
    }
    .col{
        padding: 0 0 0 30px !important;
    }
    .col:nth-child(2){
        margin-left: 1.3%;
        margin-top: -1%;
    }
    .col:nth-child(3){
        padding-left: 15px !important;
    }
    .col:nth-child(4){
        padding-left: 15px !important;
    }
    .text {
        margin-top: 4.8%;
        font-size: 18px;
        font-family: "Roboto Slab";
        color: rgb(85, 85, 85);
        line-height: 1.667;
        text-align: center;
    }
    .author{
        margin-top: 2.1%;
        font-size: 21px;
        font-family: "Roboto Slab";
        color: rgb(85, 85, 85);
        line-height: 1.667;
        text-align: center;
    }

</style>