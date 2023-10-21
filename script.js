var typed = new Typed(".multiple-text", {
  strings: ["UI/UX Enthusiast", "Undergraduated Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.querySelector('input[name="Name"]').value;
    var email = document.querySelector('input[name="Email"]').value;
    var message = document.querySelector('textarea[name="Message"]').value;

    if (name.trim() === "") {
      alert("Form masih kosong");
      return;
    }
  });
});
