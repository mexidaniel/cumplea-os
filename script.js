document.addEventListener('DOMContentLoaded', function () {
    // Realiza una solicitud al servidor para obtener los datos cuando la página está lista
    fetch('http://localhost:3000/getDatosTabla')
      .then(response => response.json())
      .then(data => {
        // Llena la tabla con los datos obtenidos
        fillTable(data);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  });

  
  function fillTable(data) {
    const tableBody = document.getElementById('tableBody');
    // Limpia el contenido actual de la tabla
    tableBody.innerHTML = '';

    // Itera sobre los datos y agrega filas a la tabla
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.telefono}</td>
        <td>${item.nombre}</td>
        <td>${item.vip}</td>
      `;
      tableBody.appendChild(row);
    });
  }


  function fillTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Limpia el contenido actual de la tabla

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td contenteditable="true" onBlur="updateField('telefono', this, '${item.id}')" data-original-value="${item.telefono}">${item.telefono}</td>
            <td contenteditable="true" onBlur="updateField('nombre', this, '${item.id}')" data-original-value="${item.nombre}">${item.nombre}</td>
            <td contenteditable="true" onBlur="updateField('vip', this, '${item.id}')" data-original-value="${item.vip}">${item.vip}</td>
        `;
        tableBody.appendChild(row);
    });
}



function updateField(fieldName, element, id) {
  const newValue = element.innerText; // Nuevo valor introducido por el usuario
  const originalValue = element.getAttribute('data-original-value'); // Valor original antes de la edición

  // Si el valor no ha cambiado, no hacer nada
  if (newValue === originalValue) return;

  Swal.fire({
    title: '¿Estás seguro?',
    text: `Deseas cambiar "${originalValue}" por "${newValue}"`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cambiarlo!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Si el usuario confirma, enviar la solicitud de actualización
      fetch(`http://localhost:3000/updateField`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, fieldName, newValue }),
      })
      .then(response => response.json())
      .then(data => {
          // Si la actualización es exitosa, mostrar otra alerta y actualizar el valor original
          Swal.fire('Actualizado!', 'El campo ha sido actualizado.', 'success');
          element.setAttribute('data-original-value', newValue); // Actualizar el valor original al nuevo valor
      })
      .catch((error) => {
          console.error('Error:', error);
          // En caso de error, mostrar una alerta de error
          Swal.fire('Error!', 'No se pudo actualizar el campo.', 'error');
      });
    } else {
      // Si el usuario cancela, revertir el valor mostrado al original
      element.innerText = originalValue;
    }
  });
}







  // Función para actualizar el temporizador
  function updateCountdown() {
    var currentDate = new Date();
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 28);
    targetDate.setHours(4, 0, 5);

    var timeDifference = targetDate - currentDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = days + ' días ' + hours + ' horas ' + minutes + ' minutos ' + seconds + ' segundos';

    // Actualizar cada segundo
    setTimeout(updateCountdown, 1000);
  }

  // Llamar a la función para iniciar el temporizador
  updateCountdown();