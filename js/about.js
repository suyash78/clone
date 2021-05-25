
function pop(i,j,k) {
    
    document.querySelector(j).style.display = "flex";

    document.querySelector(k).addEventListener('click', function () {
        document.querySelector(j).style.display = "none";
    });
}