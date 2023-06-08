$(function(){

	$('.btn').click(function(){
		$($(this).attr('data-target')).modal('show');
	});

	$('[data-dismiss="modal"]').click(function(){
		$('#' + $(this).closest('.modal').attr('id')).modal('hide');
	});

});
// Decode the content by creating a temporary element.
var openEnderContent = '&lt;p&gt;&lt;span style="color: #ff0000;"&gt;DDD&lt;/span&gt;!!!!!&lt;strong&gt;333&lt;/strong&gt;&lt;/p&gt;';

$('#open_ender_output').html(
  // create an element where the html content as the string
  $('<div/>', {
    html: openEnderContent
  // get text content from element for decoded text  
  }).text()
)

// Move inline code to an external file while using defer
// Wrap  inline code in a DOMContentLoaded event callback
// And the callback would look like
window.addEventListener('DOMContentLoaded', function() {
  $(window).scroll(function () {
    $('.scrollup')[$(window).scrollTop() > 600 ? 'fadeIn' : 'fadeOut']();
  });
  $('.scrollup').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
  });
});