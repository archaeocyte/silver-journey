<template>
	<div id="choosedetail">
		<table>
		<tr id="tablehead">
			<td><span>放映时间</span></td>
			<td><span>语言版本</span></td>
			<td><span>放映厅</span></td>
			<td><span>票价</span></td>
			<td><span>选座订票</span></td>
		</tr>
		<tr>
			<td>
				<ul><li>19:55</li>
					<li class="endtime">预计21:50结束</li></ul>
			</td>
			<td>英语3D</td>
			<td>一号厅（大）</td>
			<td>38元</td>
			<td><button>
			<span>去购票</span>
			</button></td>
		</tr>
		<tr>
			<td>
				<ul><li>19:55</li>
					<li>预计21:50结束</li></ul>
			</td>
			<td>英语3D</td>
			<td>一号厅（大）</td>
			<td>38元</td>
			<td><button>
			<span>去购票</span>
			</button></td>
		</tr>
		<tr>
			<td>
				<ul><li>19:55</li>
					<li>预计21:50结束</li></ul>
			</td>
			<td>英语3D</td>
			<td>一号厅（大）</td>
			<td>38元</td>
			<td><button>
			<span>去购票</span>
			</button></td>
		</tr>
		</table>
	</div>

</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
    export default {
    	name:'choosedetail',
        components: {
            swiper,
            swiperSlide
        },
        data() {
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
	#choosedetail {
		margin-top:92px;
		height:auto;
		padding-bottom:153px;
	}
    .time {
    	font-family:PingFangSC-Regular;
		font-size:16px;
		color:#ffffff;
		letter-spacing:0.3px;
		text-align:center;
    }
    #tablehead {
    	background:#888888;
		height:86px;
		span {
			font-family:PingFangSC-Regular;
			font-size:18px;
			color:#ffffff;
			letter-spacing:0.34px;
			text-align:center;
		}
    }
    table {
    	text-align:center;
    	margin:0 auto;
    	width:930px;
    	height:630px;
    	background-color:#f7f7f7;
    	border-collapse: collapse;
    	button {
    		background:#f57905;
			border-radius:8px;
			width:81px;
			height:36px;
			span {
				font-family:PingFangSC-Regular;
				font-size:16px;
				color:#ffffff;
				letter-spacing:0.3px;
				text-align:center;
			}
    	}
    }
    td {
    	margin:0px;
    	border-bottom:1px solid #cfcfcf;
    	font-family:PingFangSC-Regular;
		font-size:18px;
		color:#666666;
		letter-spacing:0.34px;
		text-align:center;
    }
    li {
    	
    }
    #endtime {
    	font-family:PingFangSC-Regular;
		font-size:14px;
		color:#999999;
		letter-spacing:0.26px;
		text-align:center;
    }
</style>
