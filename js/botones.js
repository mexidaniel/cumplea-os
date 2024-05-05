



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
        var open3 = document.querySelector('#open3');
        var botonb = document.querySelector('#btnBreeze');
        var lineup = document.querySelector('#titleform2');
    
     
        if (!mostrandoGuitarras) {
       
            divAOcultar.style.display = 'none';
            open2.style.display ='none';
            open1.style.display ='none';
            open3.style.display ='block';
            elementoCierreg.style.marginTop = '-1px';
            divbreeze.style.display ='none';
            elementoCierre.style.display ='none';
            elementoCierreg.style.display ='block';
            this.style.color = 'black';
            this.style.background = '#FBD84';
            this.style.border= '1px solid black';
            botonb.style.color ='#979797 ';
            botonb.style.background ='#D8D8D8';
           
            botonb.style.border= '1px solid gray';
            botonb.disabled = true;
            divguitas.style.background = 'linear-gradient(to bottom, #273983 30%, #4C2B51)';
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
            this.style.color = '#37448D';
            this.style.background = '00BFF9';
            this.style.border= '2px solid black';
            botonb.style.color ='#37448D ';
            botonb.style.border ='2px solid black';
            botonb.style.background ='#00BFF9';
           
            botonb.disabled = false;
            mostrandoGuitarras = false; 
            open1.style.display ='block';
            open3.style.display ='none';
            divguitas.style.background = '#469BDC';
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
        var cierrep =  document.querySelector('#cierrep');
        var open2 = document.querySelector('.image-container2');
        var cierre = document.querySelector('#cierre');


        if (!mostrandoBreeze) {

        elementoCierre.style.display ='none';
        divAOcultar.style.display = 'none';
        divguitas.style.display = 'none';
        open1.style.display = 'none'
        divbreeze.style.display ='block';
        divbreeze.style.background = 'linear-gradient(to bottom, #623454 30%, #B87161)';
        lineup.style.background = 'linear-gradient(to bottom, black 30%, #000038)';
        breeze.style.display ='block';
        breeze.style.color ='block';
        open2.style.display ='block';
        cierre.style.display = 'none';
        cierrep.style.display = 'block';
        cierreg.style.display = 'none';
        this.style.color = 'black';
        this.style.border= '1px solid black';
        botong.style.color ='#979797 ';
        botong.style.background ='#D8D8D8';
        botong.style.border= '1px solid gray';
        botong.disabled = true;
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
            cierre.style.display = 'block';
        cierrep.style.display = 'none';
        divbreeze.style.background = 'linear-gradient(to bottom, #469BDC, #ED786B 60%)';

        this.style.color = '#37448D';
        this.style.background = '00BFF9';
        this.style.border= '2px solid black';
        botong.style.color ='#37448D ';
        botong.style.border ='2px solid black';
        botong.style.background ='#00BFF9';

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

