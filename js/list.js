;$(function(){
	
	var allList = $('.list-brand li');
	var $allUl = $('ul.allUl');
	var $ediv =$('.list-Img');

	// 点击显示对应的rightt
	allList.on('singleTap',function(){
		var index=$(this).index();
		
		$(this).addClass('active').siblings().removeClass('active');
		
	});

	var dex = 0;
	allList.on('singleTap',function(){
		// 初始化
		
		$.ajaxSetup({
			url:'../data/liebiao1.json',
			type:'get',
			dataType:'json',
			async:true,
			success:function(res){
				$allUl.eq(0).find('img').attr({src:res[dex].imgurl});
				$allUl.eq(0).find('p').text(res[dex].name);
				
				$allUl.eq(1).find('img').attr({src:res[dex+1].imgurl});
				$allUl.eq(1).find('p').text(res[dex+1].name);
				
				dex++;
				if(dex>=res.length-1){
					dex=0;
				}
			}
		});
		// 请求
		$.ajax();
		
	});

});