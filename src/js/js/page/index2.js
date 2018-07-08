//行业投票blist下ul动画
function Banner(obj){
	this.blist = $(".blist");
	this.blist_ul = $(".blist>ul");
	this.blist_ul_li = $(".blist>ul>li")
	this.iH = $(".blist>ul>li").height();
	this.iNow = 0;
	this.timer = null;
	
	
	
	this.init()
}
$.extend(Banner.prototype, {
	init: function(){
		this.blist_ul.css("height", this.iH*this.blist_ul_li.length);
		this.autoPlay();
		this.clear();
		this.mouseout()
	},
	autoPlay: function(){
		this.timer = setInterval($.proxy(this.autoPlay_proxy, this), 2000)
	},
	clear: function(){
		this.blist.on("mouseover", $.proxy(this.blist_mouseover, this))
		
	},
	blist_mouseover: function(){
		clearInterval(this.timer)
	},
	mouseout: function(){
		this.blist.on("mouseout", $.proxy(this.blist_mouseout, this))
	},
	blist_mouseout: function(){
		this.autoPlay()
	},
	autoPlay_proxy: function(){
		if(this.iNow == 8){
			this.iNow = 1;
			this.blist_ul.css("top", 0)
		}else{
			this.iNow++
		}
		this.toImg()
	},
	toImg: function(){
		this.blist_ul.stop(true).animate({
			top: -36*this.iNow
		})
	}
})
new Banner()

//知识课堂ajax请求json数据
new Promise(function(resolve, reject){
	$.ajax({type: "get", url: "../json/index_main.json", dataType: "json", success: function(data){
		
		var data = data.page1;


		var obj = {
			data: data
		}



		resolve(obj)
	}})
})
.then(function(obj){
	var mblBoxList_ul = $(".mbl-box-list>ul")
	var str = "";
	var data = $(obj.data);
	
	data.each(function(i){
		str += `<li>
			<a href="##" class="a_img"><img src=${data[i].img} /></a>
			<a href="##" class="a_title">${data[i].title}</a>
			<div class="center bhidden c999">
				<a href="##" class="font12 c8d99b8">${data[i].a1}</a>&nbsp;|&nbsp;
				<a href="##" class="font12 c8d99b8">${data[i].a2}</a>&nbsp;|&nbsp;
				<a href="##" class="font12 c8d99b8">${data[i].a3}</a>
			</div>
		</li>`

		mblBoxList_ul.html(str)
	})
	

})