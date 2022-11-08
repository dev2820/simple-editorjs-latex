const createBlock = () => {
  const $block = document.createElement("div");

  $block.setAttribute("tabindex", 0);
  $block.classList.add("latex-block");

  return $block;
};

export default createBlock;
