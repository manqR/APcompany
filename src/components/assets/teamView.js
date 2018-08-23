
var $ = require ('jquery');

export function TeamView($data){
    if($data === 'Partner'){
        $('.partner').css({
            'display' : 'block'
        });
        $('.associate').css({
            'display' : 'none'
        });        
    }else if($data === 'Associate'){
        $('.associate').css({
            'display' : 'block'
        });
        $('.partner').css({
            'display' : 'none'
        });
    }
}