function check(){
    var emailvalue = document.getElementById("email")
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        document.getElementById("email").style.borderColor = "red";
    }
    else {
        document.getElementById("email").style.borderColor = "green";
    }
    if (document.getElementById("password").value.length < 8){
        document.getElementById("password").style.borderColor = "red";
    }
    else {
        document.getElementById("password").style.borderColor = "green";
    }
    if (document.getElementById("rpassword").value != document.getElementById("password").value){
        document.getElementById("rpassword").style.borderColor = "red";
    }
    else {
        document.getElementById("rpassword").style.borderColor = "green";
    }
}
function scroll() {
                
                var grow = document.getElementById("grow");
                if (t > 2400) {
                    grow.style.transform = "scale(2, 2)";
                }
                
                var msg = document.getElementById("msg");
                if (t > 3000) {
                    msg.style.marginLeft = "0px";
                }
            }