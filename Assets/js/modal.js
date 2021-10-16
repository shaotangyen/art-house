var modal = document.getElementById("message-modal");
var modalContent = document.querySelector(".modal-content");
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

function renderModal(message) {
    modal.style.display = "block";

    $('h5').remove();
    var messageBody = document.createElement("h5");
    messageBody.textContent = message;
    modalContent.appendChild(messageBody);

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}