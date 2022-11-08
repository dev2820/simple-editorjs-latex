import SELECTOR from "../constants/INPUT";

const createInput = (value, placeholder) => {
  const $input = document.createElement("input");

  $input.value = value ?? "";
  $input.setAttribute("placeholder", placeholder);
  $input.classList.add(SELECTOR.INPUT);

  return $input;
};

export default createInput;
