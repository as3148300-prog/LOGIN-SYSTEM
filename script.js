function loaderanimation() {
  const tl = gsap.timeline();

  tl.from(".logincontainer", {
    y: -1000,
    duration: 2,
    ease: "power1.inOut",
  });
  tl.to(".logincontainer", {
    height: "90%",
    ease: "power1.inOut",
    duration: 0.7,
  });
  tl.to(".logincontainer", {
    height: "90%",
    width: "80%",
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.to(".logincontent", {
    opacity: 1,
    delay: 3.5,
  });
  gsap.from(".left h1", {
    ease: "power4.out",

    duration: 1,
    y: -100,
    opacity: 0,
    delay: 3.8,
  });
  gsap.from(".firstdiv", {
    ease: "power4.out",

    duration: 1.5,
    y: -200,
    opacity: 0,
    delay: 3.8,
    stagger: 0.2,
  });
  gsap.from(".left h3", {
    ease: "power4.out",

    duration: 1.5,
    y: -200,
    opacity: 0,
    delay: 3.8,
    stagger: 0.2,
  });
  gsap.from(".left button", {
    ease: "power4.out",

    duration: 1.5,
    y: -200,
    opacity: 0,
    delay: 4.3,
    stagger: 0.2,
  });
  gsap.from(".right", {
    ease: "power4.out",

    duration: 1.5,
    x: 200,
    opacity: 0,
    delay: 4.3,
    stagger: 0.2,
  });
  gsap.from(".left h4", {
    ease: "power4.out",

    duration: 1.5,
    y: -200,
    opacity: 0,
    delay: 4.3,
    stagger: 0.2,
  });
}
loaderanimation();
let alreadypass = true
let bgpassi = document.querySelector(".ri-lock-line");
let bgpass = document.querySelector("#backgroundpass");
let imail = document.querySelector(".ri-mail-fill");
let bacgroundmail = document.querySelector("#backgroundmail");
let heading = document.querySelector("#heading");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#button");
let inputdiv = document.querySelector(".inputdiv");
let h3 = document.querySelector("#h3");
let h4 = document.querySelector("#h4");
let mail = "areeb@gmail.com";
let pass = "areeb@123";
let confirmpass = document.querySelector("#confirmpassbg");
let issignup = false;
let signup = document.querySelector("#signup");

signup.addEventListener("click", function () {
  if (!issignup) {
    email.placeholder = "Enter your new email";
    password.placeholder = "Enter your new password";
    confirmpass.style.display = "block";
    signup.innerHTML = "Log in";
     alreadypass = false 
    issignup = true;
  } else {
    email.placeholder = "Email";
    password.placeholder = "Password";
    confirmpass.style.display = "none";
    signup.innerHTML = "Sign Up";
    issignup = false;
    alreadypass = true
  }
});

 
button.addEventListener("click", function () {
  if(alreadypass){
     if (email.value === mail && password.value === pass) {
    inputdiv.remove();
    button.remove();
    h3.remove();
    h4.remove();
    heading.innerHTML = "Success Thankyou so much";
    heading.style.color = "green";
  } else if (email.value !== mail && password.value === pass) {
    bacgroundmail.style.borderColor = "red";
    imail.style.color = "rgba(255, 0, 0, 0.514)";
  } else if (email.value === mail && password.value !== pass) {
    bgpass.style.borderColor = "red";
    bgpassi.style.color = "rgba(255, 0, 0, 0.514)";
  } else if (email.value !== mail && password.value !== pass) {
    bacgroundmail.style.borderColor = "red";
    imail.style.color = "rgba(255, 0, 0, 0.514)";
    bgpass.style.borderColor = "red";
    bgpassi.style.color = "rgba(255, 0, 0, 0.514)";
  }
  }else{
    mail = email.value
    pass = password.value
  }
});

 