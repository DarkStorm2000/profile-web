const oldText = document.getElementById("old-text");
const newText = document.getElementById("new-text");

// هذه الدالة تقوم بإخفاء النص القديم وعرض النص الجديد
function changeText() {
  oldText.classList.add("hidden");
  newText.classList.add("hidden");
  setTimeout(() => {
    oldText.innerHTML = newText.innerHTML;
    oldText.classList.remove("hidden");
    newText.classList.remove("hidden");
  }, 8000); // زمن الانتظار في 2 ثواني
}

// استدعاء الدالة لتغيير النص عند الحاجة
changeText();


function changeText1() {
  newText.classList.add("hidden");
  oldText.classList.add("hidden");
  setTimeout(() => {
    newText.innerHTML = newText.innerHTML;
    newText.classList.remove("hidden");
    oldText.classList.remove("hidden");
  }, 8000); // زمن الانتظار في 2 ثواني
}

// استدعاء الدالة لتغيير النص عند الحاجة
changeText1();





















function responsiveDesktop() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  if (width < 768) {
    document.documentElement.classList.add("desktop");
  } else {
    document.documentElement.classList.remove("desktop");
  }
}

window.addEventListener("resize", responsiveDesktop);
responsiveDesktop();
