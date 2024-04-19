document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos los elementos relevantes del DOM
    var vipBreezeRadio = document.getElementById('vipPerreo');
    var vipGuitarrasRadio = document.getElementById('vipRock');
    var imagen1 = document.getElementById('imagen1');
    var imagen2 = document.getElementById('imagen2');
    var divnombre = document.getElementById('nombrefinal');
    var divnombre1 = document.getElementById('divnombre1');
  
  
    // Agregamos un evento de cambio a los botones de radio
    vipBreezeRadio.addEventListener('change', function () {
      if (vipBreezeRadio.checked) {
       
        imagen1.style.display = 'block';
        imagen2.style.display = 'none';
        divnombre.style.display = 'block';
        divnombre1.style.display = 'block';
      }
    });
  
    vipGuitarrasRadio.addEventListener('change', function () {
      if (vipGuitarrasRadio.checked) {
        // Si se selecciona VIP Guitarras, mostramos la imagen 2 y ocultamos la imagen 1
        imagen1.style.display = 'none';
        imagen2.style.display = 'block';
        divnombre.style.display = 'block';
        divnombre1.style.display = 'block';
     
      }
    });
  });
  