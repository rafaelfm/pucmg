window.fbAsyncInit = function() {
        FB.init({
          appId      : '1239256162797226',
          xfbml      : true,
          version    : 'v2.7'
        });
      };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src="https://connect.facebook.net/pt_BR/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
       Galleria.loadTheme('vendor/galleria/themes/folio/galleria.folio.min.js');
        Galleria.run('#galleria', {
         facebook: 'album:390027414371200',
         width: $(window).width(),
         height: $(window).height()/1.3,
         lightbox: true,
         facebookOptions: {
           max: 30, // optional override for limit of 40 photos on an album
           facebook_access_token: '1239256162797226|yGdHL3rmGFuJoa6GY580nW1k3YU'
         }
    });