let current = 0;
let personList = [];


function display() {
    let elm = document.getElementById('table-render');
    let html = '';
    for (let i = 0; i < personList.length; i++) {
        personList[i].id = i;
        html += personList[i].getHtml();
    }
    elm.innerHTML = html;

}

function addPerson() {
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let taxcode = document.getElementById("taxcode").value;
    let ranking = document.getElementById("ranking").value;
    let seniority = document.getElementById("seniority").value;
    if(name ==="" || taxcode === "" || image ===""){
        alert("You can not leave Fullname,Taxcode and Image blank!");
        return;
    }

    let person = new Personal(image,name,gender,taxcode,ranking,seniority);
    personList.push(person);
    display();
    revert();
    // saveData();

}

function deletePerson(index) {
    personList.splice(index,1);
    display();
    // saveData();
}

function editPerson(index) {
    document.getElementById("edit-name").value = personList[index].name;
    document.getElementById("edit-gender").value = personList[index].gender;
    document.getElementById("edit-taxcode").value = personList[index].taxcode;
    document.getElementById("edit-ranking").value = personList[index].ranking;
    document.getElementById("edit-seniority").value = personList[index].seniority;
    document.getElementById("edit-image").value = personList[index].image;
    current = index;

}

function updatePerson() {
    let index = current;
    personList[index].name = document.getElementById("edit-name").value;
    personList[index].gender = document.getElementById("edit-gender").value;
    personList[index].taxcode = document.getElementById("edit-taxcode").value;
    personList[index].ranking = document.getElementById("edit-ranking").value;
    personList[index].seniority = document.getElementById("edit-seniority").value;
    personList[index].image = document.getElementById("edit-image").value;
    display();
    revert2();
    // saveData();

}

function revert() {
    document.getElementById("name").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("taxcode").value = '';
    document.getElementById("ranking").value = '';
    document.getElementById("seniority").value = '';
    document.getElementById("image").value = '';
}

function revert2() {
    document.getElementById("edit-name").value = '';
    document.getElementById("edit-gender").value = '';
    document.getElementById("edit-taxcode").value = '';
    document.getElementById("edit-ranking").value = '';
    document.getElementById("edit-seniority").value = '';
    document.getElementById("edit-image").value = '';
}


display();