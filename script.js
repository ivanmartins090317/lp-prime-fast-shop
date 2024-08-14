// estratégia de carrossel responsivo:

           var larguraDaTela = window.innerWidth;
    
            // Se a largura da tela for menor que 1100px
                if (larguraDaTela < 1100) {
                    document.querySelector('.categoria-Mobile1').style.display = 'block';
                    document.querySelector('.categoria-desktop').style.display = 'none';

                    $('.fast_rotativo_header').owlCarousel({
                    
            
                            loop: true,
                            smartSpeed: 600,
                            responsiveClass: true,
                            nav: true,
                            dots:true,
                            navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
                            responsive:{ 0:{ items: 1 } },
                            margin:2,
                            dots:true,
                            autoplay: false,
                            autoplayTimeout: 0,
                            autoplayHoverPause: false
                  });
                } else {
                    document.querySelector('.categoria-desktop').style.display = 'flex';
                    document.querySelector('.categoria-Mobile1').style.display = 'none';
                  
                }
