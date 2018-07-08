function Head(){
	this.ele = $("#header-wrapper");
	this.init()
}
$.extend(Head.prototype, {
	init: function(){
		this.ch_nav = new H_nav(this.ele),
		this.h_logn = new Login(this.ele),
		this.h_register = new Register(this.ele)
	}
})
new Head();