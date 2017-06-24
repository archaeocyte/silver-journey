<template>
    <div id='detail-cinema'>
        <cinema-details></cinema-details>
    </div>
</template>

<script>
    module.exports = {
        name: 'detail-cinema',
        created: function () {
            console.log(this.$route);
        },
        components: {
            "cinema-details":require("../../components/cinema-details/index.vue")
        }
    }
</script>

<style lang="less" scoped>
</style>