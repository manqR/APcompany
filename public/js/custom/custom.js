window.onload=function(){$('.loading').show(0).delay(2000).hide(0)}

$(function(){
	
	if($('.multiscroll').length){
		$('.multiscroll').css('opacity','1').multiscroll({
            css3:true,
            menu:'nav',
            sectionSelector:'section',
            leftSelector:'article:first',
            rightSelector:'article:last',
            anchors:['home','profile','team','practice','clients','news'],
            normalScrollElements:'nav,.contact form,.profile2 div,.achievement2 div,.team2 div,.practice2 div,.clients2 div,.news-articles div'
		})
		


            
      }
      $('.practice fieldset a:first,.practice2 dd:first').addClass('active')
	
	
	$(document).on('click','.practice fieldset a',function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.practice dd[data='+$(this).attr('data')+']').addClass('active').siblings().removeClass('active')
		$('.practice div').scrollTop(0)
      })
      
      $(document).on('click','.team2 fieldset a',function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.team2 aside dd').removeClass('active')
            $('.team2 aside[data='+$(this).attr('data')+']').addClass('active').siblings().removeClass('active')
            $('.team2 div').scrollTop(0)
            $('.team h1').text($(this).text())
            $('.team h2').empty()
            $('.team span').removeClass().addClass($(this).attr('data'))
            $('.team2 div').css('background',$(this).attr('color'))
      })
      $(document).on('click','.team2 aside dd',function(){
            $('.team2 aside dd').removeClass('active')
            $(this).addClass('active')
            $('.team h1').text($(this).find('h1').text())
            $('.team h2').text($(this).find('h2').text())
            $('.team span').removeClass().addClass($(this).attr('data'))
            $('.team2 summary[data='+$(this).attr('data')+']').addClass('active').siblings('summary').removeClass('active')
            $('.team2 div').css('background',$(this).attr('color'))
      })

    $(document).on('click','.move input',function(){$('.move').remove()})

      
})