<template>
    <div id="Feedback">
        <b-container>
            <layout :name_component="name_component" :descr_component="descr_component"/>
            <b-row>
                <b-col cols="4">
                    <b-row v-for="(value,index) in Information" :key="index">
                        <b-col cols="1">
                            <component :is="value.svg"/>
                        </b-col>
                        <b-col>
                            <div class="name_information">{{value.name_information}}</div>
                            <div class="descr_information">{{value.descr_information_1}}<br>
                                <div class="part_information">{{value.descr_information_2}}</div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <form>
                        <b-row>
                            <b-col>
                                <input v-model="feedback.name" type="text" class="form-control" placeholder="I" id="name" name="name" required="" data-validation-required-message="Please enter your name">
                                <input v-model="feedback.subject" type="text" class="form-control" placeholder="YOUR SUBJECT" id="subject" name="subject" required="" data-validation-required-message="Please enter your subject">
                            </b-col>
                            <b-col>
                                <input v-model="feedback.email" type="text" class="form-control" placeholder="YOUR E-MAIL" id="email" name="email" required="" data-validation-required-message="Please enter your e-mail">
                                <input v-model="feedback.company_name" type="text" class="form-control" placeholder="COMPANY NAME" id="company_name" name="company_name" required="" data-validation-required-message="Please enter a company name">
                            </b-col>
                        </b-row>
                        <textarea v-model="feedback.message" class="form-control" placeholder="WRITE YOUR MESSAGE" id="message" name="message" required="" data-validation-required-message="Please enter your message"></textarea>
                        <b-button>Send Message</b-button>
                        <div class="warning">
                            <span>*</span>We'll contact you as as possible.We don't reply on Monday.
                        </div>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import MapSVG from '../components/svg_feedback/map_svg';
    import TelephoneSVG from '../components/svg_feedback/telephone_svg';
    import EmailSVG from '../components/svg_feedback/email_svg';
    import Layout from "./layout";
    export default {
        name: "Feedback",
        components: {Layout},
        data(){
            return {
                feedback:{
                    name: '',
                    subject: '',
                    email: '',
                    company_name: '',
                    message: '',
                },
                name_component:"Get in touch",
                descr_component:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet",
                Information:[
                    {
                        svg:MapSVG,
                        name_information:"Address",
                        descr_information_1:"312, 7th Ave, New York",
                        descr_information_2:"NY 101200, United States of America",
                    },
                    {
                        svg:TelephoneSVG,
                        name_information:"Hotline (24x7)",
                        descr_information_1:"+65 0052 300, +65 88251 210",
                        descr_information_2:"+88 01723 511 340",
                    },
                    {
                        svg:EmailSVG,
                        name_information:"E-mail",
                        descr_information_1:"shapedtheme@gmail.com",
                        descr_information_2:"khalilkode@gmail.com",
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="scss">

</style>