import ERROR from "../constants/ERROR";

const createErrorMessage = (errType) => {
  let $error = document.createElement("div");

  switch (errType) {
    case ERROR.TYPE.KATEX_NOT_FOUND: {
      $error.innerText = ERROR.MESSAGE.KATEX_NOT_FOUND;
      break;
    }
    default: {
      $error.innerText = ERROR.MESSAGE.UNKNOWN;
      break;
    }
  }

  return $error;
};

export default createErrorMessage;
