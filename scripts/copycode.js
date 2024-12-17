// Inicializa o Clipboard.js para copiar o conteúdo
var clipboard = new ClipboardJS('.copy-btn');

// Mensagem de feedback após copiar
clipboard.on('success', function(e) {
    alert('Código copiado para a área de transferência!');
});

clipboard.on('error', function(e) {
    alert('Falha ao copiar o código.');
});


