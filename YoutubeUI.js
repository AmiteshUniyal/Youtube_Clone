let n = document.getElementById("darkmode");
const a = document.getElementById("navi");
const b = document.getElementById("nav");
const x = document.querySelector("body");
const t = document.getElementsByClassName("text");
const logoLight = document.getElementById("logoLight");
const logoDark = document.getElementById("logoDark");
const loginPage = document.getElementById("login_container");

n.addEventListener("click", function() {
    if (x.style.backgroundColor === "white") {
        x.style.backgroundColor = "rgb(26, 25, 25)";
        b.style.backgroundColor = "rgb(26, 25, 25)";
        a.style.backgroundColor = "rgb(26, 25, 25)";
        for (let i = 0; i < t.length; i++) {
            t[i].style.color = "white";
        }
        logoDark.style.display = "block";
        logoLight.style.display = "none";
    } else {
        x.style.backgroundColor = "white";
        a.style.backgroundColor = "white";
        b.style.backgroundColor = "white";
        for (let i = 0; i < t.length; i++) {
            t[i].style.color = "black";
        }
        logoLight.style.display = "block";
        logoDark.style.display = "none"; 
    }
});
const login = document.getElementById("login");
const container = document.body;
let visible = false;
login.addEventListener("click" , function() {
    if (visible) {
        loginPage.style.display = "none";
        visible = false;
    } 
    else {
        loginPage.style.display = "block";
        const submit = document.getElementById("submit");
        submit.addEventListener("click", function() {
            alert("You have successfully logged in!");
            loginPage.style.display = "none";
            visible = false;
        });
        visible = true;
    }
});

