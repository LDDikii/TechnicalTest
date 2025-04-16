const input = document.querySelector(".promocode_form__input");
const checkbox = document.querySelector(".article_promocode__checkbox");
const inputBtn = document.querySelector(".checkbox_form__button");
const successMsg = document.querySelector(".result__success");
const errMsgCheckbox = document.querySelector(".result__err__checkbox");
const errMsgNum = document.querySelector(".result__err__num");
const errMsgNumMissing = document.querySelector('.result__err__num_missing');

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

input.addEventListener("input", (e) => {
  const value = input.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result;
  if (input.value.includes("+8") || input.value[0] === "8") {
    result = "";
  } else {
    result = "+";
  }

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  input.value = result;
});

inputBtn.addEventListener("click", (e) => {
    var isChecked = document.getElementById("checkbox").checked;


    // successMsg.classList.add('hidden');

    // errMsgCheckbox.classList.remove('show');
    // errMsgNum.classList.remove('show');
    // errMsgNumMissing.classList.remove('show');
    // successMsg.classList.remove('show');

    successMsg.classList.remove('show');
    successMsg.classList.add('hidden')



    if (isChecked != true){
        errMsgCheckbox.classList.remove('hidden');
        errMsgCheckbox.classList.add('show');
        return;
    }

    if (input.value.length != 18){
        errMsgNumMissing.classList.remove('hidden');
        errMsgNumMissing.classList.add('show');
        return;
    } 

    if (input.value == localStorage.getItem('Number')) {
        errMsgNum.classList.remove('hidden');
        errMsgNum.classList.add('show');
        return;
    }

    if (isChecked == true && input.value.length == 18){
        errMsgCheckbox.classList.add('hidden');
        errMsgCheckbox.classList.remove('show');
        errMsgNumMissing.classList.remove('show');
        errMsgNumMissing.classList.add('hidden');
        errMsgNum.classList.remove('show');
        errMsgNum.classList.add('hidden');

        localStorage.setItem('Number', input.value);
        successMsg.classList.remove('hidden');
        successMsg.classList.add('show');
        return;
    }

    // errMsgCheckbox.classList.add('hidden')
    // errMsgNum.classList.add('hidden');
    // errMsgNumMissing.classList.add('hidden');

    console.log(input.value);
});