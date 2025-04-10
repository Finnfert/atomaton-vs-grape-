document.getElementById("android").addEventListener("click", showAndroid);

function showAndroid() {
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  document.getElementById("explore").textContent = "Android Home";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("page").style.background = "#a4c93b";
  document.getElementById("apple").classList.remove("redborder");
  document.getElementById("android").classList.add("redborder");
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
  document.getElementById("explore").href = "https://www.android.com";
}

document.getElementById("apple").addEventListener("click", showApple);

function showApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  document.getElementById("explore").textContent = "Apple Home";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("page").style.font = "'Brygada 1918', serif";
  document.getElementById("page").style.background = "#b6bcca";
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
  document.getElementById("explore").href = "https://www.apple.com";
}
