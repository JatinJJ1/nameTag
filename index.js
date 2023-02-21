const input = document.getElementById("name");
const container = document.querySelector(".tags");


function displayName(){
    naam = input.value;
    if(naam == ""){
        return null;
    }
    // alert(naam);
    const para = document.createElement("p");
    para.innerText ="Hey, I'm " + naam;
    para.setAttribute("class", "tag");
    container.append(para);
}