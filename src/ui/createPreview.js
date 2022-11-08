import PREVIEW from "../constants/PREVIEW";

const createInput = () => {
  const $preview = document.createElement("div");

  $preview.classList.add(PREVIEW.SELECTOR.SELF);
  $preview.classList.add(PREVIEW.SELECTOR.EMPTY);
  const observer = new MutationObserver(() => {
    const isEmpty = $preview.innerText === "";
    $preview.classList.toggle("empty", isEmpty);
  });
  observer.observe($preview, {
    childList: true,
  });
  return $preview;
};

export default createInput;
