import { Person } from "./Person";

  const person1 = new Person("Patrik", "Blue", 185, 1988);
  const person2 = new Person("Sara", "Blue", 167, 1990);
  const person3 = new Person("Holger", "Blue", 110, 2019);
  const person4 = new Person("Lova", "Blue", 90, 2021);
  export const family = [person1, person2, person3, person4];

  export function createHTMLforPerson(i){
    const textSection = document.createElement("section");
    const textTag = document.createElement("p");
    const textTag2 = document.createElement("p");
    const textTag3 = document.createElement("p");
    const textTag4 = document.createElement("p");
  // let i = 0;
    
  
    textTag.innerHTML = "First name: " + family[i].firstName;
      textTag2.innerHTML = "Eye color: " +  family[i].eyecolor;
      textTag3.innerHTML = "Length: " + family[i].length + " cm";
      textTag4.innerHTML = "Year of birth: " + family[i].birthyear;
      textSection.appendChild(textTag);
      textSection.appendChild(textTag2);
      textSection.appendChild(textTag3);
      textSection.appendChild(textTag4);
      document.body.appendChild(textSection);
    
      textTag.addEventListener("click", () => {
        textTag.classList.toggle("large");
        textTag4.classList.toggle("rotate");
      });
      textTag2.addEventListener("click", () => {
        textTag2.classList.toggle("large");
      });
      textTag3.addEventListener("click", () => {
        textTag3.classList.toggle("rotate");
      });
      textTag4.addEventListener("click", () => {
        textTag4.classList.toggle("rotate");
      });
    }
      
  
export function createHTMLforForm(){
  
  const myForm = document.createElement("form");
  const inputFirstName = document.createElement("input");
  const inputEyeColor = document.createElement("input");
  const inputLength = document.createElement("input");
  const inputBirthYear = document.createElement("input");
  const submitBtn = document.createElement("button");

  let userInputName = "";
  let userInputEyeColor = "";
  let userInputLength = null;
  let userInputBirthyear = null;

  inputFirstName.value = "";
    inputEyeColor.value = "";
    inputLength.value = "";
    inputBirthYear.value = "";

  inputFirstName.setAttribute("placeholder", "First name");
  inputEyeColor.setAttribute("placeholder", "Eye color");
  inputLength.setAttribute("placeholder", "Length");
  inputBirthYear.setAttribute("placeholder", "Birth year");
  submitBtn.innerHTML = "Lägg till";

  document.body.appendChild(myForm);
  myForm.appendChild(inputFirstName);
  myForm.appendChild(inputEyeColor);
  myForm.appendChild(inputLength);
  myForm.appendChild(inputBirthYear);
  myForm.appendChild(submitBtn);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userInputName = inputFirstName.value;
    userInputEyeColor = inputEyeColor.value;
    userInputLength = parseInt(inputLength.value);
    userInputBirthyear = parseInt(inputBirthYear.value);
    console.log("klick")
  
    family.push(
      new Person(
        userInputName,
        userInputEyeColor,
        userInputLength,
        userInputBirthyear
      )
    )
    createHTMLforPerson(family.length - 1)
  }
  );
}




