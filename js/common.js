

$(document).ready(function(){

    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });




    var owl = $("#owl-demo");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
    responsive:{
        0:{
          items:1
        },       
        1000:{
          items:2
        },
         1248:{
          items:3
        }
    }
     
  });


   var owl = $("#owl-demo2");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
    responsive:{
        0:{
          items:1
        },       
        1000:{
          items:2
        },
         1248:{
          items:3
        }
    }
     
  });


      var owl = $(".owl-carusel-my");
   var owl = $("#owl-demo3");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="df-left-luxe"></span>','<span class="df-right-luxe"></span>'],
    responsive:{
        0:{
          items:1
        },       
        850:{
          items:2
        },
         992:{
          items:3
        }
    }
     
  });

      var owl = $(".owl-carusel");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
    responsive:{
        0:{
          items:1
        },       
        1000:{
          items:1
        },
         1248:{
          items:1
        }
    }
     
  });

 });


