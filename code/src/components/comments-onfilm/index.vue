<template>
    <div id='comments-onfilm'>
        <div id='user'>
            <img id='other-portrait' src='../../assets/images/cinema/critic-portrait.png' />
        </div>
        <div id='right-comment'>
            <img src='../../assets/images/film/comment-rect.png' />

            <div id='others-rate-rect'>
                <span id='critic-name'>AngelineSL</span>
                <img id='f1' class='ostars' :src='goldenURL' />
                <img id='f2' class='ostars' :src='goldenURL' />
                <img id='f3' class='ostars' :src='goldenURL' />
                <img id='f4' class='ostars' :src='goldenURL' />
                <img id='f5' class='ostars' :src='halfURL' />
                <span id='markOnFilm'>{{marks}}分</span>
            </div>

            <div id='comment-rect'>
                <p id='comments-follow'>{{comment}}</p>
            </div>
            <div id='like-or-not'>
                <img src='../../assets/images/cinema/like.png' @click="clike" />
                <span id='like-num'>{{likes}}</span>
                <img src='../../assets/images/cinema/dislike.png' @click="cdislike" />
                <span id='dislike-num'>{{dislikes}}</span>
            </div>
        </div>
    </div>
</template>

<script>
var clike_t = new Array(0,0,0,0);
var cdislike_t = new Array(0,0,0,0);

module.exports = {
    name: 'comments-onfilm',
    data () {
        this.marks = 9;
        this.likes = 99;
        this.dislikes = 3;
        return {
            marks: this.marks,
            likes: this.likes,
            dislikes: this.dislikes,
            comment: "全程高潮无尿点，开篇就是倒开烈火战车，僵尸车队在大街上出行时，真的很有zombie的感觉，“五车分尸”的桥段也很赞。CT扮演的大反派，颜值高气场强，但是手下的武力值太弱；JS洗白得也太容易了，他老妈的出场倒是挺出彩的；片中两次提到Brian，小伤感；小baby萌萌哒，每个镜头都敲可爱。最让我感动的镜头是潜艇爆炸时，所有人飞车前来挡在Dom身前，真的是家人才有的感情啊。最后吐槽一下基本上没什么感觉的3D特效～",
            grayURL: require('../../assets/images/cinema/halfStar.png'),
            goldenURL: require('../../assets/images/cinema/goldenStar.png'),
            halfURL: require('../../assets/images/cinema/halfStar.png')
        };
        
    },
    methods: {
        clike: function () {
            var gpNode = event.target.parentNode.parentNode.parentNode
            var index = (gpNode.className)[gpNode.className.length-1]
            console.log(index)

            // click LIKE, number++
            if (clike_t[index] == 0) {
                if (index == 0)
                    document.getElementById('like-num').innerHTML = 1
                else
                    this.likes += 1

                clike_t[index] = 1;
            } 
            // cancel click, number--
            else if (clike_t[index] == 1) {
                if (this.likes > 0) {
                    if (index == 0)
                        document.getElementById('like-num').innerHTML = 0
                    else
                        this.likes -= 1
                }

                clike_t[index] = 0;
            }
        },
        cdislike: function () {
            var gpNode = event.target.parentNode.parentNode.parentNode
            var index = (gpNode.className)[gpNode.className.length-1]
            console.log(index)

            // click DISLIKE, number++
            if (cdislike_t[index] == 0) {
                if (index == 0)
                    document.getElementById('dislike-num').innerHTML = 1
                else
                    this.dislikes += 1

                cdislike_t[index] = 1;
            } 
            // cancel click, number--
            else if (cdislike_t[index] == 1) {
                if (this.dislikes > 0) {
                    if (index == 0)
                        document.getElementById('dislike-num').innerHTML = 0
                    else
                        this.dislikes -= 1
                }

                cdislike_t[index] = 0;
            }
        }
    },
    components: {
        
    }
}
</script>

<style lang="less" scoped>
#comments-onfilm {
    margin-top: 60px;
    height: 237px;
}
#user {
    width: 87px;
    height: 237px;
    float: left;
}
#other-portrait {
    width: 60px;
    height: 60px;
    margin-top: 19px;
}
#other-portrait:hover {
    cursor: pointer;
}
#right-comment {
    /*margin: -159px 0px 0px 90px;*/
    float: right;
    width: 890px;
}
#others-rate-rect {
    margin: -219px 0px 0px 25px;
    span {
        font-family:PingFangSC-Regular;
        font-size:20px;
        letter-spacing:0.38px;
        line-height:32px;
        text-align:left;
        position: relative;
        top: -2px;
    }
}
.ostars {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
}
#critic-name {
    color:#666666;
    margin-right: 20px;
    width: auto;
    cursor: pointer;
}
#markOnFilm {
    color:#f57905;
}
#comment-rect {
    margin: 25px 0px 0px 34px;
    p {
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#999999;
        letter-spacing:0.3px;
        text-align:left;
    }
}
p {
    width: 822px;
    font-family:PingFangSC-Regular;
    font-size:16px;
    color:#999999;
    letter-spacing:0.3px;
    text-align:left;
    margin-top: -10px;
}
#like-or-not {
    margin-left: 754px;
    margin-top: 30px;
    img {
        cursor: pointer;
    }
    img:hover {
        position: relative;
        top: -3px;
    }
}
span {
    font-family:PingFangSC-Regular;
    font-size:18px;
    letter-spacing:0.34px;
    text-align:left;
    margin-left: 10px;
    position: relative;
    top: -3px;
}
#like-num {
    color:#f57905;
    margin-right: 10px;
}
#dislike-num {
    color:#999999;
}
</style>