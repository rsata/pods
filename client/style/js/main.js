$(function() {

  setTimeout(function() { 
    var w = $('.group2').css('width');
    $('.group2').css('height', w);
  }, 0.0001);  
  
});

$(window).resize(function() {
  setTimeout(function() { 
    var w = $('.group2').css('width');
    $('.group2').css('height', w);
  }, 0.0001);
});
