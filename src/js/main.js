import "./../scss/main.scss";
import { Person } from "./Person";
import { createHTML } from "./htmlHelpers";
import { variables } from "./htmlHelpers";

export const { myForm, inputFirstName, inputEyeColor, inputLength, inputBirthYear, submitBtn, family } = variables();

let userInputName = "";
let userInputEyeColor = "";
let userInputLength = null;
let userInputBirthyear = null;

createHTML(0, {inputFirstName,inputEyeColor,inputLength, inputBirthYear,submitBtn,family});

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
    createHTML(family.length - 1, {inputFirstName, inputEyeColor, inputLength, inputBirthYear, submitBtn, family});

    console.log(family);
    inputFirstName.value = "";
    inputEyeColor.value = "";
    inputLength.value = null;
    inputBirthYear.value = null;
  });

  
console.log(family)

