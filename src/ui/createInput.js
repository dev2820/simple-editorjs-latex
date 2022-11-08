import INPUT from "../constants/INPUT";

const createInput = ({ value }) => {
  const $input = document.createElement("input");

  $input.value = value ?? "";
  $input.setAttribute("placeholder", INPUT.PLACEHOLDER);
  $input.classList.add(INPUT.SELECTOR.SELF);

  return $input;
};

export default createInput;
