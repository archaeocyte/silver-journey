<template>
    <div id='router-box'>
        <span id='index'>购票首页</span>
        <img id='arrow' src='../../assets/images/cinema/arrow.png' />
        <span id='current-page'>电影详情</span>
    </div>
</template>

<script>


module.exports = {
    name: 'router-box'
}
</script>

<style lang="less" scoped>

#router-box {
    margin-top: 10px;
    span {
    	font-family:PingFangSC-Regular;
    	font-size:16px;
    	letter-spacing:0.3px;
    	text-align:center;
    }
}

#index {
    color:#999999;
}

#current-page {
    color:#f57905;
}

#arrow {
    width: 10px;
    height: 17px;
    margin: 3px 5px -3px 5px;
}

</style>