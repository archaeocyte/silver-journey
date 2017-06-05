<template>
    <div id='theatre'>
        <div id='left'>
            <div id='cinemaName'>
                金逸珠江国际影城广州大学城店
            </div>
            <div id='address'>
                <img src='../../assets/images/index/loc_gray.png' />
                <span id='address_word'>番禺区小谷围街道贝岗村中二横路1号GOGO新天地2楼</span>
            </div>
            <div id='service'>
                <span>小食</span>
                <span>3D眼镜</span>
            </div>
            <div id='sale'>
                <span id='begin'>惠</span>
                <span id='end'>速度与激情8等多部电影特惠</span>
            </div>
        </div>
        <div id='right'>
            <div id='price'>
                30.8元起
            </div>
            <div id='buy'>
            选座购票
            </div>
        </div>
    </div>
</template>

<script>


module.exports = {
    name: 'theatre',
    
}
</script>

<style lang="less" scoped>

#theatre {
    width: 100%;
    height: 200px;
}

#cinemaName {
    width: 280px;
    height: 36px;
    line-height: 36px;
    font-family:PingFangSC-Medium;
    font-size:20px;
    color:#333333;
    letter-spacing:0;
    text-align:left;
}

#address {
    width: 500px;
    height: 24px;
    margin-top: 20px;
    img {
        width: 20px;
        height: 22px;
        float: left;
       
    }
    #address_word {
        width: 433px;
        height: 24px;
        font-family:PingFangSC-Regular;
        font-size:18px;
        color:#999999;
        letter-spacing:0;
        line-height:24px;
        text-align:left;
        margin-left: 16px;
    }    
}

#service {
    width: 500px;
    height: 24px;
    margin-top: 20px;
    span {
        border: 2px solid #f57905;
        border-radius:4px;
        display: inline-block;
        width:47px;
        height:18px;
        font-family:PingFangSC-Medium;
        font-size:14px;
        color:#f57905;
        letter-spacing:0;
        line-height:18px;
        margin-right: 17px;
        text-align: center;
    }
}

#sale {
    width: 500px;
    height: 40px;
    margin-top: 20px;
    #begin {
        display: inline-block;
        background:#f57905;
        width:40px;
        height:40px;
        font-family:PingFangSC-Medium;
        font-size:16px;
        color:#ffffff;
        line-height: 40px;
        letter-spacing:0;
        text-align:center;
    }
    #end {
        margin-left: 15px;
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#999999;
        letter-spacing:0;
        line-height:24px;
        text-align:left;
    }
}

#left {
    float: left;
}

#right {
    float: right;
    #price {
        width: 115px;
        height: 36px;
        font-family:PingFangSC-Medium;
        font-size:28px;
        color:#333333;
        letter-spacing:0;
        line-height:36px;
        text-align:left;
    }
    #buy {
        float: right;
        margin-top: 30px;
        background:#f57905;
        border:2px solid #f57905;
        border-radius:8px;
        width:108px;
        height:48px;
        font-family:PingFangSC-Medium;
        font-size:20px;
        color:#ffffff;
        letter-spacing:0;
        line-height:48px;
        text-align: center;
        cursor: pointer;
    }
}

</style>