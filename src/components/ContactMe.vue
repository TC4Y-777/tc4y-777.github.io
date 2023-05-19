<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const code = "Contact Me";
const typeValue = ref('');

const typeEffect = () => {
    if (typeValue.value.length < code.length) {
        typeValue.value += code.charAt(typeValue.value.length);
        setTimeout(typeEffect, 200);
    }
}
typeEffect();

var name = ref('');
var email = ref('');
var mobile = ref('');
var emailSubject = ref('');
var emailBody = ref('');

function onReset() {
    name.value = null
    email.value = null
    mobile.value = null
    emailSubject.value = null
    emailBody.value = null
}

function onSubmit() {
    const sendMessageDismiss = $q.notify({
        message: "Sending message",
        color: "blue",
        spinner: true,
        timeout: 0
    });
    var emailJson = {
        name: name.value,
        email: email.value,
        mobile: mobile.value,
        emailSubject: emailSubject.value,
        emailBody: emailBody.value
    };
    emailjs.send("service_psc2hz8", "template_jm54gac", emailJson, "_vygirIfUE96VAR49")
        .then((result) => {
            sendMessageDismiss();
            console.log("Successfully Sent", result.text);
            $q.notify({
                message: "Successfully sent message",
                type: "positive",
                progress: true,
            });
        },
            (error) => {
                sendMessageDismiss();
                console.log("Error when sending email", error.text);
                $q.notify({
                    message: "Message not sent",
                    type: "negative",
                    progress: true
                });
            }
    );
}

</script>

<template>
    <div>
        <div>
            <div class="contactmetitle">
                <div class="code">
                    <p class="typingEffect">
                        {{ typeValue }}
                    </p>
                </div>
            </div>
        </div>

        <div>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                <div class="row">
                    <q-input rounded filled v-model="name" dark label="Full Name *" class="input-style" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type your full name']" />
                    <q-input rounded filled v-model="email" type="email" dark label="Email *" class="input-style" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type your email']" />
                </div>
                <div class="row">
                    <q-input rounded filled v-model="mobile" type="tel" dark label="Mobile Number" class="input-style" />
                    <q-input rounded filled v-model="emailSubject" dark label="Email Subject *" class="input-style"
                        lazy-rules :rules="[val => val && val.length > 0 || 'Please type subject of the email']" />
                </div>
                <div class="row">
                    <q-input v-model="emailBody" rounded filled autogrow dark label="Your Message *" class="input-style"
                        lazy-rules :rules="[val => val && val.length > 0 || 'Please type body of the email']" />
                </div>
                <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>
        </div>
    </div>
</template>

<style scoped>
.contactmetitle {
    margin-top: 5%;
}

.code {
    padding: 20px;
    height: 70px;
    color: white;
    display: flex;
    margin: 0 auto;
    align-items: center;
    /* width: 350px; */
}

.typingEffect {
    font-size: xx-large;
    padding-right: 5px;
    border-right: 2px solid white;
    white-space: nowrap;
    animation: blink 1s linear infinite;
}

@keyframes blink {

    0%,
    45% {
        border-color: transparent;
    }

    50%,
    100% {
        border-color: white;
    }
}

.input-style {
    margin: 20px;
    min-width: 500px;
    max-width: 1000px;
}

.row {
    justify-content: center;
}
</style>
