document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded - iniciando la carga de nombres VIP');
    fetchNombresPorVip('rock');
    fetchNombresPorVip('perreo');
});



const API_BASE_URL = 'http://localhost:3000';


async function fetchNombresPorVip(vip) {
    try {
        console.log(`Iniciando la petición fetch para ${vip}`);
        const response = await fetch(`${API_BASE_URL}/getNombresPorVip/${vip}`);
        console.log(`Respuesta recibida para ${vip}:`, response);
        if (!response.ok) {
            throw new Error(`Error en la respuesta para ${vip}: ${response.statusText}`);
        }
        const nombres = await response.json();
        console.log(`Nombres recibidos para ${vip}:`, nombres);

        let container = document.createElement('div');
        container.style.fontFamily = 'impact';
        

        let currentCount = 0;
        let maxPerRow = 3;
        let row = document.createElement('div');
        
        setupRowStyle(row);
        nombres.forEach((nombre, index) => {



            let nameSpan = document.createElement('span'); // Crear el elemento span para el nombre
            nameSpan.textContent = nombre; // Establecer el contenido del span
            setupSpanStyle(nameSpan, currentCount, maxPerRow); // Aplicar estilos al span
            row.appendChild(nameSpan); 
           
            // Añadir el span a la fila actual
            currentCount++; // Incrementar el contador de elementos procesados
        
            // Agregar un punto entre nombres, excepto al final de la fila o antes de un cambio en maxPerRow
            if (index < nombres.length - 1 && (currentCount % maxPerRow) !== 0) {
                let dotSpan = document.createElement('span');
                dotSpan.textContent = '•';
                dotSpan.classList.add('text-gradient2');
                
                dotSpan.style.color = '#00E9EA';
               
                dotSpan.style.display = 'inline-block';
                row.appendChild(dotSpan);
               
                
            }
            // Verificar si es necesario iniciar una nueva fila
            if (currentCount % maxPerRow === 0) {
                if (currentCount !== 0) { // Evitar agregar una fila vacía al principio
                    container.appendChild(row); // Agregar la fila completa al contenedor
                }
                row = document.createElement('div'); // Crear una nueva fila
                setupRowStyle(row); // Aplicar estilos a la fila
        
                // Ajustar maxPerRow para la próxima fila basado en el currentCount actualizado
                if (currentCount == 3) {
                    maxPerRow = 7; 
                    row.style.marginTop = '-6px'
                    // Después de los primeros 3 elementos, la próxima fila debe tener 4
                } else if (currentCount >= 7) {
                    maxPerRow = 5; 
                    row.style.marginTop = '-4px'
                } else if (currentCount >= 10){ 
                    maxPerRow = 3;
                    row.style.marginTop = '-10px'
                    row.style.marginBottom = '-10px'
                    } 
            }
        
            
        });
        
        // Asegurarse de agregar la última fila al contenedor si no está vacía
        if (row.hasChildNodes()) {
            container.appendChild(row);
        }
        

 /*       // Llenar los espacios restantes con 'xxxxxxx' hasta completar 20
// Llenar los espacios restantes con 'xxxxxxx' hasta completar 20, pero con una bolita solo al frente del primer 'xxxxxxx'
while (currentCount < 7) {
    if (currentCount % maxPerRow === 0 && currentCount !== 0) {
        container.appendChild(row); // Agregar la fila actual antes de crear una nueva
        row = document.createElement('div');
        setupRowStyle(row);
    }
    let placeholderSpan = document.createElement('span');
    // Agregar un punto solo al primer 'xxxxxxx'
    placeholderSpan.textContent = currentCount === 0 ? '' : 'xxxxxxx';
    setupSpanStyle(placeholderSpan, currentCount, maxPerRow);
    placeholderSpan.style.fontFamily = 'Arial';
    placeholderSpan.style.color = '#CECECE';
    row.appendChild(placeholderSpan);
    row.style.marginTop = '-10px';
    maxPerRow = 3;
    currentCount++;

    // Ajuste para agregar puntos entre nombres, pero omitir para 'xxxxxxx'
    if (currentCount < 7 && (currentCount % maxPerRow) !== 0 && currentCount !== 1) { // Asegurarse de no agregar un punto inmediatamente después del primer '• xxxxxxx'
        let dotSpan = document.createElement('span');
        dotSpan.classList.add('text-gradient2');
        dotSpan.textContent = '•';
        dotSpan.style.color = '#00E9EA';
        dotSpan.style.display = 'inline-block';
        row.appendChild(dotSpan);
    }

    
} */

// Asegurarse de agregar la última fila al contenedor
if (row.hasChildNodes()) {
    container.appendChild(row);
} 

// Suponiendo que vip es una variable definida previamente
document.getElementById(vip === 'rock' ? 'rocklineup' : 'perreolineup').appendChild(container);

    } catch (error) {
        console.error('Error al obtener los nombres:', error);
    }
}

function setupRowStyle(row) {
    row.style.display = 'flex';
    row.style.flexWrap = 'nowrap';
    row.style.justifyContent = 'center';
    row.style.alignItems = 'center';
    row.style.marginBottom = '0px'; 
    
    
}

function setupSpanStyle(span, currentCount, maxPerRow, row) {
    span.style.margin = '0.1px';
    var hijos = span.querySelectorAll('*');
    span.style.display = 'inline-block';
    
    if (currentCount <= 2) {
       
        span.classList.add('text-gradient'); 
    } else if (currentCount > 2 && currentCount < 7) {
       
        span.classList.add('text-gradient2'); 
    } else if (currentCount >= 7 && currentCount < 10) {
        
        span.classList.add('text-gradient2');   
    }
    else if (currentCount >= 10) {
        hijos.forEach(function(hijo) {
            row.style.marginTop = '-10px'
            row.style.marginBottom= '-10px'
           
        });
        
        span.classList.add('text-gradient3'); 
        
    }
}