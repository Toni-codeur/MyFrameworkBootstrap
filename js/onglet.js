
var positionURL = window.location.hash;
$('.tabs').each(function() {
		var current = null;
		if( positionURL != '' && $(this).find('a[href="'+positionURL+'"]').length > 0)
		{
			current =  positionURL;
		}
		else
		{
			current = $(this).find('a:first').attr('href');
		}
		$(this).find('a[href="'+current+'"]').addClass('active');
		$(current).siblings().hide();
		$(this).find('a').click(function () {
			var link = $(this).attr('href');
			if(link == current)
			{
				return false;
			}
			else
			{
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				$(link).slideDown().siblings().slideUp();
				current = link;
			}
		});
});