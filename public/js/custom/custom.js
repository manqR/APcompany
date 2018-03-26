window.onload=function(){$('.loading').show(0).delay(2000).hide(0)}

$(function(){
	
	if($('.multiscroll').length){
		$('.multiscroll').css('opacity','1').multiscroll({
            css3:true,
            menu:'nav',
            sectionSelector:'section',
            leftSelector:'article:first',
            rightSelector:'article:last',
            anchors:['home','shortcut','profile','achievement','team','practice','clients','news-articles'],
            normalScrollElements:'nav,.contact form,.profile2 div,.achievement2 div,.team2 div,.practice2 div,.clients2 div,.news-articles div'
		})
		
            var a = $('.multiscroll').length;
            console.log(a);
    }

    $(document).on('click','.move input',function(){$('.move').remove()})
})