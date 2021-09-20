window.onload = function () {
    if (localStorage.getItem("darkmode") === null) {
        localStorage.setItem("darkmode", "false");
    }
    else {
        if (localStorage.getItem("darkmode") === "false") {
            document.getElementById("filter").hidden = true;
        }
        else {
            document.getElementById("filter").hidden = false;
        }
    }
}

function changeMode() {
    if (localStorage.getItem("darkmode") === "false") {
        document.getElementById("filter").hidden = false;
        localStorage.setItem("darkmode", "true");
    }
    else {
        document.getElementById("filter").hidden = true;
        localStorage.setItem("darkmode", "false");
    }
}
