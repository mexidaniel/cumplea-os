



document.addEventListener('DOMContentLoaded', function() {

    var botonGuitarras = document.getElementById('btnGuitarras');
    var botonBreeze = document.getElementById('btnBreeze');

    var mostrandoGuitarras = false;
    var mostrandoBreeze = false;

    botonGuitarras.addEventListener('click', function() {
        var divAOcultar = document.querySelector('#perreolineup');
        var elementoCierre = document.querySelector('#cierre');
        var elementoCierreg = document.querySelector('#cierreg');
        var divguitarras = document.querySelector('#rocklineup');
        var divguitas = document.querySelector('.white-square');
        var divbreeze = document.querySelector('.white-square2');
        var open2 = document.querySelector('.image-container2');
        var open1 = document.querySelector('#open1');
        var botonb = document.querySelector('#btnBreeze');
        var lineup = document.querySelector('#titleform2');
    
     
        if (!mostrandoGuitarras) {
       
            divAOcultar.style.display = 'none';
            open2.style.display ='none';
            open1.style.display ='block';
            elementoCierreg.style.marginTop = '-1px';
            elementoCierre.style.display ='none';
            divbreeze.style.display ='none';
            elementoCierreg.style.display ='block';
            this.style.color = 'black';
            this.style.background = '#00E9EA';
            this.style.border= '1px solid black';
            botonb.style.color ='gray ';
            botonb.disabled = true;
            botonb.style.border= '1px solid gray';
            mostrandoGuitarras = true; 
            


        } else {
            divAOcultar.style.display = 'block';
            botonb.disabled = false;
            elementoCierreg.style.marginTop = '-1px';
            elementoCierre.style.display ='block';
            elementoCierreg.style.display ='none';
            divbreeze.style.display ='block';
            divguitarras.style.display ='block';
            divguitas.style.display = 'block';
            this.style.color = '#00E9EA';
            this.style.background = 'black';
            this.style.border= '1px solid #00E9EA';
            botonb.style.color ='#00E9EA ';
            botonb.style.border ='1px solid #00E9EA ';
            lineup.style.background = 'black';
            botonb.disabled = false;
            mostrandoGuitarras = false; 
        }
    });

    // Añade un evento de clic al botón
    botonBreeze.addEventListener('click', function() {
        // Encuentra el div a ocultar por su clase
        var divAOcultar = document.querySelector('#rocklineup');
        var divguitas = document.querySelector('.white-square');
        var open1 = document.querySelector('#open1');
        var elementoCierre = document.querySelector('#cierre');
        var  divbreeze = document.querySelector('.white-square2');
        var breeze = document.querySelector('#perreolineup');
        var elementoCierre = document.querySelector('#cierreg');
        var botong = document.querySelector('#btnGuitarras');
        var lineup = document.querySelector('#titleform2');
        var open2 = document.querySelector('.image-container2');
        var cierre = document.querySelector('#cierre');


        if (!mostrandoBreeze) {

        elementoCierre.style.display ='none';
        divAOcultar.style.display = 'none';
        divguitas.style.display = 'none';
        open1.style.display = 'none'
        divbreeze.style.display ='block';
        divbreeze.style.background = 'linear-gradient(to bottom, #2D418E 30%, #A02A82)';
        lineup.style.background = 'linear-gradient(to bottom, black 30%, #000038)';
        breeze.style.display ='block';
        breeze.style.color ='block';
        open2.style.display ='block';
        cierre.style.display = 'block';
        cierreg.style.display = 'none';
        this.style.color = 'black';
        this.style.background = '#00E9EA';
        this.style.border= '1px solid black';
        botong.style.color ='gray ';
        botong.disabled = true;
        botong.style.border= '1px solid gray';
        mostrandoBreeze = true; 
        

        }else{
            divguitas.style.display = 'block';
            open1.style.display = 'block'
            open2.style.display = 'none'
            lineup.style.background = 'black';
            divguitas.style.display = 'block';
            divAOcultar.style.display = 'block';
            botong.style.color ='#00E9EA ';
            botong.style.border ='1px solid #00E9EA ';


            this.style.color = '#00E9EA';
            this.style.background = 'black';
            this.style.border= '1px solid #00E9EA';

            mostrandoBreeze = false; 
            botong.disabled = false;






        }

        
    });

}); 



document.getElementById('btnRandom').addEventListener('click', function() {
    this.classList.add('vibrate');

    // Opcional: eliminar la clase después de que la animación se complete
    // para permitir vibraciones futuras en nuevos clics.
    setTimeout(() => {
      this.classList.remove('vibrate');
    }, 500); // Asegúrate de que este tiempo coincida con la duración de tu animación
  });

