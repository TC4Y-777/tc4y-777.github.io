<script setup>
import { computed, onMounted, ref } from 'vue';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { Roller } from 'vue-roller';
import "vue-roller/dist/style.css";

var roleIndex = ref(1);
const roleArray = [
    "Software Developer",
    "Blockchain Developer",
    "Dancer",
    "Singer",
    "Badminton"
];

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

</script>

<template>
    <div class="home">
        <transition name="iamimageanim" appear>
            <kinesis-container>
                <kinesis-element :strength="20" type="depth">
                    <div class="homeimage">
                        <!-- Create stripes in the image -->
                        <div class="container">
                            <div class="clip clip1"></div>
                            <div class="clip clip2"></div>
                            <div class="clip clip3"></div>
                            <div class="clip clip4"></div>
                            <div class="clip clip5"></div>
                            <div class="clip clip6"></div>
                            <!-- <div class="clip clip7"></div> -->
                        </div>
                    </div>
                </kinesis-element>
            </kinesis-container>
        </transition>
        <div class="homecontent">

            <!-- Generated from an online css text glitch generator -->
            <div class="iam">
                <div class="glitch-wrapper">
                    <div class="glitch-iam" data-glitch="I am">I am</div>
                </div>
            </div>

            <div class="iamname">
                <div class="glitch-wrapper">
                    <div class="glitch" data-glitch="Ashish">Ashish</div>
                </div>
            </div>

            <div class="iamroles">

                <!-- <component :is="comp"></component> -->

                <Roller class="grid-item" value="BACKEND ENGINEER" duration="2000" char-set="alphabet">
                </Roller>
                <Roller class="grid-item" value="BLOCKCHAIN SOFTWARE DEVELOPER" duration="2000" char-set="alphabet">
                </Roller>
                <Roller class="grid-item" value="OPEN SOURCE CONTRIBUTOR" duration="2000" char-set="alphabet">
                </Roller>
                <Roller class="grid-item" value="WEB DEVELOPER" duration="2000" char-set="alphabet">
                </Roller>
            </div>

            <transition name="iamsocialanim" appear>
                <kinesis-container>
                    <kinesis-element strength="20" type="depth_inv">
                        <div class="iamsocial">
                            <a href="https://www.linkedin.com/in/astg7542/" target="_blank"><img class="socialLogo anim1"
                                    src="../assets/linkedin.png" alt="linkedinlogo" /></a>
                            <a href="https://discord.com/users/763669633223753750" target="_blank"><img
                                    class="socialLogo anim2" src="../assets/discord.png" alt="discordlogo" /></a>
                            <a href="mailto:ashishgeorge752@gmail.com" target="_blank"><img class="socialLogo anim1"
                                    src="../assets/email.png" alt="emaillogo" /></a>
                            <a href="https://wa.me/919446020612" target="_blank"><img class="socialLogo anim2"
                                    src="../assets/whatsapp.png" alt="whatsapplogo" /></a>
                            <a href="https://github.com/TC4Y-777" target="_blank"><img class="socialLogo anim1"
                                    src="../assets/github.png" alt="githublogo" /></a>

                        </div>
                    </kinesis-element>
                </kinesis-container>
            </transition>

        </div>
    </div>
</template>

<style scoped>
.home {
    height: 90vh;
    display: flex;
    align-items: center;

}

.iamimageanim-enter-from {
    opacity: 0;
    transform: translateX(-100%)
}

.iamimageanim-enter-to {
    opacity: 1;
    transform: translateX(0px)
}

.iamimageanim-enter-active {
    transition: opacity 10s ease, transform 5s ease;
}

.iamsocialanim-enter-from {
    transform: translateY(100%)
}

.iamsocialanim-enter-to {
    transform: translateY(0px)
}

.iamsocialanim-enter-active {
    transition: transform 2s ease;
}

/* Main Image CSS - Start */
.container {
    position: relative;
    width: 500px;
    height: 500px;
    /* Animate the main image up and down */
    animation: updown 4s ease infinite;
    filter: drop-shadow(0 0 2em #e8e2ca);
}

.container .clip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: url("../assets/mainImage.jpeg");
}

