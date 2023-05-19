<script setup>
import { ref } from 'vue';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

const code = "Projects"
const typeValue = ref('')

const typeEffect = () => {
    if (typeValue.value.length < code.length) {
        typeValue.value += code.charAt(typeValue.value.length);
        setTimeout(typeEffect, 300);
    }
}
typeEffect()

const techStack = [
    {
        path: "src/assets/techStack/beanie.png",
        alt: "python_beanie",
        glow: "",
        position: "first-row"
    },
    {
        path: "src/assets/techStack/docker.png",
        alt: "docker",
        glow: "",
        position: "second-row"
    },
    {
        path: "src/assets/techStack/graphql.png",
        alt: "graphql",
        glow: "",
        position: "first-row"
    },
    {
        path: "src/assets/techStack/html.png",
        alt: "html",
        glow: "",
        position: "third-row"
    },
    {
        path: "src/assets/techStack/java.png",
        alt: "java",
        glow: "",
        position: "first-row"
    },
    {
        path: "src/assets/techStack/js.png",
        alt: "js",
        glow: "",
        position: "second-row"
    },
    {
        path: "src/assets/techStack/linux.png",
        alt: "linux",
        glow: "",
        position: "first-row"
    },
    {
        path: "src/assets/techStack/spring-boot.png",
        alt: "spring_boot",
        glow: "#6db53d",
        position: "fourth-row"
    },

    {
        path: "src/assets/techStack/mongodb.png",
        alt: "mongodb",
        glow: "",
        position: "first-row"
    },
    {
        path: "src/assets/techStack/python.png",
        alt: "python",
        glow: "",
        position: "second-row"
    },
    {
        path: "src/assets/techStack/rabbitmq.png",
        alt: "rabbitmq",
        glow: "",
        position: "first-row"
    },
    // {
    //     path: "src/assets/techStack/restapi.png",
    //     alt: "restapi",
    //     glow: ""
    // },
    {
        path: "src/assets/techStack/solidity.png",
        alt: "solidity",
        glow: "",
        position: "third-row"
    },
    {
        path: "src/assets/techStack/minio.png",
        alt: "minio",
        glow: "",
        position: "first-row"
    },
    {
        path: "src/assets/techStack/strawberry.png",
        alt: "python_strawberry",
        glow: "",
        position: "second-row"
    },
    {
        path: "src/assets/techStack/vuejs.png",
        alt: "vuejs",
        glow: "",
        position: "first-row"
    }
];

</script>

<template>
    <div>
        <div class="projecttitle">
            <div class="code">
                <p class="typingEffect">
                    {{ typeValue }}
                </p>
            </div>
        </div>
        <div class="q-pa-md q-gutter-sm">
            <div class="tech-stack-div">

                <div v-for="tech in techStack.length" class="tech-icons">
                    <kinesis-container>
                        <kinesis-element :strength="30" type="translate">
                            <div :class="techStack[tech - 1].position">
                                <q-avatar size="70px" color="transparent" text-color="white">
                                    <img :src="techStack[tech - 1].path" :alt="techStack[tech - 1].alt">
                                </q-avatar>
                            </div>

                        </kinesis-element>
                    </kinesis-container>

                </div>

            </div>
        </div>

        <div class="project-list-div" >
            <div class="q-pa-md">
                <div class="row justify-center q-gutter-sm">
                    <kinesis-container>
                        <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/cloudstore.png">

                            <q-card-section>
                                <div class="text-h6">CloudStore</div>
                                <div class="text-subtitle2">Shop Aggregation Platform</div>

                                <q-btn flat round color="red" icon="img:src/assets/techStack/icons/spring-boot.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/mongodb.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/vuejs.png" />
                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                        </kinesis-container>

                        <kinesis-container>
                            <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/pigihi.png">

                            <q-card-section>
                                <div class="text-h6">Pigihi</div>
                                <div class="text-subtitle2">Microservice-oriented e-commerce application</div>

                                <q-btn flat round color="red" icon="img:src/assets/techStack/icons/spring-boot.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/mongodb.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/docker.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/python.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/vuejs.png" />

                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                            </kinesis-container>

                            <kinesis-container>
                            <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/rabbitmq.png">

                            <q-card-section>
                                <div class="text-h6">Asynchronous Communication</div>
                                <div class="text-subtitle2">Communicate asynchronously using rabbitmq</div>

                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/rabbitmq.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/python.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/graphql.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/strawberry.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/docker.png" />

                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                                </kinesis-container>

                                <kinesis-container>
                            <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/minio.png">

                            <q-card-section>
                                <div class="text-h6">Minio Migration</div>
                                <div class="text-subtitle2">Migrate from aws to minio</div>

                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/python.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/minio.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/graphql.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/strawberry.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/docker.png" />

                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                                </kinesis-container>

                                <kinesis-container>
                            <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/ojs.png">

                            <q-card-section>
                                <div class="text-h6">OJS (Open Journal Systems)</div>
                                <div class="text-subtitle2">Site for OJS South Indian Community</div>

                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/html.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/js.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/linux.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/vuejs.png" />

                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                                </kinesis-container>

                                <kinesis-container>
                            <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/decshare.png">

                            <q-card-section>
                                <div class="text-h6">DecShare</div>
                                <div class="text-subtitle2">Decentralized Crowdfunding platform - In Progress</div>

                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/html.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/js.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/solidity.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/linux.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/vuejs.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/docker.png" />

                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                                </kinesis-container>

                                <kinesis-container>
                            <kinesis-element strength="30" type="depth_inv">
                    <q-intersection transition="scale" class="example-item">
                        <q-card flat bordered class="q-ma-sm card-style">

                            <img src="../assets/projects/crypted.png">

                            <q-card-section>
                                <div class="text-h6">Crypted</div>
                                <div class="text-subtitle2">Decentralized cryptocurrency exchange - In Progress</div>

                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/html.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/js.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/solidity.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/linux.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/java.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/vuejs.png" />
                                <q-btn flat round color="teal" icon="img:src/assets/techStack/icons/docker.png" />

                            </q-card-section>

                        </q-card>
                    </q-intersection>
                    </kinesis-element>
                                </kinesis-container>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.projecttitle {
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

.tech-stack-div {
    display: inline-flex;
    /* margin: 5px 0px;
    padding: 5px 0px; */
    /* grid-template-rows: auto auto; */
}

.first-row {
    margin-top: 140px;
}

.second-row {
    margin-top: 70px;
}

.third-row {
    margin-top: 70px;
}

.forth-row {}

.project-list-div img{
    height: 320px;
    width: 480px;
}

.card-style{
    background-color: transparent;
}
.card-style:hover{
    filter: drop-shadow(0 0 .5em #e8e2ca);
    /* box-shadow: #e8e2ca; */
    /* border-color: #e8e2ca; */
}

</style>

<style lang="sass" scoped>
.example-item
  height: 500px
  width: 500px
</style>
