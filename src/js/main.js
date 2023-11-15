import "./../scss/main.scss";
import { Person } from "./Person";
import { createHTML, createHTMLforPerson } from "./htmlHelpers";
import { variables } from "./htmlHelpers";

// export const { myForm, inputFirstName, inputEyeColor, inputLength, inputBirthYear, submitBtn, family } = variables();

let userInputName = "";
let userInputEyeColor = "";
let userInputLength = null;
let userInputBirthyear = null;



for (let i = startingValue; i < family.length; i++) {
  createHTMLforPerson(0);

}


  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userInputName = inputFirstName.value;
    userInputEyeColor = inputEyeColor.value;
    userInputLength = parseInt(inputLength.value);
    userInputBirthyear = parseInt(inputBirthYear.value);

    family.push(
      new Person(
        userInputName,
        userInputEyeColor,
        userInputLength,
        userInputBirthyear
      )
    );
    createHTMLforPerson(family.length - 1);

    console.log(family);
    inputFirstName.value = "";
    inputEyeColor.value = "";
    inputLength.value = null;
    inputBirthYear.value = null;
  });

  for (let i = startingValue; i < family.length; i++) {
 

  }

console.log(family)

