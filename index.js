
/* -------------------------------- readmore -------------------------------- */
let isShow = false;

let para3 = document.getElementById("para-3");
let para2 = document.getElementById("para-2");

let readMore = document.getElementById("read-more");

readMore.addEventListener("click", function () {
    if (isShow) {
        para2.classList.add("show1");
        para3.classList.add("show1");
        readMore.innerHTML = 'Read More <i class="fa-solid fa-angles-down"></i>';
    } else {
        para2.classList.remove("show1");
        para3.classList.remove("show1");
        readMore.innerHTML = 'Read Less <i class="fa-solid fa-angles-up"></i>';
    }
    isShow = !isShow;
});

/* ---------------------------- scroll-top-button --------------------------- */
mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* ----------------------------- form-validation ---------------------------- */

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
// Defining a function to validate form 
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("contact").value;
    var subject = document.getElementById("subject").value;

    var nameErr = emailErr = contactErr = subErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("contactErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("contactErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("contactErr", "");
            contactErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate subject
    if (subject == "") {
        printError("subErr", "Please enter your email address");
    } else {
        // Regular expression for basic subject validation
        var regex = /^[a-zA-Z0-9\s.,!?'"-]{1,500}$/;
        if (regex.test(subject) === false) {
            printError("subErr", "Please enter a valid email address");
        } else {
            printError("subErr", "");
            subErr = false;
        }
    }



    // Prevent the form from being submitted if there are any errors
    if ((nameErr || contactErr || emailErr || subErr) == true) {
        return false;
    } else {
        sendToWhatsapp();
    }
};

function sendToWhatsapp() {
    let number = "+917055548936";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("contact").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/" + number + "?text="
        + "name : " + name + "%0a"
        + "email : " + email + "%0a"
        + "mobile : " + mobile + "%0a"
        + "subject : " + subject + "%0a"
        + "message : " + message + "%0a%0a";

    window.open(url, '_blank').focus();
}
