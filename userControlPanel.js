
var userControl = function(){
        var nm = document.getElementById("username");
        var srnm = document.getElementById("password");

        if (nm.value != "" && srnm.value != ""){
            return true;
        }
        else if(nm.value == "" && srnm.value == ""){
            nm.className += "invalid";
            srnm.className += "invalid";
            return false;
        }
        else if(nm.value != "" && srnm.value == ""){
            srnm.className += "invalid";
            return false;
        }
        else if(nm.value == "" && srnm.value != ""){
            nm.className += "invalid";
            return false;
        }
} 

