
            function NavBarVoltar() {
                window.history.back()
            }



            function NavBarAvançar() {
                window.history.forward()
            }



            function playSound() {
              const audio = document.getElementById('somMouse');
              audio.pause(); // Pausa o áudio anterior, se estiver sendo reproduzido
              audio.currentTime = 0; // Reinicia o áudio para garantir que seja reproduzido novamente
              audio.play();
            }


          
            function playSoundHome() {
              const audio = document.getElementById('somHome'); // Som quando passar o mouse
              audio.pause(); // Pausa o áudio anterior, se estiver sendo reproduzido
              audio.currentTime = 0; // Reinicia o áudio para garantir que seja reproduzido novamente
              audio.play();
            }
            
          

          

          
            function playSoundVoltar() {
              const audio = document.getElementById('somVoltar'); // Som quando passar o mouse
              audio.pause(); // Pausa o áudio anterior, se estiver sendo reproduzido
              audio.currentTime = 0; // Reinicia o áudio para garantir que seja reproduzido novamente
              audio.play();
            }
            
          

         

          
            var audio = document.getElementById("meuAudio");
            var isMudo = false; // Variável para controlar o estado de mudo
            
            function alternarMudo() {
                var botao = document.getElementById("botaoMudo");
                var icone = document.getElementById("iconeMudo");
            
                if (isMudo) {
                    audio.muted = false; // Se estiver em mudo, reativa o áudio
                    isMudo = false;
                    icone.src = "imagens/imagens-nav-bar/som_ativo.png" // Altera a imagem do botão para som ativo
                    icone.alt = "Som ativo";
                } else {
                    audio.muted = true; // Se não estiver em mudo, silencia o áudio
                    isMudo = true;
                    icone.src = "imagens/imagens-nav-bar/som_desativado"; // Altera a imagem do botão para som em mudo
                    icone.alt = "Som em mudo";
                }
            }









            let slideIndex = 1;
            showSlides(slideIndex);
            
            // Next/previous controls
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            // Thumbnail image controls
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";
              dots[slideIndex-1].className += " active";
            }
            