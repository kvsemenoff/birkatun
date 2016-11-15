<div class="dd-test-modal">
	<a href="#log-in" name="modal" class="">00000000</a>
</div>

<div id="mask"></div>
<div id="log-in" class="window">
	<div class="dd-slide-wrap2">
		<div class="dd-close"></div>
		<div class="dd-popup-title">
			<h2>Сплав команды "Нефтегаза"</h2>
			<a href="#" class="dd-photo">26</a>
			<span class="dd-n">20 сентября 2016</span>
		</div>
		<div class="owl-carusel-my2">
			<div class="item">
				<img src="img/splav.jpg" alt="">
			</div>
			<div class="item">
				<img src="img/splav.jpg" alt="">
			</div>
			<div class="item">
				<img src="img/splav.jpg" alt="">
			</div>
		</div>	
	</div>
</div>


<script>	
	  $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        $(id).css('top',  posTop+50);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(500); 
    });

    
    $('.window .dd-close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
        $('.window').hide();
    }); 
      
    $('#mask, .an-exit__krest').click(function () {
        $('#mask').hide();
        $('.window').hide();
    }); 
</script>