<script setup>

// Main navigation bar items array
const links = [
    {
        id: 0,
        text: 'Home',
        page: '/home'
    },
    {
        id: 1,
        text: 'About',
        page: '/about'
    },
    {
        id: 2,
        text: 'Projects',
        page: '/projects'
    },
    // {
    //     id: 3,
    //     text: 'Seminars',
    //     page: '/seminars'
    // },
    // {
    //     id: 4,
    //     text: 'Achievements',
    //     page: '/achievements'
    // },
    {
        id: 5,
        text: 'Contact Me',
        page: '/contact'
    },
]
</script>

<template>

    <div class="navbar">
    <div class="mylogo">
        <router-link to="/">
        <img src="../assets/logo.png" />
        </router-link>
    </div>

    <!-- Create navigation bar menu items from array -->
    <nav>
        <router-link class="navmenuitem" v-for="navroutes in links" v-bind:key="navroutes.id" :to="navroutes.page">{{ navroutes.text
        }}</router-link>
    </nav>
    </div>
</template>

<style scoped>
.navbar{
    display: inline-flex;
    margin-top: 10px;
}
.navmenuitem {
    
    margin: 0 30px;
    /* font-size: large; */
}

.mylogo {
    position: fixed;
    left: 20px;
    filter: drop-shadow(0 0 0.2em #e8e2ca);
}
.mylogo > img{
    width: 50px;
    height: 70px;
    
}
a:hover {
  color: #e8e2ca;
  filter: drop-shadow(0 0 2em #e8e2ca);
}
a.router-link-active{
  border-bottom: 1px solid #e8e2ca;
  filter: drop-shadow(0 0 1em #e8e2ca);
}
</style>
