import katex from "katex";

const renderLatex = (latex, $target) => {
  katex.render(latex, $target, {
    throwOnError: false,
  });
};

export default renderLatex;
