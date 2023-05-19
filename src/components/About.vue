<script setup>
import { ref } from 'vue';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

const code = "About Me"
const typeValue = ref('')

const typeEffect = () => {
    if (typeValue.value.length < code.length) {
        typeValue.value += code.charAt(typeValue.value.length);
        setTimeout(typeEffect, 200);
    }
}
typeEffect()

</script>

<template>
    <div>
    <div class="abouttitle">
        <div class="code">
            <p class="typingEffect">
                {{ typeValue }}
            </p>
        </div>
    </div>
    <div class="aboutbody">
        <transition name="leftpane-anim" appear>
        <div class="leftpane grid-item vl">
            <p>I am passionate about software development, which led me to attain my Master’s in computer applications. I
                consider myself as a “forever student”, utilizing every opportunity to learn and grow more.
                <span class="java highlight">Java</span>
                and python are my go-to languages, with
                <span class="spring highlight">spring boot</span>
                as my most-used framework.
            </p>
            <p>I love low level designing. I have designed and developed <span
                    class="microservice highlight">microservice</span>-oriented e-commerce application. It is
                a highly scalable asynchronous application. <span class="dapp highlight">Decentralized applications</span>
                and <span class="crypto highlight">cryptocurrencies</span> excite me beyond
                words. I have also done a couple of projects in <span class="blockchain highlight">blockchain</span>.</p>
            <p>I am currently volunteering in Kerala Police Cyberdome to develop a software called “grapnel” which is a
                dark-web crawler with advanced AI and ML capabilities. It is an enterprise-level software backed by law
                enforcement-private partnerships. I also serve as the technical coordinator of South Indian Community for
                OJS (Open Journal Systems).
            </p>
            <div class="leftpane-button">
                <a href="https://drive.google.com/uc?export=download&id=1ioUGeRh3IPe5xXDd23Q1nztZUJcnmM1R" target="_self">
                <button>
                    Download Resume
                </button>
                </a>
            </div>
        </div>
        </transition>
        <!-- <div class="verticalline vl grid-item"></div> -->
        <transition name="rightpane-anim" appear>
        <div class="rightpane grid-item">
            <div class="rightpane-buttons">
                <q-btn color="dark" icon="school" label="Education" />
            </div>
            <div>
                <div class="q-pa-lg">
                    <q-timeline layout="loose" :side="side" color="dark">
                        <!-- <q-timeline-entry heading>Timeline heading</q-timeline-entry> -->

                        <kinesis-container>
                            <kinesis-element>
                                <q-timeline-entry title="MCA" subtitle="May, 2023" side="left" icon="school">
                                    <div>
                                        APJ Abdul Kalam Technological University
                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry title="BCA" side="right">
                                    <div>
                                        APJ Abdul Kalam Technological University
                                    </div>
                                </q-timeline-entry>

                                <!-- <q-timeline-entry heading>November, 2017</q-timeline-entry> -->

                                <q-timeline-entry title="Twelth" subtitle="May, 2018" side="left" icon="school">
                                    <div>
                                        Indian School Certificate
                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry title="Tenth" subtitle="May, 2016" side="right" icon="school">
                                    <div>
                                        Indian Certificate of Secondary Education
                                    </div>
                                </q-timeline-entry>
                            </kinesis-element>
                        </kinesis-container>

                    </q-timeline>
                </div>
            </div>
        </div>
        </transition>
    </div>
    </div>
</template>

<style scoped>
.abouttitle {
    margin-top: 5%;
}

.aboutbody {
    width: inherit;
    display: inline-grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    text-align: justify;
    margin-top: 40px;
    /* column-gap: 70%; */

}

.grid-item {
    padding: 0 20px;
}

.highlight {
    color: #e8e2ca;
    filter: drop-shadow(0 0 0.5em #e8e2ca);
}

/* .java {
    color: #e8e2ca;
    filter: drop-shadow(0 0 0.5em #e8e2ca);
} */

/* .spring {
    color: #6bae3e;
    filter: drop-shadow(0 0 0.5em #6bae3e);
}

.microservice {
    color: #dd2021;
    filter: drop-shadow(0 0 0.5em #dd2021);
}

.dapp {
    color: #a8a5b0;
    filter: drop-shadow(0 0 0.5em #a8a5b0);
}

.crypto {
    color: #bf9604;
    filter: drop-shadow(0 0 0.5em #bf9604);
}

.blockchain {
    color: #e8e2ca;
    filter: drop-shadow(0 0 0.5em #e8e2ca);
} */

.leftpane-button {
    text-align: center;
    padding-top: 40px;
}

.leftpane-button button {
    background-color: #e8e2ca;
    filter: drop-shadow(0 0 .5em #e8e2ca);
    transition: border-color 0.5s, background-color 0.5s;
}

.leftpane-button button:hover {
    border-color: #e8e2ca;
    background-color: transparent;
    color: #e8e2ca;
    filter: drop-shadow(0 0 0.1em #e8e2ca);
}

.vl {
    border-right: 1px solid #e8e2ca;
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

.leftpane-anim-enter-from {
    opacity: 0;
}

.leftpane-anim-enter-to {
    opacity: 1;
}

.leftpane-anim-enter-active {
    transition: opacity 10s ease;
}

.rightpane-anim-enter-from {
    opacity: 0;
    transform: translateX(100%)
}

.rightpane-anim-enter-to {
    opacity: 1;
    transform: translateX(0px)
}

.rightpane-anim-enter-active {
    transition: opacity 10s ease, transform 3s ease;
}

</style>
