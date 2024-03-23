
let nameUser = document.querySelector("#name");
let age = document.querySelector("#age");
let gander = document.querySelector("#gander");
// console.log(color);
// اختيار صورة ال avatare
const avatarInput = document.getElementById("avatarInput");
const avatarImage = document.getElementById("avatarImage");

  avatarInput.addEventListener("change", function (event) {
    const file = event.target.files[0]; // الحصول على الملف المحدد

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result;

        localStorage.setItem("img", imageUrl);

        avatarImage.style.backgroundImage = `url('${imageUrl}')`;
        avatarImage.classList.add("has-image");
      };

      reader.readAsDataURL(file); // قراءة الملف كنوع URL
    }
  });
let bodyCont = document.querySelector('.chat')
// myArray
// console.log(localStorage.getItem('users'));
let form = document.querySelector("#form-data");

function container(e) {
  e.preventDefault();
  const user = {
    name: nameUser.value,
    age: age.value,
    gender: gander.value,
    massage: massage.value,
    comment: comment.value,
  };
  storData(user); // يتم إرسال user إلى دالة storData
}

function storData(user) {
  let myArray = JSON.parse(localStorage.getItem("users")) || []; // يجب استرجاع القيمة الحالية من localStorage
  myArray.push(user);
  // console.log(myArray);
  localStorage.setItem("users", JSON.stringify(myArray));
  window.location = "./shat.html";
}
if (form) {
  form.addEventListener("submit", container); // استخدام الحدث submit للنموذج لتشغيل دالة container عند تقديم النموذج
}