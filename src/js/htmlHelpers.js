import { Person } from "./Person";
import { family, myForm } from "./main";

export function variables() {
  const myForm = document.createElement("form");
  const inputFirstName = document.createElement("input");
  const inputEyeColor = document.createElement("input");
  const inputLength = document.createElement("input");
  const inputBirthYear = document.createElement("input");
  const submitBtn = document.createElement("button");
  
  const person1 = new Person("Patrik", "Blue", 185, 1988);
  const person2 = new Person("Sara", "Blue", 167, 1990);
  const person3 = new Person("Holger", "Blue", 110, 2019);
  const person4 = new Person("Lova", "Blue", 90, 2021);
  const family = [person1, person2, person3, person4];
  
  return {
    myForm,
    inputFirstName,
    inputEyeColor,
    inputLength,
    inputBirthYear,
    submitBtn,
    family
  };
}

export function createHTML(startingValue,{inputFirstName,inputEyeColor,inputLength, inputBirthYear,submitBtn,family}) {
  inputFirstName.setAttribute("placeholder", "First name");
  inputEyeColor.setAttribute("placeholder", "Eye color");
  inputLength.setAttribute("placeholder", "Length");
  inputBirthYear.setAttribute("placeholder", "Birth year");
  submitBtn.innerHTML = "Lägg till";
    
    for (let i = startingValue; i < family.length; i++) {
    const textSection = document.createElement("section");
    const textTag = document.createElement("p");
    const textTag2 = document.createElement("p");
    const textTag3 = document.createElement("p");
    const textTag4 = document.createElement("p");

    textTag.innerHTML = "First name: " + family[i].firstName;
    textTag2.innerHTML = "Eye color: " +  family[i].eyecolor;
    textTag3.innerHTML = "Length: " + family[i].length + " cm";
    textTag4.innerHTML = "Year of birth: " + family[i].birthyear;
    textSection.appendChild(textTag);
    textSection.appendChild(textTag2);
    textSection.appendChild(textTag3);
    textSection.appendChild(textTag4);
    document.body.appendChild(textSection);

    document.body.appendChild(myForm);
    myForm.appendChild(inputFirstName);
    myForm.appendChild(inputEyeColor);
    myForm.appendChild(inputLength);
    myForm.appendChild(inputBirthYear);
    myForm.appendChild(submitBtn);

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
}
