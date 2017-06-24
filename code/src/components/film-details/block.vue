<template>
	<div id="block">
		<div id="prevue">
			<span>预告片</span>
			<a href="http://www.iqiyi.com/v_19rrn3d5v0.html">
			<img :src='video'/></a>
		</div>
		<div id="photos">
			<span>剧照</span>
			<table>
				<tr>
				<td><img :src='photo'></td>
				<td><img :src='photo' /></td>
				<td><img :src='photo' /></td>
				</tr>
				<tr>
				<td><img :src='photo' /></td>
				<td><img :src='photo' /></td>
				<td><img :src='photo' /></td>
				</tr>
			</table>
		</div>
		<div id="music">
			<span id="title">电影原声</span>
			<table>
			<tr>
				<td>
				<span clsss="musicName">1.Gang up</span>
				<span class="author">Young Thug</span>
				<img :src='play'>
				</td>
			</tr>
			<tr>
				<td>
				<span clsss="musicName">1.Gang up</span>
				<span class="author">Young Thug</span>
				<img :src='play'/>
				</td>
			</tr>
			</table>
		</div>
		<div id="story">
			<span id="juqing">剧情</span>
			<p>多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，这支曾环游世界的顶级飞车家族队伍的生活正渐趋平淡。然而，一位神秘女子Cipher的出现，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难的情义面临瓦解崩溃，前所未有的灾难考验着飞车家族。。。</p>
			<span id="xiangqing" @click="detail">详情></span>
		</div>
		<div id="view" v-show="viewOn"@click='recover'>
			<div>
			<p>多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，这支曾环游世界的顶级飞车家族队伍的生活正渐趋平淡。然而，一位神秘女子Cipher的出现，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难的情义面临瓦解崩溃，前所未有的灾难考验着飞车家族。。。</p>
			</div>
		</div>
	</div>
</template>

<script>


module.exports = {
	name: 'block',
	data () {
		return {
			photo:require('../../assets/images/film/photo1.png'),
			video: require('../../assets/images/film/video1.png'),
			play: require('../../assets/images/film/play.png'),
			viewOn: false
		};
	},
	methods: {
		detail: function () {
			if (this.viewOn==false) {
	            this.viewOn=true;
        	}
        },
        recover: function() {
        	if (this.viewOn == true) {
        		this.viewOn=false;
        	}
        }
        
	}
}
</script>

<style lang="less" scoped>
	#view {
		background:#000000;
		opacity: 0.6;
		width: 1960px;
		height: 553px;
		position: relative;
		bottom:1000px;
		right: 500px;
		color: #ffffff;
		div {
			margin:0 auto;
			text-align:left;
			width:980px;
			height:550px;
			position: relative;
			top:276px;
			p {
				font-family:PingFangSC-Regular;
				font-size:16px;
				color:#dddddd;
				letter-spacing:0.3px;
				text-align:left;
			}
		}
	}
	#title {
		color:#ffffff;
		position: relative;
		right: 135px;
		padding: 0px;
		margin:0px;
	}
	#block {
		width:980px;
		height:550px;
		margin:0 auto;
		text-align:center;
		border:2px solid #000000;
		#prevue {
			vertical-align:middle;
			
			span {
				position: relative;
				bottom:140px;
				right:310px;
				font-family:PingFangSC-Medium;
				font-size:24px;
				color:#ffffff;
				letter-spacing:0.45px;
				text-align:center;
				display:line-block;
			}
			img {
				width:274px;
				height:200px;
				position: relative;
				right:390px;
				top:100px;
			}
		}
		#photos {
			position: relative;
			right: 12px;
			top: 9px;
			span {
				position: relative;
				bottom:173px;
				right:150px;
				font-family:PingFangSC-Medium;
				font-size:24px;
				color:#ffffff;
				letter-spacing:0.45px;
				text-align:center;
				display:line-block;
			}
			table {
				//border:1px solid #000000;
				//cellspacing:15px;
				//cellpadding:15px;
				position: relative;
				left:300px;
				bottom:150px;
				img {
					width:92px;
					height:92px;
					padding:5.5px;
				}
			}
		}
		#music {
			background-color:#ffffff;
			width:361px;
			height:417px;
			position: relative;
			left:620px;
			bottom:353px;

			span {
				font-family:PingFangSC-Medium;
				font-size:24px;
				letter-spacing:0.45px;
				text-align:center;
				position: relative;
				top:-60px;
			}
			table {
				position: relative;
				top:-28px;
				td {
					border-bottom:1px solid #c6c6c6;
					text-align: center;
					margin: 0 auto;
					width: 361px;
					height: 100px;
				}
				span {
					width: 86px;
					height: 25px;
					font-family:PingFangSC-Regular;
					font-size:18px;
					color:#333333;
					letter-spacing:0.34px;
					position: relative;
					right: 50px;
					top: -20px;
				}
				.author {
					width:82px;
					height: 20px;
					font-family:PingFangSC-Regular;
					font-size:14px;
					color:#999999;
					letter-spacing:0.26px;
					text-align:center;
					position: relative;
					right: 145px;
					top:0px;
				}
				img {
					position: relative;
					left:30px;
				}
			}
		}
		#story {
			position: relative;
			bottom: 500px;
			#juqing {
				width: 49px;
				height: 33px;
				font-family:PingFangSC-Medium;
				font-size:24px;
				color:#ffffff;
				letter-spacing:0.45px;
				text-align:center;
				position: relative;
				right: 462px;
				position: relative;
				bottom: 30px;
			}
			#xiangqing {
				font-family:PingFangSC-Regular;
				font-size:16px;
				color:#dddddd;
				letter-spacing:0.3px;
				text-align:left;
				position: relative;
				bottom: 21px;
				right: 195px;
			}
			p {
				font-family:PingFangSC-Regular;
				font-size:16px;
				color:#dddddd;
				letter-spacing:0.3px;
				text-align:left;
				width: 606px;
				height: 88px;
			}
		}
	}
</style>
