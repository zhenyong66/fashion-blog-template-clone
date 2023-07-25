function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "&#10003; Liked";
}

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}