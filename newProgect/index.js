
let massage = document.querySelector("#massage");
let comment = document.querySelector("#comment");
let button = document.querySelector(".button-send"); // تعديل هنا لاستهداف الزر بشكل صحيح
let changColor = document.querySelector(".color-chang");

let inpColor = document.querySelector(".inp-color");

const myArray = [];
const arrayMyColor = ['#A569BD','#8E44AD','#3498DB','#239B56','#D68910','#D0D3D4','#CB4335','#EC7063','#F8C471','#F1948A','#5D6D7E', '#3498DB','#0080ff	', '#E74C3C ', '#2ECC71', '#F4D03F', '#F39C12', '#BDC3C7', '#B2BABB', '#566573', '#FF00FF	', '#A569BD	', '#CD6155', '#EC7063	', '#5499C7	', '#008080	'];
const colors=arrayMyColor[Math.floor(Math.random() * arrayMyColor.length)]
const root = document.documentElement;




root.style.setProperty(`--main-color `, colors);
let colorText = changColor.value;



// الرسائل
let inputMassage = document.querySelector(".inp-massage");
let butSand = document.querySelector(".but-sand");
let bodyChat = document.querySelector(".massages");

let getImg = localStorage.getItem("img");
let getData = JSON.parse(localStorage.getItem("users"));



if (butSand) {
  butSand.addEventListener("click", () => {
    let divMassage = document.createElement("div");
    let cont = document.createElement("div");
    let grad = document.createElement("div");
    let icon = document.createElement("span");
    let pMassage = document.createElement("p");
    let sAvatar = document.createElement("span");
    let name = document.createElement("span");
    icon.innerHTML = `<i class="fa-solid fa-ban"></i><br/> <i class="fa-solid fa-play"></i>`;
    icon.style.margin = '5px';
    let img = document.createElement("img");
    divMassage.className = "cont-massage";
    grad.classList = " grd";
    grad.style.backgroundColor= colors;
    pMassage.className = "pMassage";
    sAvatar.className = "avatar";
    img.src = getImg;
    icon.className="icon-mm"
    name.append(document.createTextNode(getData[0].name + ":"));
    pMassage.append(document.createTextNode(inputMassage.value));

    sAvatar.appendChild(img);

    divMassage.appendChild(sAvatar);
    cont.appendChild(name);
    cont.appendChild(icon);
    grad.appendChild(cont);
    grad.appendChild(pMassage);
    divMassage.appendChild(grad);
    bodyChat.appendChild(divMassage);
 


    
    if (inputMassage.value) {
    
      inputMassage.value = "";
    }

    let avatarShat = document.querySelector('.cont-massage .avatar')
if (avatarShat) {

  avatarShat.addEventListener('click', () => {
 
    createContainer.classList.add("show-all")
  });
};
  });
}

// تغيير الالوان
let optionColor = document.querySelector(".chang-color");
let listColor = document.querySelector(".colors");

optionColor.addEventListener("click", () => {
  listColor.classList.toggle("show-all");
});

// -------------
let fre = document.querySelector(".mim");



