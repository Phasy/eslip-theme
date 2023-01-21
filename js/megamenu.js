// MENU MOBILE ===============================================================================
// Collpsable menu mobile and tablets

	$("#megamenu-button-mobile").click(function(){
		$(".megamenu").slideToggle(400);
		$(this).toggleClass("active");
	});

// MENU DROP DOWN ====================================== //
 $(document).ready(function() {
    $(".megamenu .drop-down").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideToggle("normal");
      } else {
        $(".megamenu .drop-down-container").fadeOut("fast");
        $(this).next("div").slideToggle("slow");
		
		$("#map_1").each(function(){                         
    var embed =`<iframe width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=-15.43582712004634,%2028.342905504767725+(ESLIP)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>`;
                                $(this).html(embed);                    
   }); 
      }
    });
  });
  

// DROP DOWN MENU TABS ====================================== //
$('body').on('click', 'ul.tabs > li > a', function(e) {

    //Get Location of tab's content
    var contentLocation = $(this).attr('href');

    //Let go if not a hashed one
    if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

    }
});