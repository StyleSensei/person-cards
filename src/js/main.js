import "./../scss/main.scss";
import { createHTMLforForm, createHTMLforPerson, family } from "./htmlHelpers";

// export const { myForm, inputFirstName, inputEyeColor, inputLength, inputBirthYear, submitBtn, family } = variables();
createHTMLforForm()

for (let i = 0; i < family.length; i++) {
  
  createHTMLforPerson(i);

}


console.log(family);


// for (let i = family.length - 1; i < family.length; i++) {
//   createHTMLforPerson(family.length - 1);
  
//   }

console.log(family)

