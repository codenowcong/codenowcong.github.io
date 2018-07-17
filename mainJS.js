//get modal element
var modal = document.getElementById("modalBox");

//get open modal button
var modalBtn = document.getElementById("modalBtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];



//listen for open click
modalBtn.addEventListener("click", openModal); //openModal is our function to open modal

//listen for close click
closeBtn.addEventListener("click", closeModal); //closeModal is our function to close the modal

//listen for outside click
window.addEventListener("click", outsideClick);

//function to open modal
function openModal(){
    modal.style.display = "block";
}

//function to close modal
function closeModal(){
    modal.style.display = "none";
}

//function to close modal
function outsideClick(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
