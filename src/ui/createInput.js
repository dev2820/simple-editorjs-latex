import INPUT from "../constants/INPUT";

const createInput = ({ value }) => {
  const $input = document.createElement("input");

  $input.value = value ?? "";
  $input.setAttribute("placeholder", INPUT.PLACEHOLDER);
  $input.classList.add(INPUT.SELECTOR.INPUT);

  return $input;
};

export default createInput;
