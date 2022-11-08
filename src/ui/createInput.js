const createInput = (value, placeholder) => {
  const $input = document.createElement("input");

  $input.value = value ?? "";
  $input.setAttribute("placeholder", placeholder);
  $input.classList.add("latex-input");

  return $input;
};

export default createInput;
