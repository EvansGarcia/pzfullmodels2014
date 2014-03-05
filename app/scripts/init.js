'use strict';

$(window).scroll( function(){
        
  var Mtop = $(window).scrollTop();

  if(Mtop >=200){
    //show tab to top
    $('.bar').css('position','fixed');
    $('.bar').css('top','0');
    $('.bar').css('background','rgba(palevioletred,1)');
  }
  else{
    $('.bar').css('position','absolute');
    $('.bar').css('top','200px');
    $('.bar').css('background','rgba(palevioletred,0.9)');
  }
});