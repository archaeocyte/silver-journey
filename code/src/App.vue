<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
module.exports = {
    name: 'app',
    components: {
        "nav-bar": require("./components/nav-bar/index.vue")
    }
}
</script>

<style>
#app {
    
}
</style>
