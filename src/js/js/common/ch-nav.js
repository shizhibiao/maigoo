// 头部加导航
function H_nav(container){
	this.container = container;
	this.init();
}

H_nav.Tomplate = `<div class="header container">
			<div class="h-logo">
				<a href="##">欢迎来到王者荣耀</a>
			</div>
			<div class="h-nav">
				<ul>
					<li class="hn-list">
						<a href="##" class="font16"><i class="iconfont icon-jinbi"></i>招商加盟<span class="after"></span></a>
						<div class="hover-nav">
							<div class="hn-con container">
								<div class="con-txt">
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">招商品牌<i class="song">>></i></a>
										</dt>
										<dd><a href="##">热门品牌</a></dd>
										<dd><a href="##">招商海报</a></dd>
										<dd><a href="##">大牌推荐</a></dd>
										<dd><a href="##">最新发布</a></dd>
										<dd><a href="##">最想加盟</a></dd>
										<dd><a href="##">最高关注</a></dd>
									</dl>
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">招商行业<i class="song">>></i></a>
										</dt>
										<dd><a href="##">热门招商</a></dd>
										<dd><a href="##">家具建材</a></dd>
										<dd><a href="##">服饰鞋包</a></dd>
										<dd><a href="##">数码电器</a></dd>
										<dd><a href="##">餐饮美食</a></dd>
										<dd><a href="##">母婴用品</a></dd>
										<dd><a href="##">交通出行</a></dd>
										<dd><a href="##">生活服务</a></dd>
									</dl>
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">加盟资讯<i class="song">>></i></a>
										</dt>
										<dd><a href="##">大数据分析</a></dd>
										<dd><a href="##">大数据分析</a></dd>
										<dd><a href="##">投资行情</a></dd>
										<dd><a href="##">加盟排行榜</a></dd>
										<dd><a href="##">费用分析</a></dd>
										<dd><a href="##">创业宝典</a></dd>
									</dl>
									<div class="righticon">
										<ul class="font16">
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-mn_tianjiahaoyou"></i><br />我要加盟</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-hezuo"></i><br />发布招商</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-zhishiwenda"></i><br />加盟信息</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="hn-list">
						<a href="##" class="font16"><i class="iconfont icon-gouwucheman"></i>网购品牌<span class="after"></span></a>
						<div class="hover-nav">
							<div class="hn-con container">
								<div class="con-txt">
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">网购行业<i class="song">>></i></a>
										</dt>
										<dd><a href="##">住宅家具</a></dd>
										<dd><a href="##">照明灯饰</a></dd>
										<dd><a href="##">卫浴洁具</a></dd>
										<dd><a href="##">家纺床品</a></dd>
										<dd><a href="##">精选女装</a></dd>
										<dd><a href="##">品牌男装</a></dd>
										<dd><a href="##">美容护肤</a></dd>
										<dd><a href="##">箱包皮具</a></dd>
										<dd><a href="##">休闲零食</a></dd>
									</dl>
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">网购品牌<i class="song">>></i></a>
										</dt>
										<dd><a href="##">热门品牌</a></dd>
										<dd><a href="##">高端大牌</a></dd>
										<dd><a href="##">老字号</a></dd>
										<dd><a href="##">国外品牌</a></dd>
										<dd><a href="##">国产品牌</a></dd>
									</dl>
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">产品导购<i class="song">>></i></a>
										</dt>
										<dd><a href="##">买购甄选</a></dd>
										<dd><a href="##">购物清单</a></dd>
										<dd><a href="##">发现好货</a></dd>
										<dd><a href="##">产品评测</a></dd>
										<dd><a href="##">行业导购</a></dd>
										<dd><a href="##">品牌导购</a></dd>
										<dd><a href="##">小编精选</a></dd>
										<dd><a href="##">新品推荐</a></dd>
										<dd><a href="##">低价便宜</a></dd>
									</dl>
									<div class="righticon">
										<ul class="font16">
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-dianpu"></i><br />品牌网店</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-dingwei"></i><br />售后网点</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-tupian"></i><br />装修美图</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="hn-list">
						<a href="##" class="font16"><i class="iconfont icon-zhishiku"></i>知识课堂<span class="after"></span></a>
						<div class="hover-nav">
							<div class="hn-con container">
								<div class="con-txt">
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">知识分类<i class="song">>></i></a>
										</dt>
										<dd style="width: 65px;"><a href="##">生活</a></dd>
										<dd style="width: 65px;"><a href="##">购买</a></dd>
										<dd style="width: 65px;"><a href="##">节日</a></dd>
										<dd style="width: 65px;"><a href="##">行业</a></dd>
										<dd style="width: 65px;"><a href="##">品牌</a></dd>
										<dd style="width: 65px;"><a href="##">地区</a></dd>
										<dd style="width: 65px;"><a href="##">高端</a></dd>
										<dd style="width: 65px;"><a href="##">人群</a></dd>
										<dd style="width: 65px;"><a href="##">健康</a></dd>
										<dd style="width: 65px;"><a href="##">季节</a></dd>
									</dl>
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">装修知识<i class="song">>></i></a>
										</dt>
										<dd><a href="##">户型</a></dd>
										<dd><a href="##">装修流程</a></dd>
										<dd><a href="##">空间改造</a></dd>
										<dd><a href="##">家具</a></dd>
										<dd><a href="##">风格款式</a></dd>
										<dd><a href="##">水电材料</a></dd>
										<dd><a href="##">颜色</a></dd>
										<dd><a href="##">风水福运</a></dd>
										<dd><a href="##">预算价格</a></dd>
									</dl>
									<dl class="categoryul">
										<dt class="font16 c3f6799">
											<a href="##">知识体系<i class="song">>></i></a>
										</dt>
										<dd><a href="##">旅游</a></dd>
										<dd><a href="##">地面材料</a></dd>
										<dd><a href="##">门窗楼梯</a></dd>
										<dd><a href="##">孕产妇</a></dd>
										<dd><a href="##">厨卫电器</a></dd>
										<dd><a href="##">厨卫洁具</a></dd>
										<dd><a href="##">食品</a></dd>
										<dd><a href="##">家具家私</a></dd>
										<dd><a href="##">滋补营养</a></dd>
									</dl>
									<div class="righticon">
										<ul class="font16">
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-zhishiwenda"></i><br />问答</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-jingxuanchanpinku"></i><br />专题</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-kongjian"></i><br />空间</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="hn-list">
						<a href="##" class="font16"><i class="iconfont icon-icon--"></i>TOP头条<span class="after"></span></a>
						<div class="hover-nav hover-nav4">
							<div class="hn-con container">
								<div class="con-txt">
									<dl class="categoryul categoryul4">
										<dt class="font16 c3f6799">
											<a href="##">头条推荐<i class="song">>></i></a>
										</dt>
										<dd><a href="##">家居</a></dd>
										<dd><a href="##">生活</a></dd>
										<dd><a href="##">娱乐</a></dd>
										<dd><a href="##">名企</a></dd>
										<dd><a href="##">榜单</a></dd>
										<dd><a href="##">选购</a></dd>
										<dd><a href="##">健康</a></dd>
										<dd><a href="##">家电</a></dd>
										<dd><a href="##">科技</a></dd>
									</dl>
									<dl class="categoryul categoryul4">
										<dt class="font16 c3f6799">
											<a href="##">热点聚焦<i class="song">>></i></a>
										</dt>
										<dd><a href="##">品牌</a></dd>
										<dd><a href="##">行业</a></dd>
										<dd><a href="##">地区</a></dd>
										<dd><a href="##">代言</a></dd>
										<dd><a href="##">商标</a></dd>
										<dd><a href="##">时尚</a></dd>
										<dd><a href="##">专卖店</a></dd>
										<dd><a href="##">电商</a></dd>
										<dd><a href="##">产品</a></dd>
									</dl>
									<dl class="categoryul categoryul4">
										<dt class="font16 c3f6799">
											<a href="##">热点聚焦<i class="song">>></i></a>
										</dt>
										<dd><a href="##">品牌</a></dd>
										<dd><a href="##">行业</a></dd>
										<dd><a href="##">地区</a></dd>
										<dd><a href="##">代言</a></dd>
										<dd><a href="##">商标</a></dd>
										<dd><a href="##">时尚</a></dd>
										<dd><a href="##">专卖店</a></dd>
										<dd><a href="##">电商</a></dd>
										<dd><a href="##">产品</a></dd>
									</dl>
									<dl class="categoryul categoryul4">
										<dt class="font16 c3f6799" style="color: #999;">城市地图</dt>
										<dd><a href="##">大学</a></dd>
										<dd><a href="##">景点</a></dd>
										<dd><a href="##">特产</a></dd>
										<dd><a href="##">名人</a></dd>
										<dd><a href="##">展会</a></dd>
										<dd><a href="##">投票</a></dd>
										<dd><a href="##">温泉</a></dd>
										<dd><a href="##">医院</a></dd>
									</dl>
									<div class="righticon">
										<ul class="font16">
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-shu"></i><br />知识</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-lubiao"></i><br />人生指南</a>
											</li>
											<li>
												<a href="##" class="c3f6799"><i class="iconfont icon-fabu"></i><br />发布头条</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="h-right font12">
				<a href="##" class="c3f6799"><i class="iconfont icon-xiazai"></i>买购网下载</a>
				<a href="##" class="c3f6799 hr-a2"><i class="iconfont icon-erweima"></i>手机版<img class="img-erweima" src="https://www.maigoo.com/qrcode.php?url=https://m.maigoo.com/?updatehtml=..%2F..%2F..%2F..%2F..%2F..%2F..." /></a>
				<div class="userinfo orange center">
					<i class="iconfont icon-yonghu"></i>
					<a href="##" class="click-login c3f6799">登入</a><span>|</span>
					<a href="##" class="click-register c3f6799">注册</a>&nbsp;&nbsp;&nbsp;
					<i class="iconfont icon-jiahao"></i>
					<a href="##" class="c3f6799">发布</a>
				</div>
			</div>
		</div>`;

$.extend(H_nav.prototype, {
	init: function(){
		this.createDom()
	},
	createDom: function(){
		this.ele = $("<div></div>").append(H_nav.Tomplate);
		this.container.append(this.ele)
	}
})