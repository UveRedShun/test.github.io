
	
	
	
	
	function cancel_click() {
		
		$( 'input#form_submit_button' ).nextAll( 'input' ).remove();
		ios_bugfix();
		
		$( 'div#confirm_field' ).css( 'display', 'none' );
		$( 'div#confirm_window' ).find( 'dl' ).remove();
		$( '#main' ).fadeIn( 'slow' );
		$( 'html, body' ).animate({
			scrollTop: $( 'form#mail_form' ).offset().top - scroll_amount
		}, 500 );
		
	}