if (getData !== null && typeof  getData !== undefined) {
  // تنفيذ map() إذا لم تكن myVariable null أو undefined


  getData.map((e) => {
    let contF = document.createElement("div");
    let ava = document.createElement("img");
    let name = document.createElement("span");
    let cant = document.createElement("span");
    contF.className = "person";

    ava.src = getImg;
    name.append(e.name);
    cant.append("api");

    contF.appendChild(ava);
    contF.appendChild(name);
    contF.appendChild(cant);

    fre.appendChild(contF);
  });

// app
let body = document.querySelector(".cont-use-list");
let mass = document.querySelector(".add-all");
let useList = document.querySelector(".users-list");
let listDay = document.querySelector(".list-day");
let contList = document.querySelector(".list-option");
let listAdd = document.querySelector(".mim");
let divLists = document.createElement("div");

const tt = `<div class="container"> 
<div><i class="fa-light fa-newspaper" ></i>  <p  style=" display:inline; color:black;">منشورات</p></div>
<div><i class="fa-solid fa-display" ></i> <p  style=" display:inline; color:black;">تغيير التصميم</p></div>

<div> <i class="fa-brands fa-android" ></i> <p  style=" display:inline; color:black;">تطبيق الجوال</p></div>
<div  ><i class="fa-solid fa-headset" ></i>  <p  style=" display:inline; color:black;">التواصل مع الادارة</p></div>
<div><i class="fa-solid fa-ban" ></i>  <p  style=" display:inline; color:black;">قائمة الحظر</p></div>
<div><i class="fa-solid fa-plus" ></i>  <p  style=" display:inline; color:black;">المزيد</p></div>

<hr style="width:100%;" />
<div class="set" >
<i class="fa-solid fa-user-tie"></i>
<p  style=" display:inline; color:black;">الادارة</p>
</div>
</div>`;


mass.addEventListener("click", () => {
  listAdd.classList.toggle("show-all");
  listAdd.classList.toggle("flexes");
});

useList.addEventListener("click", () => {
  listAdd.classList.toggle("show-all");
});

divLists.classList = "add-lists";
listDay.addEventListener("click", () => {
  divLists.style.left = 0;
  divLists.innerHTML = tt;
  contList.appendChild(divLists);
  divLists.classList.toggle("show-all");
  let set = document.querySelector('.set');

  let setOption = document.createElement('div');
  setOption.classList = 'dis'
  let setList = `
  <div class="set-list">
  <i class="fa-solid fa-xmark exit " style="width:100%; background-color:#176483; "></i>
<div class="heade-set" >

<span>صاحب الدردسة</span>
<span>ادارة عامة</span>
<span>مسؤل</span>
<span>سوبر</span>
<span>مراقب</span>
<span>مميز</span>
</div>
</div>
` ;
setOption.innerHTML = setList;
bodyCont.appendChild(setOption)

 set.addEventListener('click', () => {
   setOption.classList.add("show-all")
   divLists.classList.remove("show-all")
  }) 
  let exit = document.querySelector('.exit');
  exit.addEventListener('click', () => {
   setOption.classList.remove("show-all")
    
  })
});


let home = document.querySelector(".home-list");
let createList = document.createElement("div");
createList.classList = "mim";
home.addEventListener("click", () => {
  createList.classList.toggle("show-all");
  body.append(createList);
});

changColor.addEventListener("click", () => {
  inpColor.click();
});
inpColor.addEventListener("input", () => {
  
document.documentElement.style.setProperty('--main-background', inpColor.value);

});

let divOption = document.createElement("div");
divOption.className = "div-options";
let iconOptionUser = document.querySelector(".optins");
let contOptionUser = document.querySelector(".con-users");
let list = ` <ul class="log-list">
<li class="personal" > الملف الشخصي </li>
<li> تسجيل الخروج </li>
</ul> `;
divOption.innerHTML = list;
contOptionUser.appendChild(divOption);
iconOptionUser.addEventListener("click", () => {
  divOption.classList.toggle("show-all");
});

let openSteen = document.querySelector(".personal");

let useName = getData[0].name;

let me = `
<div class="data-me">
  <div><p>رابط الملف الشخصي</p><span></span></div>
  <hr/>
  <div><p>الحالة</p><span></span></div>
  <hr/>
  <div><p>العمر</p><span></span></div>
  <hr/>
  <div><p>الجنس</p><span>ذكر</span></div>
  <hr/>
  <div><p>البلد</p><span></span></div>
  <hr/>
  <div><p>تاريخ الانضمام</p><span></span></div>
  <hr/>
  <div><p> اخر تواجد</p><span></span></div>
  <hr/>
  <div>
  <p>النقات</p>
  <span>50</span>
  <p>النقات المتبقية للمستوي التاي</p>
  <span>75</span>
  </div>
  <hr/>
  <div><p> عدد التنبيهات</p><span></span></div>
</div>


`;
let userOption = `

<div class="header">
<div>
<div style="display:flex; position:absolute; left:5px; >
<i class="fa-solid fa-bars option-control" style="text-align:left; margin-left:10px option-admin-ss"></i>
<i class="fa-solid fa-xmark icon-exit"></i>
</div>
<div class="list-control"></div>
</div>
  <div>
   <img src='${getImg}'>
  </div>
  <div>
    <p>رتبة العضو</p>
    <p>${useName}</p>
    <button class="massage-but"><i class="fa-solid fa-comments"></i></button>
    <button class="add-but"><i class="fa-solid fa-user-plus"></i></button>
    <button class="ban-but"><i class="fa-solid fa-ban"></i></button>
    <button class="report-but"><i class="fa-solid fa-flag"></i></button>
  </div>
</div>
<div class="body-card">
<div class="heading" >
<span class="active">معلوماتي</span>
<span>الأصدقاء</span>
<span>المزيد</span>
</div>
<br/>
  <div>${me}</div>
</div>


`;
const createContainer = document.createElement("div");
createContainer.className = "container-user";
createContainer.innerHTML = userOption;
let bodyAll = document.querySelector("body");
bodyAll.appendChild(createContainer);

let prop = document.querySelectorAll(".body-card .heading  span");




openSteen.addEventListener("click", () => {

  createContainer.classList.add("show-all")
  divOption.classList.remove('show-all')

});



prop.forEach(e => {
  e.addEventListener('click', () => {
    prop.forEach(i => {
      i.classList.remove('active');
    });
    e.classList.add('active');
   
  });
});
let exit = document.querySelector('.header .icon-exit');

exit.addEventListener('click', () => {
  createContainer.classList.remove('show-all');
});
let massageFail = `
<div>
<div class="header-massage" >
<span>${useName}</span>
<div class= "icon-sett">
<i class="fa-solid fa-gear option-privet"></i>
<i class="fa-solid fa-xmark exit" ></i>
</div>
</div>

<div class="body-massage"> </div>
<div class="footer-massage">
 <div class=" privet-massage">
                <i class="fa-solid fa-microphone"></i>
                <input type="text" class="inp-massage">
                <div class="cont-colorss">
                    <div class="colors">
                       <input type="color" class="inp-color">
                       <i class="fa-solid fa-palette color-chang" style="color:#333;"></i>
                       
                       </div>
                       
                       
                       </div>
                <i class="fa-regular fa-face-smile"></i>
            <i class="fa-brands fa-telegram but-sand"></i>
            </div>

</div>
</div>

` ;








let massagePrivet = document.createElement('div');
let privetMassage = document.querySelector('.massage-but');

 
console.log(massagePrivet);
bodyAll.appendChild(massagePrivet);
massagePrivet.innerHTML = massageFail;
massagePrivet.classList = 'container-privet-massage';
massagePrivet.setAttribute('draggable','true')
privetMassage.addEventListener('click', () => {
  
  massagePrivet.classList.add('show-all');
  createContainer.classList.remove('show-all');
  
});



let optionListAdmin = document.createElement('div');
let privetPrivet = document.querySelector('.icon-sett');
let iconPrivet = document.querySelector('.option-privet');
optionListAdmin.classList = "list-option-admin";
privetListAdmin = `
<div><i class="fa-solid fa-bell-slash" style="color:#b35815;"></i><span>كتم</span></div>
<div><i class="fa-solid fa-person-circle-minus" style="color:#6f1285;"></i><span>طرد</span></div>
<div><i class="fa-solid fa-ban" style="color:#b30c0c;"></i><span>حظر</span></div>
<div><i class="fa-solid fa-trash-can" style="color:#b30c0c;"></i><span>حذف الحساب</span></div>
`;

console.log(prop);
/* let optionAdmin = document.querySelector('.option-admin-ss')
console.log(optionAdmin.classList.contains('option-admin-ss'));

  console.log(optionAdmin);
  optionAdmin.addEventListener('click', () => {
    optionListAdmin.classList.toggle('show-flex');
  
  }) */

optionListAdmin .style.position = 'absolute'
let listAdmin = document.querySelector('.list-option');
optionListAdmin.innerHTML = privetListAdmin;
console.log(optionListAdmin);
privetPrivet.appendChild(optionListAdmin)

 iconPrivet.addEventListener('click', () => {
  optionListAdmin.classList.toggle('show-flex');
})

let exitAll = document.querySelector('.exit');





exitAll.addEventListener('click', (e) => {
  massagePrivet.classList.remove('show-all');
  
})
} 