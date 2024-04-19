document.addEventListener('DOMContentLoaded', function() {
    var telefonoInput = document.getElementById('telefonoInput');
  
    telefonoInput.addEventListener('input', function(e) {
      // Permitir solo números
      var value = this.value.replace(/[^0-9]/g, '');
      // Limitar a 8 dígitos
      if (value.length > 8) {
        value = value.slice(0, 8);
      }
      this.value = value;
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el campo de entrada por su ID
    var inputNombre = document.getElementById('nombre');
  
    // Agrega un 'event listener' para el evento 'input'
    inputNombre.addEventListener('input', function() {
        // Verifica si el texto ingresado supera los 11 caracteres
        if (inputNombre.value.length > 11) {
            // Si supera los 11 caracteres, recorta el valor a los primeros 11 caracteres
            inputNombre.value = inputNombre.value.substring(0, 11);
        }
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    var inputNombre = document.getElementById('nombre'); // Obtiene el input del nombre
    var nombreFinal = document.getElementById('nombrefinal'); // Obtiene el elemento donde se mostrará el nombre
  
    // Función que actualiza el contenido de nombreFinal con el valor actual de inputNombre
    function actualizarNombre() {
        nombreFinal.textContent = inputNombre.value;
    }
  
    // Escucha el evento de entrada en el campo de nombre y llama a actualizarNombre en cada cambio
    inputNombre.addEventListener('input', actualizarNombre);
  });
  
  
  
  function validarFormulario() {
    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value;
    var stage = document.querySelector('input[name="vipOption"]:checked');
    var telefono = document.getElementById('telefonoRegistrado').textContent;
  
  
    
  
  
    var stageelegido = stage; 
  
    
  
    // Asegúrate de que 'stage' no es null antes de intentar acceder a su propiedad 'value'
    if (nombre.trim() === '' || !stage) {
      Swal.fire({
        icon: 'error',
        html: '<span><h1 id=confirmacion >Información incompleta.</h1></span><span><h2>'
        + '¿En qué estamos?' +'</h2></span>', 
        confirmButtonColor: '#006EBA',
        confirmButtonText: 'Ay ',
        allowOutsideClick: false, 
        customClass: {
          popup: 'custom-border'
        }
        
      });
    } else {
  
  
  
     
  
      Swal.fire({
        html: '<span><h1 id=confirmacion >Agregando...</h1></span><span><h2>'
        + 'Que rico una birra...' +'</h2></span>',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
  
      fetch('http://localhost:3000/updateUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telefono: telefono,
          nombre: nombre,
          vip: stage.value, // Aquí se corrige 'stageValue' por 'stage.value'
        }),
  
        
      })
  
      
      .then(response => response.json())
      .then(data => {
        if (data.success) {
  
  
          if (stage.value === 'perreo') {
            stageelegido = 'Perreo ☼'; 
          } else {
            stageelegido = 'Rock ✩'; 
          }
          Swal.fire({
            icon: 'success',
            html: '<span><h1 id=confirmacion >¡Nuevo Artista Confirmado!</h1></span><span id=confirmacion2><h2>'
             + '<b>'+ nombre +'</b>' +'</h2></span>'+'<span id=confirmacion3>en el Stage: ' + '<b>'+ stageelegido + '</b></span>', 
             confirmButtonColor: '#006EBA',
            confirmButtonText: 'Amonosss', 
            allowOutsideClick: false, 
            customClass: {
              popup: 'custom-border'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              // Cambia la ubicación de la página y añade el hash del ID de la sección.
              window.location.href = window.location.pathname + '#lineup';
              // Recarga la página.
              window.location.reload(true);
            }
          });
        } else {
          throw new Error(data.message);
        }
      })
      .catch(error => {
        console.error('Error al actualizar el usuario:', error);
        Swal.fire({
          icon: 'error',
          html: '<span><h1 id=Error</h1></span><span><h2>'
          + 'Hubo un error al actualizar. Por favor, inténtelo nuevamente.' +'</h2></span>',
        
        });
      });
    }
  }
    
  
  document.addEventListener('DOMContentLoaded', function () {
    
    const button = document.getElementById('button-addon2');
    const telefonoInput = document.getElementById('telefonoInput');
    const formSection = document.getElementById('telefonogrup');
    const formElements = document.querySelectorAll('.form-group, .btn-listo');
    const inputGroup = document.getElementById('telefonoInput2');
  
    button.addEventListener('click', function () {
      const telefono = telefonoInput.value.trim();
  
      if (telefono === '') {
        Swal.fire({
          icon: 'warning',
          html: '<span><h1 id=confirmacion >¡Campo Vacio!</h1></span><span><h2>'
          + '¿y el teléfono papi?' +'</h2></span>', 
          confirmButtonColor: '#006EBA',
          confirmButtonText: 'Ay perdón', 
          allowOutsideClick: false, 
          customClass: {
            popup: 'custom-border'
          }
        });
        return;
      }
      document.getElementById('telefonoRegistrado').textContent = telefono;
  
  
     
  
    // Inicia el mensaje de carga
  Swal.fire({
    html: '<span><h1 id=confirmacion >Buscando...</h1></span><span><h2>'
          + 'Tengala adentro...' +'</h2></span>', 
    allowOutsideClick: false,
    
    didOpen: () => {
      Swal.showLoading();
    },
  });
  
  fetch(`http://localhost:3000/checkTelefono/${telefono}`)
  .then(response => response.json())
  .then(data => {
    // Cierra el mensaje de carga
    Swal.close();
  
    if (data.exists) {
      if (data.inLineUp) {
        Swal.fire({
          icon: 'info',
          html: '<span><h1 id=confirmacion >Im sorry</h1></span><span><h2>'
          + 'Ya estás registrado en el line up' +'</h2></span>', 
          confirmButtonColor: '#006EBA',
          confirmButtonText: 'Mirá si', 
          allowOutsideClick: false,
          customClass: {
            popup: 'custom-border'
          }
        });
      } else {
        // Agrega la clase para la animación
        formSection.classList.add('slide-down');
        formElements.forEach(element => {
          element.style.display = 'block';
          // Si también deseas animar los elementos individualmente, puedes agregar aquí la clase
          element.classList.add('slide-down');
        });
      
        inputGroup.style.display = 'none';
      
        const form20 = document.getElementById('form20');
        form20.style.display = 'block';
        form20.classList.add('slide-down'); // Asegúrate de que el CSS aplique correctamente
      }
    } else {
      Swal.fire({
        icon: 'error',
        html: '<span><h1 id=confirmacion >Opps...</h1></span><span><h2>'
          + 'Aún no has sido invitado 🥺' +'</h2></span>', 
        confirmButtonColor: '#006EBA',
        confirmButtonText: 'Maldito Mexi', 
        allowOutsideClick: false, 
        customClass: {
          popup: 'custom-border'
        }
      });
    }
  })
  .catch(error => {
    // Cierra el mensaje de carga en caso de un error
    Swal.close();
  
    console.error('Error al verificar el número de teléfono:', error);
    Swal.fire({
      icon: 'error',
  
      html: '<span><h1 id=confirmacion >Error</h1></span><span><h2>'
      + 'Parece que algo falló.' +'</h2></span>', 
    
      allowOutsideClick: false, 
    });
  })
  .finally(() => {
    // Cualquier limpieza adicional o lógica a ejecutar después de todo
  });
  
  });
  document.getElementById('button-addonAgregar').addEventListener('click', function() {
    const telefono = document.getElementById('inputTelefono1').value;
    if (!telefono) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingrese un número de teléfono.',
      });
      return;
    }
  
    Swal.fire({
      title: 'Verificando número...',
      text: 'Por favor, espere.',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  
    fetch(`http://localhost:3000/checkTelefono/${telefono}`)
      .then(response => response.json())
      .then(data => {
        Swal.close(); // Cierra el Sweet Alert de carga
  
        if (data.exists) {
          Swal.fire({
            icon: 'info',
            title: 'Número ya registrado',
            text: 'Este número de teléfono ya se encuentra en la base de datos.',
          });
        } else {
          // Confirmación para agregar el número
          Swal.fire({
            title: telefono,
            text: '¿Desea agregar este número?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, agregar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch('http://localhost:3000/agregarTelefono', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ telefono }),
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('La solicitud al servidor falló.');
                }
                return response.json(); // Solo intenta analizar como JSON si la respuesta fue exitosa.
              })
              .then(data => {
                Swal.fire({
                  icon: 'success',
                  title: 'Número agregado',
                  text: 'El número de teléfono ha sido agregado con éxito.',
                });
              })
              .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Hubo un problema al agregar el número.',
                });
              });
            }
          });
        }
      })
      .catch(error => {
        console.error('Error al verificar el número de teléfono:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al verificar el número de teléfono.',
        });
      });
  });
});