/* Got clip-path using an online css clip path generator */
.container .clip.clip1 {
    clip-path: polygon(52% 19%, 84% 50%, 43% 82%, 20% 51%);
}

.container .clip.clip1:hover {
    clip-path: polygon(52% 19%, 98% 55%, 45% 65%, 20% 51%);
}

.container .clip.clip2 {
    clip-path: polygon(54% 19%, 68% 0, 100% 0, 100% 51%);
}

.container .clip.clip2:hover {
    clip-path: polygon(72% 21%, 68% 0, 100% 0, 100% 60%);
}

.container .clip.clip3 {
    clip-path: polygon(88% 54%, 44% 83%, 76% 100%);
}

.container .clip.clip3:hover {
    clip-path: polygon(100% 60%, 44% 83%, 100% 100%);
}

.container .clip.clip4 {
    clip-path: polygon(30% 86%, 0% 100%, 94% 100%);
}

.container .clip.clip4:hover {
    clip-path: polygon(0 64%, 0% 100%, 76% 100%);
}

.container .clip.clip5 {
    clip-path: polygon(8% 48%, 28% 74%, 0 63%, 0 3%);
}

.container .clip.clip5:hover {
    clip-path: polygon(28% 65%, 28% 74%, 0 63%, 0 24%);
}

.container .clip.clip6 {
    clip-path: polygon(0 0, 60% 0, 21% 44%, 13% 43%);
}

.container .clip.clip6:hover {
    clip-path: polygon(0 0, 64% 9%, 41% 34%, 1% 22%);
}

/* Animation for moving up and down */
@keyframes updown {
    0% {
        transform: translateY(-3%);
    }

    50% {
        transform: translateY(3%);
    }

    100% {
        transform: translateY(-3%);
    }
}

@keyframes downup {
    0% {
        transform: translateY(3%);
    }

    50% {
        transform: translateY(-3%);
    }

    100% {
        transform: translateY(3%);
    }
}

/* Main Image CSS - End */

/* ========================================== */

/* Home Content CSS - Start */

.homecontent {
    margin-left: 100px;
    margin-top: 100px;
    padding-top: 50px;
    align-self: self-start;
}

/* CSS for 'I am' */

/* .glitch-wrapper {
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: rgba(33, 33, 33, 0);
} */

.glitch-iam {
    text-align: left;
    position: relative;
    font-size: 80px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    letter-spacing: 5px;
    z-index: 1;
}

.glitch-iam:before,
.glitch-iam:after {
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
}

.glitch-iam:before {
    animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #00ffff;
    z-index: -1;
}

.glitch-iam:after {
    animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    color: #ff00ff;
    z-index: -2;
}

@keyframes glitch-color {
    0% {
        transform: translate(0);
    }

    20% {
        transform: translate(-3px, 3px);
    }

    40% {
        transform: translate(-3px, -3px);
    }

    60% {
        transform: translate(3px, 3px);
    }

    80% {
        transform: translate(3px, -3px);
    }

    to {
        transform: translate(0);
    }
}

/* CSS for name */

.glitch-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: left;
    text-align: left;
    background-color: rgba(33, 33, 33, 0);
}

.glitch {
    position: relative;
    font-size: 84px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    letter-spacing: 5px;
    animation: shift 4s ease-in-out infinite alternate;
    z-index: 1;
}

