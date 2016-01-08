jQuery(function ($) {

    $('.centered').each(function (e) {
        $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
    });

    $(window).resize(function () {
        $('.centered').each(function (e) {
            $(this).css('margin-top', ($('#main-slider').height() - $(this).height()) / 2);
        });
    });


    //contact form
    var form = $('.contact-form');
    form.submit(function () {
        $this = $(this);
        $.post($(this).attr('action'), function (data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });

    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
});


      jQuery(document).ready(function(){
        $( "#miformulario" ).submit(function( event ) {
          $('#miformulario').find('.form-group').removeClass('has-error');
          $('#miformulario').find('.form-group span').text('');
          var first_name = $('[name=first_name]').val();
          var last_name = $('[name=last_name]').val();
          var email = $('[name=email]').val();
          var message = $('[name=message]').val();
          if(first_name==""){
            $('[name=first_name]').closest('.form-group').addClass("has-error");
            $('[name=first_name]').closest('.form-group').find('span').text("Debe ingresar sus nombres");
            return false;
          }
          if(last_name==""){
            $('[name=last_name]').closest('.form-group').addClass("has-error");
            $('[name=last_name]').closest('.form-group').find('span').text("Debe ingresar sus apellidos");
            return false;
          }
          if(email==""){  
            $('[name=email]').closest('.form-group').addClass('has-error');
            $('[name=email]').closest('.form-group').find('span').text("debe ingresar una direccion de correo");
            return false;
          }else{
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test(email)){
              // Do whatever if it passes.
            }else{
              $('[name=email]').closest('.form-group').addClass('has-error');
              $('[name=email]').closest('.form-group').find('span').text("debe ingresar una direccion de correo valida");
              return false;
            }
          }
          if(message==""){
            $('[name=message]').closest('.form-group').addClass("has-error");
            $('[name=message]').closest('.form-group').find('span').text("Debe ingresar mensaje");
            return false;
          }
          //return false;
        });
      })
 