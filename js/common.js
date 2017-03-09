$(document).ready(function(){
// page1
	$('#dropA').click(function(){
		$('.touch1').css('display','none');
		$('#dropA').animate({
			marginTop:'180px'},{
			duration:1500,
			complete:function(){
				$('#dropB').animate({marginTop:'-160px'},{
					duration:1000,
					complete:function(){
						$('.p1_start').fadeIn(500);
						$('.touch2').fadeIn(500);
					}
				})
			}
	},'slow');
	});

	$('#start').click(function(){
		$('.p1_cloud').animate({
			top:'-800px'
		},{duration:2000,
		},'slow');
	$('.page1_enter').fadeOut(3000);
	});





	$('.PM').one('click',function(){
		xianrou.animate({
			right:'450px',
			top:'350px'},
			{
			duration:1000,
			complete:setTimeout("introShow(PM);page2MoveF();$('.modArrow').css('display','block');$('.pmArrow').css('display','none');",1000)
			},'slow');


		});

	$('.intro').click(function(){
		moveShow($('.intro'));
		page2Move();
		// ev.stopPropagation();

	});






	$('.MOD').one('click',function(){
		$('.ghostL').hide();
		$('.ghostR').show();	
		xianrou.animate(
			{
			marginRight:'-370px',
			marginTop:'240px'},
			{duration:1500,
			complete:function(){$('.ghostL').show();$('.ghostR').hide();}
			},'slow'
			);
		xianrou.animate(
			{
			marginRight:'0px',
			marginTop:'500px'},
			{duration:1500,
			complete:function(){$('.ghostR').show();$('.ghostL').hide();}
			},'slow'
			);
		xianrou.animate(
			{
			marginRight:'-320px',
			marginTop:'650px'},
			{duration:1500,
			complete:setTimeout("introShow(MOD);$('.admArrow').css('display','block');$('.modArrow').css('display','none');",4500)
			},'slow'
			);


	});


	$('.ADM').one('click',function(){
		$('.ghostR').hide();
		$('.ghostL').show();	
		xianrou.animate(
			{
			marginRight:'-50px',
			marginTop:'790px'},
			{duration:1300,
			complete:function(){$('.ghostR').show();$('.ghostL').hide();}
			},'slow'
			);
		xianrou.animate(
			{
			marginRight:'-320px',
			marginTop:'930px'},
			{duration:1300,
			complete:function(){$('.ghostL').show();$('.ghostR').hide();}
			},'slow'
			);

		xianrou.animate(
			{
			marginRight:'-100px',
			marginTop:'1050px'},
			{duration:1000,
			complete:setTimeout("introShow(ADM);$('.ftArrow').css('display','block');$('.admArrow').css('display','none');",4000)
			},'slow'
			);


	});


	$('.FT').one('click',function(){
		xianrou.animate(
			{
			marginRight:'150px',
			marginTop:'1200px'},
			{duration:1300,
			complete:function(){$('.ghostR').show();$('.ghostL').hide();}
			},'slow'
			);
		xianrou.animate(
			{
			marginRight:'-280px',
			marginTop:'1400px'},
			{duration:1500,
			complete:setTimeout("introShow(FT);$('.devArrow').css('display','block');$('.ftArrow').css('display','none');",2800)
			},'slow'
			);
	});

	$('.DEV').one('click',function(){
		xianrou.animate(
			{
			marginRight:'-435px',
			marginTop:'1530px'},
			{duration:1000,
			complete:function(){$('.ghostL').show();$('.ghostR').hide();}
			},'slow'
			);
		xianrou.animate(
			{
			marginRight:'-150px',
			marginTop:'1750px'},
			{duration:1500,
			complete:setTimeout("introShow(DEV);$('.touch3').show();",2500)
			},'slow'
			);
	});








});








