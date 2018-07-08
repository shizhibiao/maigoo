function Login(container){
	this.container = container;
	this.init();
}

Login.Tomplate = `<div class="h-login log-reg">
			<div class="login-main lr-main">
				<div class="login-guanbi guanbi">
					<i class="iconfont icon-ego-guanbi"></i>
				</div>
				<div class="login-form">
					<form active="../php/login.php" method="get" >
						<div class="from-con">
							<label for="login-username">用户名/邮箱 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;用户名/邮箱" id="login-username" />
						</div>
						<div class="from-con lr-form">
							<label for="login-password">密码 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;密码" id="login-password" />
						</div>
						<div class="from-con lab-check">
							<label><input type="checkbox" />下次自动登录</label>
						</div>
						<button type="submit" class="btn">登陆</button>
						<a href="##" class="from-a1 font12">立即注册?</a>
						<a href="##" class="from-a2 font12">忘记密码?</a>
					</form>
				</div>
				<div class="login-other">
					<h2>第三方合作平台登录</h2>
					<ul>
						<li>
							<a href="##" class=""><i class="iconfont icon-qq1"></i>QQ账号登录</a>
						</li>
						<li>
							<a href="##" class=""><i class="iconfont icon-weibo"></i>新浪微博登录</a>
						</li>
					</ul>
				</div>
			</div>	
		</div>`

$.extend(Login.prototype, {
	init: function(){
		this.createDom()
	},
	createDom: function(){
		this.ele = $("<div></div>").append(Login.Tomplate);
		this.container.append(this.ele)
	}
})