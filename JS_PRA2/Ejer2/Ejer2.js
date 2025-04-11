document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const text = e.target.result;
            displayMessages(text);
            document.getElementById('fileInput').style.display = 'none';
        };
        
        reader.readAsText(file);
    } else {
        alert('Selecciona un archivo .txt');
    }
});

function displayMessages(text) {
    const messages = text.split('\n');
    const container = document.getElementById('Mensaje');
    container.innerHTML = '';

    messages.forEach((message, index) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (index % 2 === 0) {
            messageDiv.classList.add('MensajeIzquierda');
        } else {
            messageDiv.classList.add('MensajeDerecha');
        }

        messageDiv.textContent = message.trim();
        container.appendChild(messageDiv);
    });
}
