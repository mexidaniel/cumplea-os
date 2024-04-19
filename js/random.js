document.getElementById('btnRandom').addEventListener('click', function() {
    shuffleNamesByStage('rock');
    shuffleNamesByStage('perreo');
});

function shuffleNamesByStage(stage) {
    const container = document.getElementById(stage + 'lineup');
    // Seleccionar todos los spans, asumiendo que todos los nombres están dentro de spans.
    const nameSpans = Array.from(container.querySelectorAll('span')).filter(span => !span.textContent.includes('•')); // Excluir elementos que contienen solo un punto.

    const shuffledNames = shuffleArray(nameSpans.map(span => span.textContent));

    // Reasignar los nombres mezclados
    nameSpans.forEach((span, index) => {
        span.textContent = shuffledNames[index];
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // intercambio de elementos
    }
    return array;
}