document.getElementById('button-addonBorrar').addEventListener('click', function() {
  const telefono = document.getElementById('inputTelefono1').value;
  if (!telefono) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, ingrese un número de teléfono para borrar.',
    });
    return;
  }

  // Paso 1: Sweet Alert de buscando.
  Swal.fire({
    title: 'Buscando...',
    text: 'Por favor, espere.',
    icon: 'info',
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });

  // Verificar si el número existe antes de intentar borrarlo
  fetch(`http://localhost:3000/checkTelefono/${telefono}`)
    .then(response => response.json())
    .then(data => {
      if (!data.exists) {
        Swal.fire({
          icon: 'error',
          title: 'No encontrado',
          text: 'El número de teléfono no se encuentra en la base.',
        });
      } else {
        // Paso 3: Sweet Alert de confirmación de borrado.
        Swal.fire({
          title: telefono,
          text: "¿Al chile lo borramos?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Neta Planeta',
          cancelButtonText: 'Nel Pastel'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch('http://localhost:3000/borrarTelefono', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ telefono }),
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('La solicitud al servidor falló.');
              }
              return response.json(); // Solo intenta analizar como JSON si la respuesta fue exitosa.
            })
            .then(data => {
              // Paso 4: Sweet Alert de número borrado con éxito.
              Swal.fire({
                icon: 'success',
                title: 'Borrado',
                text: 'El número de teléfono ha sido borrado con éxito.',
              });
            })
            .catch((error) => {
              console.error('Error:', error);
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al borrar el número.',
              });
            });
          }
        });
      }
    })
    .catch(error => {
      console.error('Error al verificar el número de teléfono:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al verificar el número de teléfono.',
      });
    });
});