.glitch:before {
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: -2px;
    text-shadow: -1px 0 #00ffff;
    width: 100%;
    color: #fff;
    background-color: rgba(33, 33, 33, 0);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch:after {
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 2px;
    text-shadow: 1px 0 #ff00ff;
    width: 100%;
    color: #fff;
    background-color: rgba(33, 33, 33, 0);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
    0% {
        clip: rect(61px, 9999px, 52px, 0);
    }

    5% {
        clip: rect(33px, 9999px, 144px, 0);
    }

    10% {
        clip: rect(121px, 9999px, 115px, 0);
    }

    15% {
        clip: rect(144px, 9999px, 162px, 0);
    }

    20% {
        clip: rect(62px, 9999px, 180px, 0);
    }

    25% {
        clip: rect(34px, 9999px, 42px, 0);
    }

    30% {
        clip: rect(147px, 9999px, 179px, 0);
    }

    35% {
        clip: rect(99px, 9999px, 63px, 0);
    }

    40% {
        clip: rect(188px, 9999px, 122px, 0);
    }

    45% {
        clip: rect(154px, 9999px, 14px, 0);
    }

    50% {
        clip: rect(63px, 9999px, 37px, 0);
    }

    55% {
        clip: rect(161px, 9999px, 147px, 0);
    }

    60% {
        clip: rect(109px, 9999px, 175px, 0);
    }

    65% {
        clip: rect(157px, 9999px, 88px, 0);
    }

    70% {
        clip: rect(173px, 9999px, 131px, 0);
    }

    75% {
        clip: rect(62px, 9999px, 70px, 0);
    }

    80% {
        clip: rect(24px, 9999px, 153px, 0);
    }

    85% {
        clip: rect(138px, 9999px, 40px, 0);
    }

    90% {
        clip: rect(79px, 9999px, 136px, 0);
    }

    95% {
        clip: rect(25px, 9999px, 34px, 0);
    }

    100% {
        clip: rect(173px, 9999px, 166px, 0);
    }
}

@keyframes noise-after {
    0% {
        clip: rect(26px, 9999px, 33px, 0);
    }

    5% {
        clip: rect(140px, 9999px, 198px, 0);
    }

    10% {
        clip: rect(184px, 9999px, 89px, 0);
    }

    15% {
        clip: rect(121px, 9999px, 6px, 0);
    }

    20% {
        clip: rect(181px, 9999px, 99px, 0);
    }

    25% {
        clip: rect(154px, 9999px, 133px, 0);
    }

    30% {
        clip: rect(134px, 9999px, 169px, 0);
    }

    35% {
        clip: rect(26px, 9999px, 187px, 0);
    }

    40% {
        clip: rect(147px, 9999px, 137px, 0);
    }

    45% {
        clip: rect(31px, 9999px, 52px, 0);
    }

    50% {
        clip: rect(191px, 9999px, 109px, 0);
    }

    55% {
        clip: rect(74px, 9999px, 54px, 0);
    }

    60% {
        clip: rect(145px, 9999px, 75px, 0);
    }

    65% {
        clip: rect(153px, 9999px, 198px, 0);
    }

    70% {
        clip: rect(99px, 9999px, 136px, 0);
    }

    75% {
        clip: rect(118px, 9999px, 192px, 0);
    }

    80% {
        clip: rect(1px, 9999px, 83px, 0);
    }

    85% {
        clip: rect(145px, 9999px, 98px, 0);
    }

    90% {
        clip: rect(121px, 9999px, 154px, 0);
    }

    95% {
        clip: rect(156px, 9999px, 44px, 0);
    }

    100% {
        clip: rect(67px, 9999px, 122px, 0);
    }
}

@keyframes shift {

    0%,
    40%,
    44%,
    58%,
    61%,
    65%,
    69%,
    73%,
    100% {
        transform: skewX(0deg);
    }

    41% {
        transform: skewX(10deg);
    }

    42% {
        transform: skewX(-10deg);
    }

    59% {
        transform: skewX(40deg) skewY(10deg);
    }

    60% {
        transform: skewX(-40deg) skewY(-10deg);
    }

    63% {
        transform: skewX(10deg) skewY(-5deg);
    }

    70% {
        transform: skewX(-50deg) skewY(-20deg);
    }

    71% {
        transform: skewX(10deg) skewY(-10deg);
    }
}

/* ================================================= */

/* Job Roles CSS - Start */

.iamroles {
    margin-top: 20px;
    padding-top: 20px;
    font-size: large;
    display: inline-grid;
    grid-template-columns: auto auto;
    column-gap: 5rem;
    row-gap: 2rem;
}


.socialLogo {
    margin: 70px 20px;
    padding: 20px 10px;
    filter: drop-shadow(0 0 .5em #e8e2ca);
}

.anim1 {
    animation: updown 2s ease infinite;
}

.anim2 {
    animation: downup 2s ease infinite;
}
</style>
