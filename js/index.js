 $(function () {
                // Unstyled Example
                $.monte('#example1');


                // Styled Buttons Example
                // (see the CSS in the above style block)
                $.monte('#example2', {auto:false});
               

                // Callback Example
                // Format and append the HTML:
                $('#example3 > img').each(function(){
                    $(this)
                    .wrap('<div style="position:relative"/>')
                    .parent()
                    .append('<div><p>' + $(this).attr('alt') + '</p></div>');
                });
                // Hide the text on all but the center slide:
                $('#example3 div div').css({opacity: 0}).eq(0).css({opacity: 0.8});
                // Using the callbacks to reveal and hide the text:
                $.monte('#example3', {
                    auto:false,
                    callbackIn: function () {
                        $(this[0]).find('div').animate({opacity: 0.8}, 450);
                    }, 
                    callbackAway: function () {
                        $(this[0]).find('div').animate({opacity: 0}, 450);
                    }
                });
            });

         
   