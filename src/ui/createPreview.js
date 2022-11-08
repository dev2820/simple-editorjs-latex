const createInput = (value, placeholder) => {
  const $preview = document.createElement("div");

  $preview.classList.add("latex-preview");

  return $preview;
};

export default createInput;
