

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const projectContent = this.nextElementSibling;
            projectContent.classList.toggle("project-content");
            if (projectContent.classList.contains("project-content")) {
                this.textContent = "Abrir";
            } else {
                this.textContent = "Cerrar";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const copyButton1 = document.getElementById("copy-button-1");
    const copyButton2 = document.getElementById("copy-button-2");

    copyButton1.addEventListener("click", function() {
        const codeElement1 = document.getElementById("arduino-code-1");
        const codeToCopy1 = codeElement1.textContent;
        const textarea = document.createElement("textarea");
        textarea.value = codeToCopy1;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Código copiado al portapapeles");
    });

    copyButton2.addEventListener("click", function() {
        const codeElement2 = document.getElementById("arduino-code-2");
        const codeToCopy2 = codeElement2.textContent;
        const textarea = document.createElement("textarea");
        textarea.value = codeToCopy2;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Código copiado al portapapeles");
    });

    
    // Repite este bloque para cada sección adicional si es necesario
});

