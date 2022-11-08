import PREVIEW from "../constants/PREVIEW";

const createInput = () => {
  const $preview = document.createElement("div");

  $preview.classList.add(PREVIEW.SELECTOR.SELF);

  return $preview;
};

export default createInput;
