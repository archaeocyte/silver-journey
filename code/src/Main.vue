<template>
    <div id="main">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>


module.exports = {
    name: 'main',
    components: {
        "nav-bar": require("./components/nav-bar/index.vue")
    }
}
</script>

<style lang="less" scoped>

</style>
