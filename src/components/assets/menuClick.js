

var $ = require ('jquery');

function showLoading(){
    $('.loading').show(0).delay(500).hide(0);
}
export function menuClick(link){
    //$('a').on('click' , function(){
  //var link = $(this).attr('href');
    
    if(link === '#home'){
                        
        showLoading();

        $('.profileMob').css({
            'display' : 'none'
        });
        $('.practiceMob').css({
            'display' : 'none'
        });
        $('.home').css({
            'display' : 'block'
        });
    
    }
    if(link === '#profile'){
        showLoading();

        $('.home').css({
            'display' : 'none'
        });
        $('.practiceMob').css({
            'display' : 'none'
        });
        $('.news').css({
            'display' : 'none'
        });
        $('.clientsMob').css({
            'display' : 'none'
        });
        $('.profileMob').css({
            'display' : 'block',
            'width': '200%'
        });
    
    }
    if(link === '#practice'){
        showLoading();

        $('.profileMob').css({
            'display' : 'none'
        });
        $('.home').css({
            'display' : 'none'
        });
        $('.news').css({
            'display' : 'none'
        });
        $('.clientsMob').css({
            'display' : 'none'
        });
        $('.practiceMob').css({
            'display' : 'block',
            'width': '200%'
        });
    
    }
    if(link === '#clients'){
        showLoading();

        $('.profileMob').css({
            'display' : 'none'
        });
        $('.practiceMob').css({
            'display' : 'none',                              
        });
        $('.home').css({
            'display' : 'none',                              
        });
        $('.news').css({
            'display' : 'none',                              
        });
        $('.clientsMob').css({
            'display' : 'block',
            'width': '200%',
            'height': '100%',
            'overflow': 'scroll'                              
        });
    
    }
    if(link === '#news'){
        showLoading();

        $('.profileMob').css({
            'display' : 'none'
        });
        $('.practiceMob').css({
            'display' : 'none',                              
        });
        $('.home').css({
            'display' : 'none',                              
        });
        $('.clientsMob').css({
            'display' : 'none',                              
        });
        $('.newsEventMob').css({
            'display' : 'block',
            'width': '200%',
            'height': '100%',
            'overflow': 'scroll'
        });
    
    }
}
         