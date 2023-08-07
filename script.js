document.addEventListener("DOMContentLoaded", function() {
    const codeElement = document.getElementById("arduino-code");
    const copyButton = document.getElementById("copy-button");

    copyButton.addEventListener("click", function() {
        const codeToCopy = codeElement.textContent;
        const textarea = document.createElement("textarea");
        textarea.value = codeToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Código copiado al portapapeles");
    });
});

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
