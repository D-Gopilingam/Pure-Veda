//Login form hide or display

var pointerBan = document.querySelector('.pointer-event');
var loginform = document.querySelector('.wrapper');
var loginButton = document.getElementById("buttonlogin");
var homeimage = document.querySelector(".carousel-container");

loginButton.addEventListener('click', () => {
    if (loginform.style.display === 'none' || loginform.style.display === '') {
        OpenLoginForm();
    }
});

function OpenLoginForm() {
    homeimage.style.filter = "blur(10px)";
    loginform.style.display = "flex";
    pointerBan.style.pointerEvents = "none";
    loginform.style.pointerEvents = "auto";
}


//Login Form

const inputElements = document.querySelectorAll('.login-label');

inputElements.forEach(inputElement => {
    inputElement.addEventListener('focus', () => {
        inputElement.nextElementSibling.style.top = '-5%';
        inputElement.nextElementSibling.style.fontWeight = 'bold';
    });

    inputElement.addEventListener('blur', () => {
        if (inputElement.value === '') {
            inputElement.nextElementSibling.style.top = '50%';
            inputElement.nextElementSibling.style.fontWeight = 'normal';
        }
    });
});


//Animate a login panda


const image = document.querySelector('.toy-animate-image');

const passlabel = document.querySelector('.animate-image');

var imgurl = "images/eye close.svg";

passlabel.addEventListener('keydown', () => {
    image.src = imgurl;
});

passlabel.addEventListener('keyup', () => {
    image.src = "images/eye open.svg";
});


//cancel login form
var cancel = document.querySelector('.icon-close');

cancel.addEventListener('click', () => {
    loginform.style.display = "none";
    homeimage.style.filter = "none";
    pointerBan.style.pointerEvents = "auto";
});
cancel.addEventListener('click', () => {
    inputElements.forEach(inputElement => {
        inputElement.remove();
        if (inputElement === '') {
            inputElement.nextElementSibling.style.top = '50%';
            inputElement.nextElementSibling.style.fontWeight = 'normal';
        }
    });
});


//Login Form Success

const successlogin = document.querySelector(".login-form-button");

successlogin.addEventListener("click", () => {
    alert("Login Successfully!..");
    cancel.addEventListener('click', () => {
        loginform.style.display = "none";
        homeimage.style.filter = "none";
        pointerBan.style.pointerEvents = "auto";
    });
});


//Register form hide or display

const reg_form = document.querySelector('.register-link');
const regWrapperForm = document.querySelector('.regwrapper');
const log_form = document.querySelector('.login-link');

reg_form.addEventListener('click', () => {
    if (regWrapperForm.style.display === 'none' || regWrapperForm.style.display === '') {
        OpenRegForm();
    }
});

log_form.addEventListener('click', () => {
    if (loginform.style.display === 'none' || loginform.style.display === '') {
        OpenLogForm();
    }
});

function OpenRegForm() {
    loginform.style.display = "none";
    homeimage.style.filter = "blur(10px)";
    regWrapperForm.style.display = "flex";
    pointerBan.style.pointerEvents = "none";
    regWrapperForm.style.pointerEvents = "auto";
}

function OpenLogForm() {
    regWrapperForm.style.display = "none";
    loginform.style.display = "flex";
    homeimage.style.filter = "blur(10px)";
    pointerBan.style.pointerEvents = "none";
    loginform.style.pointerEvents = "auto";
}

//Register Form

const reginputElements = document.querySelectorAll('.reg-label');

reginputElements.forEach(inputElement => {
    inputElement.addEventListener('focus', () => {
        inputElement.previousElementSibling.style.top = '-5%';
        inputElement.previousElementSibling.style.fontWeight = 'bold';
    });

    inputElement.addEventListener('blur', () => {
        if (inputElement.value === '') {
            inputElement.previousElementSibling.style.top = '50%';
            inputElement.previousElementSibling.style.fontWeight = 'normal';
        }
    });
});

//cancel Register form
const regcancel = document.querySelector('.reg-icon-close');
const regform = document.querySelector('.regwrapper');

regcancel.addEventListener('click', () => {
    regform.style.display = "none";
    homeimage.style.filter = "none";
    pointerBan.style.pointerEvents = "auto";
});
cancel.addEventListener('click', () => {
    inputElements.forEach(inputElement => {
        inputElement.remove();
        if (inputElement === '') {
            inputElement.nextElementSibling.style.top = '50%';
            inputElement.nextElementSibling.style.fontWeight = 'normal';
        }
    });
});


//Register Form Success

const successRegister = document.querySelector(".reg-form-button");

successRegister.addEventListener("click", () => {
    alert("Registration Successfully!..");
    OpenLogForm();
});


//image carousel

var imageurl = document.getElementById("slide");
var buttons = document.querySelectorAll(".img-button");

var images = [
    "images/home1.jpg",
    "images/home2.jpg",
    "images/home3.jpg",
    "images/home4.jpg",
    "images/home5.jpg",
];

var currentImageIndex = 0;

function changeImage() {
    imageurl.src = images[currentImageIndex];
    buttons[currentImageIndex].checked = true;
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
}

setInterval(changeImage, 2000);

//Radio Button Image Curousel

buttons.forEach((button, index) => {
    button.addEventListener("change", () => {
        setTimeout(() => {
            imageurl.src = images[index];
        }, 2000);
    });
});


//Add a cart Successfull & Hover Effect

const cartButtons = document.getElementsByClassName("cart-box");
const carturl = document.getElementsByClassName("cart-image");

for (let i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', () => {
        carturl[i].src = "images/cartdark.svg";
        alert("Product Added in to Cart Successfully!..");
    });
}


//Contact Hover Blur Effect

const contactBoxes = document.querySelectorAll('.contact');

contactBoxes.forEach(contactBox => {
    contactBox.addEventListener('mouseenter', () => {

        contactBoxes.forEach(otherContactBox => {
            if (otherContactBox !== contactBox) {
                otherContactBox.style.filter = 'blur(5px)';
            }
        });
    });

    contactBox.addEventListener('mouseleave', () => {

        contactBoxes.forEach(otherContactBox => {
            otherContactBox.style.filter = 'none';
        });
    });
});


//Contact Box Click Event

const mapUrls = [
    "https://maps.app.goo.gl/QJCmvE4whVe1EZ58A",
    "https://maps.app.goo.gl/naRConQLRsKViZEZ9",
    "https://maps.app.goo.gl/Gdi71AHYzeQEo5ep7",
    "https://maps.app.goo.gl/LFg5fuSbm674Fy1R7"
];

contactBoxes.forEach((singlebox, index) => {
    singlebox.addEventListener('click', () => {
        window.open(mapUrls[index]);
    });
});


//Up Scroll Event for go to Top of the Page

var arrow = document.querySelector(".up-arrow");

window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
});