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






function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var recipient = "f.t.tcompany667@gmail.com";
  var subject = "Website Feedback";

  var mailOptions = {
    body: message,
    from: email,
    to: recipient,
    subject: subject
  };

  var mail = new Mail(mailOptions);
  mail.send();
}

document.getElementById("submit").addEventListener("click", sendMessage);
