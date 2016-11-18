;$(function(){
	//轮播图
 	var mySwiper = new Swiper('.swiper-container', {
		width: window.innerWidth,
		pagination: '.swiper-pagination',
		autoplay: 3000,
		paginationClickable: true,
		loop: true,
	});
	
     var $eLi= $('ul.ul-li').find('li');
     var goods=$('.goods');
     var comment=$('.comment-list');
	//点击切换详情/评论
     $eLi.each(function(index){
     	var $self = $(this);
     	$self.on('singleTap',function(){
     		$self.addClass('active').siblings().removeClass('active');
     		if(index==0){
     			goods.animate({left:0},1000);
     			comment.animate({left:'100%'},1000);
     		}else if(index==1){
     			goods.animate({left:'-100%'},1000);
     			comment.animate({left:0},1000);
     		}
     	});
     });
    $(window).on('swipeLeft',function(){
    	goods.animate({left:'-100%'},1000);
		comment.animate({left:0},1000);
		$eLi.eq(1).addClass('active').siblings().removeClass('active');
    }).on('swipeRight',function(){
    	goods.animate({left:0},1000);
		comment.animate({left:'100%'},1000);
		$eLi.eq(0).addClass('active').siblings().removeClass('active');
    });
     // localStoryge
     // 按钮
     var $car=$('.payMethod');
     //读取购物车商品总数
     if(localStorage.getItem('count')){
     	total = JSON.parse(localStorage.getItem('count'));
     	$('.num').html(JSON.parse(localStorage.getItem('count')));
     }else{
     	total = parseInt($('.num').html());
     }
      // 点击的时候保存
    $car.on('singleTap',function(){
		var arr,obj={};
		if(localStorage.getItem('shoppingCar')){ //判断localStorage是否存在
			arr = JSON.parse(localStorage.getItem('shoppingCar'));   //将localStorage字符串转换成数组
			for(var i=0;i<arr.length;i++){   //遍历数组
				if(arr[i].title == $('.xinxi').find('.namee').html()){   //如果存在对应的商品对象
					arr[i].count = arr[i].count + 1;  //商品数量加1
					break; //退出循环
				}
			}
			if(i > arr.length-1){   //当数组不存在对应的对象时，创建一个对象并追加到数组的最后
      			obj ={'title':$('.xinxi').find('.namee').html(),'img':$('.swiper-wrapper').find('img').eq(0).attr('src'),'price':$('.xinxi').find('.price i').html(),'count':1};
				total++;
				$('.num').html(total);
				arr.push(obj);
			}
		}else{  //如果localStorage不存在则设置一个空数组追加对象
			arr = [];
      		obj ={'title':$('.xinxi').find('.namee').html(),'img':$('.swiper-wrapper').find('img').eq(0).attr('src'),'price':$('.xinxi').find('.price i').html(),'count':1};
			total++;
			$('.num').html(total);
			arr.push(obj);
		}
	    arr = JSON.stringify(arr);  //将数组转换为字符串
    	localStorage.setItem('shoppingCar',arr);
    	//购物车商品总数
    	localStorage.setItem('count',total);//设置本地存储
  });
    
});	



   
