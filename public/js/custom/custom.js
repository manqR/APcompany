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
      
      $(document).on('click','.team2 div a',function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.team2 aside dd').removeClass('active')
            $('.team2 aside[data='+$(this).attr('data')+']').addClass('active').siblings().removeClass('active')
            $('.team2 div').scrollTop(0)
            $('.team h1').text($(this).text())
            $('.team h2').empty()
            $('.team span').removeClass().addClass($(this).attr('data'))
            $('.team2 div').css('background',$(this).attr('color'))
            console.log('klik'+$(this).attr('data'));
            if($(this).attr('data') == 'apadvocates'){
                  $('#apadvocates').css({
                        'display' : 'flex',
                        'justify-content' : 'space-around'
                  });
                  $('#apconsultant').css({
                        'display' : 'none'
                  });
                  $('#tax').css({
                        'display' : 'none'
                  });
            }else if($(this).attr('data') == 'apconsultant'){
                  $('#apconsultant').css({
                        'display' : 'flex',
                        'justify-content' : 'space-around'
                  });
                  $('#apadvocates').css({
                        'display' : 'none'
                  });
                  $('#tax').css({
                        'display' : 'none'
                  });
                 
            }
            if($(this).attr('data') == 'tax'){
                  $('#tax').css({
                        'display' : 'flex',
                        'justify-content' : 'space-around'
                  });
            }
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

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.profile').css({
                  'display' : 'none'
            });
            $('.profileTxt').css({
                  'display' : 'none'
            });
            $('.practice').css({
                  'display' : 'none'
            });
            $('.clients2').css({
                  'display' : 'none'
            });
            $('.clients').css({
                  'display' : 'none'
            });
            $('#articles').css({
                  'display' : 'none'
            });
            $('.team2').css({
                  'display' : 'none'
            });
            $('.team').css({
                  'display' : 'none'
            });
            

            $(document).ready(function () {
                $(document).click(function (event) {
                    var clickover = $(event.target);
                   
                    var _opened = $(".navbar-collapse").hasClass("collapse in");                    
                    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                        $("button.navbar-toggle").click();
                    }
                });
            });
            
      }
      
})