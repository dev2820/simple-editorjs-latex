import katex from "katex";
import ERROR from "../constants/ERROR";

const renderLatex = (latex, $target) => {
  if (!katex) {
    throw new Error(ERROR.TYPE.KATEX_NOT_FOUND);
  }

  katex.render(latex, $target, {
    throwOnError: false,
  });
};

export default renderLatex;
