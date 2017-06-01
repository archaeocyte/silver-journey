<template>
    <div id="main">
        <nav-bar></nav-bar>
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-bar></footer-bar>
    </div>
</template>

<script>


module.exports = {
    name: 'main',
    data() {
        return {
            transitionName: 'page-fade'
        };
    },
    components: {
        "nav-bar": require("./components/nav-bar/index.vue"),
        "footer-bar": require("./components/footer-bar/index.vue")
    }
}
</script>

<style lang="less" scoped>

</style>
