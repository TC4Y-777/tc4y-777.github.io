<template>
    <div class="pageNotFoundMain">

        <div>
    <img src="../assets/pageNotFound.png" class="pageNotFoundImg" />
    </div>
    <router-link to="/home">
    <q-btn 
    class="home-button"
    padding="xl"
    color="primary"
    round
    icon="home" 
    />
    </router-link>
        </div>
</template>

<style scoped>
.pageNotFoundMain{
    text-align: center;
}
.pageNotFoundImg{
    width: 50vw;
    height: auto;
}
.home-button{
    filter: drop-shadow(0 0 .5em #e8e2ca);
}
</style>
