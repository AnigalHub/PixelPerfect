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
</style>