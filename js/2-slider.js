jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 5000);
    });
    
      var slideCount = $('#slider3 ul li').length;
      var slideWidth = $('#slider3 ul li').width();
      var slideHeight = $('#slider3 ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider3').css({ width: slideWidth, height: slideHeight });
      
      $('#slider3 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider3 ul li:last-child').prependTo('#slider3 ul');
  
      function moveLeft() {
          $('#slider3 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider3 ul li:last-child').prependTo('#slider3 ul');
              $('#slider3 ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider3 ul').animate({
              left: - slideWidth
          }, 500, function () {
              $('#slider3 ul li:first-child').appendTo('#slider3 ul');
              $('#slider3 ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  