function onClick(){
    document.getElementById("rengar").src = "assets/rengar.png";
    alert("You have been deleted!");
}

const buttonSelector = document.querySelector('body');
buttonSelector.addEventListener('click', onClick);
