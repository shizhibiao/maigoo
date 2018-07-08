function Register(container){
	this.container = container;
	this.init()
}

Register.Tomplate = `<div class="h-register log-reg">
			<div class="register-main lr-main">
				<div class="register-guanbi guanbi">
					<i class="iconfont icon-ego-guanbi"></i>
				</div>
				<div class="register-form lr-form">
					<form active="../php/register.php" method="get">
						<div class="from-con">
							<label for="reg-username">用户名/邮箱 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;用户名/邮箱" id="reg-username" />
						</div>
						<div class="from-con">
							<label>昵称 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;昵称" id="nickname" />
						</div>
						<div class="from-con">
							<label>密码 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;密码" id="reg-psd" />
						</div>
						<div class="from-con">
							<label for="reg-password">确认密码 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;确认密码" id="reg-password" />
						</div>
						<div class="from-con form-code">
							<label>验证码 :</label><input class="input-txt" type="text" placeholder="&nbsp;&nbsp;验证码" id="input-code" />
							<input type="text" class="input-txt" id="code" placeholder="验证码" />
						</div>
						<div class="from-place">嘻嘻</div>
						<button type="submit" class="btn">注册</button>
						<a href="##" class="from-a1 font12">已有账户，立即登录?</a>
						<a href="##" class="from-a2 font12">联系客服?</a>
					</form>
				</div>
			</div>	
		</div>`

$.extend(Register.prototype, {
	init: function(){
		this.createDom()
	},
	createDom: function(){
		this.ele = $("<div></div>").append(Register.Tomplate);
		this.container.append(this.ele)
	}
})