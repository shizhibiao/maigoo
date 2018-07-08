// 头部导航
function Head_nav(){
	this.nh_list = $(".hn-list");
	this.hr_a2 = $(".hr-a2");
	//登录
	this.h_login = $(".h-login");
	this.click_login = $(".click-login");
	this.login_guanbi = $(".login-guanbi");
	//注册
	this.h_register = $(".h-register");
	this.click_register = $(".click-register");
	this.register_guanbi = $(".register-guanbi");
	// banner-右边点击效果
	this.crf_list_li = $(".crf-list-li");
	this.ban_con_input = $(".ban-con-input");
	this.crf_hint = $(".crf-hint");
	//banner左侧划入效果
	this.ban_nav_li = $(".ban-nav>ul>li");
	//正则判断注册登录框内容的格式
	this.login_user = $("#login-username");
	this.login_psd = $("#login-password");
	// main-top
	this.mtra_li = $(".mtra-li");
	this.mtl_nav_list = $(".mtl-nav>ul>li");
	this.mtlb_lis = $(".mtlb-list");
	// 行业投票
	this.mcllc_list_a = $(".mcllc-list-a");
	this.mcllc_ontent_ul = $(".mcllc-content>ul");


	//头条聚焦划过效果
	this.box3_left_li = $(".box3-left>ul>li");
	this.box3_right_li = $(".box3-right>ul>li");

	this.box4_list = $(".box4-list>li");

	this.mbrtl_left = $(".mbrtl-left>ul");
	this.mbrt_tab = $(".bottom-list>li");
	this.mbrtl = $(".xixi>.mbrtl");

	this.mbrt_tab_list = $(".mbrt-tab>ul>li");
	this.mbrt_list_first = $(".mbrt-list-first");


	this.init()
}
$.extend(Head_nav.prototype, {
	init: function(){
		this.nav_over(),
		this.nav_out(),
		this.over_hr_a2(),
		this.out_hr_a2(),
		this.login_guanbi_click(),
		this.click_login_a(),
		this.click_register_a();
		this.register_guanbi_click();
		this.crf_list_li_click();
		this.ban_con_input_click();
		this.ban_con_input_blur();
		this.ban_nav_li_mouseover();
		this.ban_nav_li_mouseout();
		this.mtra_li_over();
		this.mtra_li_out();
		this.mtl_nav_list_click();
		this.mcllc_list_a_click();
		this.box3_left_li_mouseover();
		this.box3_right_li_mouseover();
		this.box3_left_li_mouseout();
		this.box3_right_li_mouseout();
		this.box4_list_mouseover();
		this.mbrtl_left_mouseover();
		this.mbrt_tab_click();
		this.mbrt_tab_list_click();
	},
	// 导航移入事件
	nav_over: function(){
		this.nh_list.each($.proxy(this.over_each_nh_list, this))
	},
	over_each_nh_list: function(i){
		this.nh_list.eq(i).on("mouseover", i, $.proxy(this.over_list_i, this))
	},
	over_list_i: function(event){
		var i = event.data;
		this.nh_list.eq(i).children("div").css("display", "block");
		this.nh_list.eq(i).siblings().children("div").css("display", "none");
	},
	//导航移出事件
	nav_out: function(){
		this.nh_list.each($.proxy(this.out_each_nh_list, this))
	},
	out_each_nh_list: function(i){
		this.nh_list.eq(i).on("mouseout", i, $.proxy(this.out_list_i, this))
	},
	out_list_i: function(event){
		var i = event.data;
		this.nh_list.eq(i).children("div").css("display", "none");
	},
	// 鼠标划过a标签二维码显示
	over_hr_a2: function(){
		this.hr_a2.on("mouseover", $.proxy(this.over_proxy_hr_a2, this))
	},
	over_proxy_hr_a2: function(){
		this.hr_a2.children("img").css("display", "block")
	},
	out_hr_a2: function(){
		this.hr_a2.on("mouseout", $.proxy(this.out_proxy_hr_a2, this))
	},
	out_proxy_hr_a2: function(){
		this.hr_a2.children("img").css("display", "none")
	},
	//登录框点击显示和隐藏
	click_login_a: function(){
		this.click_login.on("click", $.proxy(this.click_login_a_proxy, this))
	},
	click_login_a_proxy: function(){
		this.h_login.css("display", "block")
	},
	login_guanbi_click: function(){
		this.login_guanbi.on("click", $.proxy(this.lg_click_proxy, this))
	},
	lg_click_proxy: function(){
		this.h_login.css("display", "none")
	},
	//注册框点击显示和隐藏
	click_register_a: function(){
		this.click_register.on("click", $.proxy(this.click_register_a_proxy, this))
	},
	click_register_a_proxy: function(){
		this.h_register.css("display", "block")
	},
	register_guanbi_click: function(){
		this.register_guanbi.on("click", $.proxy(this.lg_register_proxy, this))
	},
	lg_register_proxy: function(){
		this.h_register.css("display", "none")
	},
	// banner-右边点击效果
	crf_list_li_click: function(){
		this.crf_list_li.each($.proxy(this.crf_list_li_pro1, this))
	},
	crf_list_li_pro1: function(i){
		this.crf_list_li.eq(i).on("click", i, $.proxy(this.crf_list_li_pro2, this))
	},
	crf_list_li_pro2: function(event){
		var i = event.data;
		this.crf_list_li.eq(i).addClass("active").siblings().removeClass("active");
		this.ban_con_input.attr("placeholder", this.crf_list_li.eq(i).html())
	},
	//点击ban_con_input框，crf_hint显示
	ban_con_input_click: function(){
		this.ban_con_input.on("click", $.proxy(this.ban_con_input_proxy, this))
	},
	ban_con_input_proxy: function(){
		this.crf_hint.css("display", "block")
	},
	ban_con_input_blur: function(){
		this.ban_con_input.on("blur", $.proxy(this.ban_con_input_blur_proxy, this))
	},
	ban_con_input_blur_proxy: function(){
		this.crf_hint.css("display", "none")
	},
	//banner左侧移入移除效果
	ban_nav_li_mouseover: function(){
		this.ban_nav_li.each($.proxy(this.ban_nav_li_over_proxy1, this))
	},
	ban_nav_li_over_proxy1: function(i){
		this.ban_nav_li.eq(i).on("mouseover", i, $.proxy(this.ban_nav_li_over_proxy2, this))
	},
	ban_nav_li_over_proxy2: function(event){
		var i = event.data;
		this.ban_nav_li.eq(i).children(".below").css("display", "block");
		this.ban_nav_li.eq(i).siblings().children(".below").css("display", "none");
	},
	ban_nav_li_mouseout: function(){
		this.ban_nav_li.each($.proxy(this.ban_nav_li_out_proxy1, this))
	},
	ban_nav_li_out_proxy1: function(i){
		this.ban_nav_li.eq(i).on("mouseout", i, $.proxy(this.ban_nav_li_out_proxy2, this))
	},
	ban_nav_li_out_proxy2: function(event){
		var i = event.data;
		this.ban_nav_li.eq(i).children(".below").css("display", "none");
	},
	mtra_li_over: function(){
		this.mtra_li.each($.proxy(this.mtra_li_over_proxy1, this))
	},
	mtra_li_over_proxy1: function(i){
		this.mtra_li.eq(i).on("mouseover", i, $.proxy(this.mtra_li_over_proxy2, this))
	},
	mtra_li_over_proxy2: function(event){
		var i = event.data;
		this.mtra_li.eq(i).css("border-bottom-color", "#fff").siblings().css("border-bottom-color", "#555ba6");
	},
	mtra_li_out: function(){
		this.mtra_li.each($.proxy(this.mtra_li_out_proxy1, this))
	},
	mtra_li_out_proxy1: function(i){
		this.mtra_li.eq(i).on("mouseout", i, $.proxy(this.mtra_li_out_proxy2, this))
	},
	mtra_li_out_proxy2: function(event){
		var i = event.data;
		this.mtra_li.eq(i).siblings().css("border-bottom-color", "#fff")
	},
	mtl_nav_list_click: function(){
		this.mtl_nav_list.each($.proxy(this.mtl_nav_list_proxy1, this))
	},
	mtl_nav_list_proxy1: function(i){
		this.mtl_nav_list.eq(i).on("click", i, $.proxy(this.mtl_nav_list_proxy2, this))
	},
	mtl_nav_list_proxy2: function(event){
		var i = event.data;
		this.mtl_nav_list.eq(i).addClass("active").siblings().removeClass("active");
		this.mtlb_lis.eq(i).show().siblings().hide()
	},
	mcllc_list_a_click: function(){
		this.mcllc_list_a.each($.proxy(this.mcllc_list_a_click_proxy1, this))
	},
	mcllc_list_a_click_proxy1: function(i){
		this.mcllc_list_a.eq(i).on("click", i, $.proxy(this.mcllc_list_a_click_proxy2, this))
	},
	mcllc_list_a_click_proxy2: function(event){
		var i = event.data;
		this.mcllc_list_a.eq(i).addClass("active").parent().siblings().children("a").removeClass("active");
		this.mcllc_ontent_ul.eq(i).show().siblings().hide();
	},
	box3_left_li_mouseover: function(){
		this.box3_left_li.each($.proxy(this.box3_left_li_mouseover_proxy1, this))
	},
	box3_left_li_mouseover_proxy1: function(i){
		this.box3_left_li.eq(i).on("mouseover", i, $.proxy(this.box3_left_li_mouseover_proxy2, this))
	},
	box3_left_li_mouseover_proxy2: function(event){
		var i = event.data;
		this.box3_left_li.eq(i).children(".img").show().parent().siblings().children(".img").hide();
		this.box3_left_li.eq(i).children(".desc").children(".tit").css("font-weight", 900);
		this.box3_left_li.eq(i).children(".desc").children("p").show().parent().parent().siblings().children(".desc").children("p").hide();
		this.box3_left_li.eq(i).children(".desc").children("div").show().parent().parent().siblings().children(".desc").children("div").hide();
	},
	box3_left_li_mouseout: function(){
		this.box3_left_li.each($.proxy(this.box3_left_li_mouseout_proxy1, this))
	},
	box3_left_li_mouseout_proxy1: function(i){
		this.box3_left_li.eq(i).on("mouseout", i, $.proxy(this.box3_left_li_mouseout_proxy2, this))
	},
	box3_left_li_mouseout_proxy2: function(event){
		var i = event.data;
		this.box3_left_li.eq(i).children(".desc").children(".tit").css("font-weight", 100);
	},
	box3_right_li_mouseover: function(){
		this.box3_right_li.each($.proxy(this.box3_right_li_mouseover_proxy1, this))
	},
	box3_right_li_mouseover_proxy1: function(i){
		this.box3_right_li.eq(i).on("mouseover", i, $.proxy(this.box3_right_li_mouseover_proxy2, this))
	},
	box3_right_li_mouseover_proxy2: function(event){
		var i = event.data;
		this.box3_right_li.eq(i).children(".img").show().parent().siblings().children(".img").hide();
		this.box3_right_li.eq(i).children(".desc").children(".tit").css("font-weight", 900);
		this.box3_right_li.eq(i).addClass("active").siblings().removeClass("active")
	},
	box3_right_li_mouseout: function(){
		this.box3_right_li.each($.proxy(this.box3_right_li_mouseout_proxy1, this))
	},
	box3_right_li_mouseout_proxy1: function(i){
		this.box3_right_li.eq(i).on("mouseout", i, $.proxy(this.box3_right_li_mouseout_proxy2, this))
	},
	box3_right_li_mouseout_proxy2: function(event){
		var i = event.data;
		this.box3_right_li.eq(i).children(".desc").children(".tit").css("font-weight", 100);
	},
	box4_list_mouseover: function(){
		this.box4_list.each($.proxy(this.box4_list_mouseover_proxy1, this))
	},
	box4_list_mouseover_proxy1: function(i){
		this.box4_list.eq(i).on("mouseover", i, $.proxy(this.box4_list_mouseover_proxy2, this))
	},
	box4_list_mouseover_proxy2: function(event){
		var i = event.data;
		this.box4_list.eq(i).addClass("active").siblings().removeClass("active");
	},
	mbrtl_left_mouseover: function(){

		this.mbrtl_left.each($.proxy(this.mbrtl_left_mouseover_proxy1, this))
	},
	mbrtl_left_mouseover_proxy1: function(i){
		this.mbrtl_left.eq(i).on("mouseover", i, $.proxy(this.mbrtl_left_mouseover_proxy2, this))
	},
	mbrtl_left_mouseover_proxy2: function(event){
		var i = event.data;
		this.mbrtl_left.eq(i).addClass("active").siblings().removeClass("active");
	},
	mbrt_tab_click: function(){
		this.mbrt_tab.each($.proxy(this.mbrt_tab_click_proxy1, this))
	},
	mbrt_tab_click_proxy1: function(i){
		this.mbrt_tab.eq(i).on("click", i, $.proxy(this.mbrt_tab_click_proxy2, this))
	},
	mbrt_tab_click_proxy2: function(event){
		var i = event.data;
		this.mbrt_tab.eq(i).addClass("active").siblings().removeClass("active");
		this.mbrtl.eq(i).css("display", "block").siblings().css("display", "none");
	},
	mbrt_tab_list_click: function(){
		this.mbrt_tab_list.each($.proxy(this.mbrt_tab_list_click_proxy1, this))
	},
	mbrt_tab_list_click_proxy1: function(i){
		this.mbrt_tab_list.eq(i).on("click", i, $.proxy(this.mbrt_tab_list_click_proxy2, this))
	},
	mbrt_tab_list_click_proxy2: function(event){
		var i = event.data;
		this.mbrt_tab_list.eq(i).addClass("active").siblings().removeClass("active");
		this.mbrt_list_first.eq(i).css("display", "block").siblings().css("display", "none");
	}
})




new Head_nav()