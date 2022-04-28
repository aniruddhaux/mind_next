// for pop up on page load first time


    var shadow = $('<div id="shadowElem"></div>');
    var speed = 500;
    $(document).ready(function() {
        $('body').prepend(shadow);
        $('body').css({'overflow' : 'hidden'});
    });
	
	function popup(){
    	screenHeight = $(window).height();
        screenWidth = $(window).width();
        elemWidth = $('#dropElem').outerWidth(true);
        elemHeight = $('#dropElem').outerHeight(true)
         
        leftPosition = (screenWidth / 2) - (elemWidth / 2);
        topPosition = (screenHeight / 2) - (elemHeight / 2);
         
        $('#dropElem').css({
            'left' : leftPosition + 'px',
            'top' : -elemHeight + 'px'
        });
        $('#dropElem').show().animate({
            'top' : topPosition
        }, speed);
		
		shadow.animate({
            'opacity' : 0.7
        }, speed);
		
		$('#dropClose').click( function() {
            shadow.animate({
                'opacity' : 0
            }, speed);
			$('body').css({'overflow' : 'scroll'});
            $('#dropElem').animate({
            'top' : -elemHeight + 'px'
        }, speed, function() {
                shadow.remove();
                $(this).remove();
            });
             
        });
		
	}
	
    $(window).load( function() {
		popup();
    });
	
	$(window).resize( function() {
		screenHeight = $(window).height();
        screenWidth = $(window).width();
        elemWidth = $('#dropElem').outerWidth(true);
        elemHeight = $('#dropElem').outerHeight(true)
         
        leftPosition = (screenWidth / 2) - (elemWidth / 2);
        topPosition = (screenHeight / 2) - (elemHeight / 2);
         
        $('#dropElem').css({
            'left' : leftPosition + 'px',
            'top' : topPosition + 'px'
        });
		
		
    });
	
	

