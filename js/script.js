/* TYPING ANIMATION SCRIPT */
var typed = new Typed(".typing",{
    strings:["", "ditt fotballag", "ditt håndballag", "ditt svømmelag", "din idrettsgruppe"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ASIDE */
const nav = get(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = getAll(".section"),
    totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");                
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }

    function showSection(element){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active"); 
        }
        const target = element.getAttribute("href").split("#")[1];
        get("#" + target).classList.add("active");
    }

    function removeBackSection(){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section"); 
        }
    }

    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }

    function updateNav(element){
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }        
        }
    }

    get(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = get(".nav-toggler"),
        aside = get(".aside");
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.toggle("open") ;               
            }
        }



/*
let numberOfAddedForms = 0;

function getInputName(){
    /* INPUT NAME
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "personName" + numberOfAddedForms);
    inputName.setAttribute("placeholder", "Name");
    inputName.classList.add("form-control");

    const div1 = document.createElement("div");
    div1.classList.add("form-group");
    div1.appendChild(inputName);

    const div2 = document.createElement("div");
    div2.classList.add("form-item", "col-4", "padd-15");
    div2.appendChild(div1);

    return div2;
}

function getInputEmail(){
    /* INPUT EMAIL 
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "personEmail" + numberOfAddedForms);
    inputEmail.setAttribute("placeholder", "Email");
    inputEmail.classList.add("form-control");

    const div3 = document.createElement("div");
    div3.classList.add("form-group");
    div3.appendChild(inputEmail);

    const div4 = document.createElement("div");
    div4.classList.add("form-item", "col-4", "padd-15");
    div4.appendChild(div3);

    return div4;
}

function getInputPhone(){
    /* INPUT PHONE
    const inputNumber = document.createElement("input");
    inputNumber.setAttribute("type", "text");
    inputNumber.setAttribute("id", "personPhone" + numberOfAddedForms);
    inputNumber.setAttribute("placeholder", "Telefonnummer");
    inputNumber.classList.add("form-control");

    const div5 = document.createElement("div");
    div5.classList.add("form-group");
    div5.appendChild(inputNumber);

    const div6 = document.createElement("div");
    div6.classList.add("form-item", "col-4", "padd-15");
    div6.appendChild(div5);

    return div6;
}

function getAddressName(){
    /* INPUT ADDRESSNAME
    const inputAddressname = document.createElement("input");
    inputAddressname.setAttribute("type", "text");
    inputAddressname.setAttribute("id", "personAddressName" + numberOfAddedForms);
    inputAddressname.setAttribute("placeholder", "Adressenavn");
    inputAddressname.classList.add("form-control");

    const div7 = document.createElement("div");
    div7.classList.add("form-group");
    div7.appendChild(inputAddressname);

    const div8 = document.createElement("div");
    div8.classList.add("form-item", "col-4", "padd-15");
    div8.appendChild(div7);

    return div8;
}

function getAddressNumber(){
    /* INPUT ADDRESSNUMBER
    const inputAddressnumber = document.createElement("input");
    inputAddressnumber.setAttribute("type", "text");
    inputAddressnumber.setAttribute("id", "personAddressNumber" + numberOfAddedForms);
    inputAddressnumber.setAttribute("placeholder", "Adressenummer");
    inputAddressnumber.classList.add("form-control");

    const div9 = document.createElement("div");
    div9.classList.add("form-group");
    div9.appendChild(inputAddressnumber);

    const div10 = document.createElement("div");
    div10.classList.add("form-item", "col-4", "padd-15");
    div10.appendChild(div9);

    return div10;
}

function getBirthdate(){
    /* INPUT BIRTHDATE
    const inputBirthdate = document.createElement("input");
    inputBirthdate.setAttribute("type", "date");
    inputBirthdate.setAttribute("id", "personBirthdate" + numberOfAddedForms);
    inputBirthdate.classList.add("form-control");

    const div11 = document.createElement("div");
    div11.classList.add("form-group");
    div11.appendChild(inputBirthdate);

    const div12 = document.createElement("div");
    div12.classList.add("form-item", "col-4", "padd-15");
    div12.appendChild(div11);

    return div12;
}


function addToForm(){
    numberOfAddedForms++;

    /* MOTHER OF ALL DIVS
    const extraInput = get("#additionalPerson");


    const h4 = document.createElement("h4");
    h4.classList.add("padd-15", "form-sub-title");
    const text = document.createTextNode("Deltager " + numberOfAddedForms + " : ");
    h4.appendChild(text);

    const divRow = document.createElement("div");
    divRow.classList.add("row");
    divRow.appendChild(h4);

    const inputName = getInputName();
    const inputEmail = getInputEmail();
    const inputPhone = getInputPhone();
    const inputAddressname = getAddressName();
    const inputAddressnumber = getAddressNumber();
    const inputBirthdate = getBirthdate();
    
    const divRow1 = document.createElement("div");
    divRow1.classList.add("row");
    divRow1.appendChild(inputName);
    divRow1.appendChild(inputEmail);
    divRow1.appendChild(inputPhone);

    const divRow2 = document.createElement("div");
    divRow2.classList.add("row");
    divRow2.appendChild(inputAddressname);
    divRow2.appendChild(inputAddressnumber);
    divRow2.appendChild(inputBirthdate);

    const divFinal = document.createElement("div");
    divFinal.classList.add("contact-form", "padd-15");
    divFinal.appendChild(divRow);
    divFinal.appendChild(divRow1);
    divFinal.appendChild(divRow2);

    const divFinalFinal = document.createElement("div");
    divFinalFinal.classList.add("row");
    divFinalFinal.appendChild(divFinal);
    extraInput.appendChild(divFinalFinal);
} 

function signUpGroup(){
    const group = new Map();

    group.set("Kontakt person", [
          get("#personName0").value, 
          get("#personEmail0").value, 
          get("#personPhone0").value, 
          get("#personAddressName0").value, 
          get("#personAddressNumber0").value,
          get("#personBirthdate0").value,
          get("#personGroupName0").value,
          get("#personExtra0").value]);


    for (let i = 0; i < numberOfAddedForms +1; i++) {
        group.set("Person " + i, [
                get("#personName" + i).value,
                get("#personEmail" + i).value,
                get("#personPhone" + i).value,
                get("#personAddressName" + i).value,
                get("#personAddressNumber" + i).value,
                get("#personBirthdate" + i).value]);
    }

    console.log(group);
}
*/



/* SEND EMAIL */
function sendEmail() {
    var templateParams = {
        to_name: 'HH Reiser',
        from_name: getE("seName").value,
        from_email: getE("seEmail").value,
        message: getE("seMessage").value,
        subject: getE("seSubject").value
    };

    getE("seName").value = ""
    getE("seEmail").value = ""
    getE("seMessage").value = ""
    getE("seSubject").value = ""

    emailjs.send('service_7btefzb', 'template_0cjl2ps', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Meldingen er sendt!")
    }, function(error) {
       console.log('FAILED...', error);
       alert("Sending av meldling feilet!")
    });
}










/* SUPPORT FUNCTIONS */
function get(id){
    return document.querySelector(id);
}
function getE(id){
    return document.getElementById(id);
}
function getAll(id){
    return document.querySelectorAll(id);
}