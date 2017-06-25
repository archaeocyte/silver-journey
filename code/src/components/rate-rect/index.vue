<template>
	<div id='rate-rect'>
        <!-- TODO with 5 stars & mark -->
        <img id='1' class='stars' :src='grayStar' @mouseover="changeColor" @mouseleave="recover" @click="mark" />
        <img id='2' class='stars' :src='grayStar' @mouseover="changeColor" @mouseleave="recover" @click="mark" />
        <img id='3' class='stars' :src='grayStar' @mouseover="changeColor" @mouseleave="recover" @click="mark" />
        <img id='4' class='stars' :src='grayStar' @mouseover="changeColor" @mouseleave="recover" @click="mark" />
        <img id='5' class='stars' :src='grayStar' @mouseover="changeColor" @mouseleave="recover" @click="mark" />
        <span id='points'>{{point}}分</span>
    </div>
</template>

<script>

var ifClicked = 0;

/* compute relative distance between obj and mouse */
function relativeDist(obj) {
    var objTop = getObjOffsetTop(obj);                      // pos X of obj
    var objLeft = getObjOffsetLeft(obj);                    // pos Y of obj
    var mouseX = event.clientX + document.body.scrollLeft;  // pos X of mouse
    var mouseY = event.clientY + document.body.scrollTop;   // pos Y of mouse

    var objX = mouseX - objLeft;
    var objY = mouseY - objTop;
    var clickObjPosition = objX + "," + objY;
    console.log(clickObjPosition);

    return objX;
}

function getObjOffsetTop(obj){
    var tmp = obj.offsetTop;
    var val = obj.offsetParent;
    while(val != null){
        tmp += val.offsetTop;
        val = val.offsetParent;
  }
    return tmp;
}

function getObjOffsetLeft(obj){
    var tmp = obj.offsetLeft;
    var val = obj.offsetParent;
    while(val != null){
        tmp += val.offsetLeft;
        val = val.offsetParent;
  }
    return tmp;
}

/* Transform of stars */
function starTransform() {
    var curStar = event.target;
    var point = 2 * curStar.id - 1;
    var starList = document.getElementsByClassName("stars");

    // point at left part of star
    console.log(curStar.offsetWidth)
    if (relativeDist(curStar) <= curStar.offsetWidth / 2) {
        curStar.src = "/static/halfStar.png";
    } else {       // point at right part of star
        curStar.src = "/static/goldenStar.png";
        point += 1;
    }
                
    for (var i = 1; i <= starList.length; i++) {
        if (starList[i-1].id < curStar.id) {
            starList[i-1].src = "/static/goldenStar.png";
        } else if (starList[i-1].id > curStar.id) {
            starList[i-1].src = "/static/grayStar.png";
        }
    }
    return point;        
}

module.exports = {
    name: 'rate-rect',
    data() {
        this.point = 0;
        return {
            point: this.point,
            grayStar: require('../../assets/images/cinema/grayStar.png')
        }
    },
    methods: {

        changeColor: function () {
            // if click event is triggered, no need to change color
            if (ifClicked == 0)
                this.point = starTransform();
        },

        recover: function () {
            // if click event is triggered, no need to recover
            if (ifClicked == 0) {
                var starList = document.getElementsByClassName("stars");
                for (var i = 1; i <= starList.length; i++) {
                    starList[i-1].src = "/static/grayStar.png";
                }
                this.point = 0;
            }
            
        },

        mark: function () {
            ifClicked = 1;  // set it fixed
            this.point = starTransform();
        }
        
    }

}


</script>

<style lang="less" scoped>

.stars {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
}

span {
    font-family:PingFangSC-Regular;
    font-size:20px;
    color:#999999;
    letter-spacing:0.38px;
    line-height:32px;
    text-align:left;
    position: relative;
    top: -2px;
    width: auto;
}
</style>