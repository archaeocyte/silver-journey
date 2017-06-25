<template>
    <div id='block'>
        <div>
        <total></total>
        </div>
        <div>
        <options2></options2>
        </div>
        <choosedetail></choosedetail>
    </div>
</template>

<script>


module.exports = {
    name: 'block',
    components: {
        'total':require("./choosetime.vue"),
        'options2':require("./choosefilm.vue"),
        'choosedetail':require("./choosedetail.vue"),
    }
}
</script>

<style lang="less" scoped>
    #block {
        height:auto;
    }
</style>
