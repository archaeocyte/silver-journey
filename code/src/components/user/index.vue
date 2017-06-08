<template>
	<div id='user'>
        <img id='portrait' src='../../assets/images/cinema/portrait.png' />
        <p id='username'>电影小天王</p>
    </div>
</template>

<script>


module.exports = {
    name: 'user'
}
</script>

<style lang="less" scoped>

#user {
    width: 87px;
    height: 250px;
}

#portrait {
    margin: 10px 0px 26px 14px;
    width: 59px;
    height: 59px;
}

#username {
    font-family:PingFangSC-Regular;
    font-size:17px;
    color:#666666;
    letter-spacing:0.32px;
    text-align:left;
    width: 87px;
}

#portrait:hover {
    cursor: pointer;
}

#username:hover {
    cursor: pointer;
}

</style>