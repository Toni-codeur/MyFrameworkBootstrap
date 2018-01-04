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

//info bulle
$(document).ready(function () {
	$('.tooltip a').hover(function () {
		$(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
	});
	$('.tooltip button').hover(function () {
		$(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
	});
});
//alert 
$(function() {
    $('.page-alert').hide();
    //AFFICHE ALERT
    $('button[data-toggle="page-alert"]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('data-toggle-id');
        var alert = $('#alert-' + id);
        var timeOut;
        alert.appendTo('.page-alerts');
        alert.slideDown();
        
       //fermetur auto alert
        var delay = $(this).attr('data-delay');
        if(delay != undefined)
        {
            delay = parseInt(delay);
            clearTimeout(timeOut);
            timeOut = window.setTimeout(function() {
                    alert.slideUp();
                }, delay);
        }
    });
    
    //FERMETUR alert
    $('.page-alert .close').click(function(e) {
        e.preventDefault();
        $(this).closest('.page-alert').slideUp();
    });
    
    //ENLEVER TOUTE LES ALERTE 
    $('.clear-page-alerts').click(function(e) {
        e.preventDefault();
        $('.page-alert').slideUp();
    });
});

//navbar
var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;			

$('button').click(function(e) {
	e.preventDefault();
	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

$(overlay).click(function(e) {
	e.preventDefault();
	this.parentNode.classList.remove(activatedClass);
});
//popin
	function openModal()
	{
		$('#myModal').css("top", "0px");
	}
	function closeModal()
	{
		$('#myModal').css("top", "-380px");
	}
