const createInput = () => {
  const $preview = document.createElement("div");

  $preview.classList.add("latex-preview");

  return $preview;
};

export default createInput;
