function c(x) {
    switch (x) {
        case "ac":
            document.getElementById("inp").value = "";
            break;

        case "c":
            var str = document.getElementById("inp").value;
            str = str.substr(0, str.length - 1);
            document.getElementById("inp").value = str;
    }
}
