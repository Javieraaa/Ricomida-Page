const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function () {
    $("#enviarCorreo").on("click", function () {
        alert("El correo fue enviado correctamente...");
    });
});

$(document).ready(function () {
    $("h2.ingredientes, .preparacion").on("dblclick", function () {
        $(this).css("color", "red");
    });
});
$(document).ready(function () {
    $('.cardtitulo').click(function () {
        $('.card-text').toggleClass('hidden');
    });
});