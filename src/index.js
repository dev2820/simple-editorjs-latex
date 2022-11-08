"use strict";

import "./style.css";
import katex from "katex";
import renderLatex from "./utils/renderLatex";
import createBlock from "./ui/createBlock";
import createInput from "./ui/createInput";
import createPreview from "./ui/createPreview";

export default class LaTeX {
  constructor({ data, api }) {
    this.data = data.latex;
    this.api = api;
    this.settings = [
      {
        name: "modify",
        title: this.api.i18n.t("modify"),
        icon: '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77307 0.914814C5.86062 0.827266 5.96455 0.757819 6.07894 0.710439C6.19333 0.663058 6.31593 0.638672 6.43974 0.638672C6.56355 0.638672 6.68615 0.663058 6.80054 0.710439C6.91492 0.757819 7.01886 0.827266 7.1064 0.914814C7.19395 1.00236 7.2634 1.1063 7.31078 1.22068C7.35816 1.33507 7.38255 1.45767 7.38255 1.58148C7.38255 1.70529 7.35816 1.82789 7.31078 1.94228C7.2634 2.05667 7.19395 2.1606 7.1064 2.24815L2.6064 6.74815L0.773071 7.24815L1.27307 5.41481L5.77307 0.914814Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        default: false,
      },
    ];
  }
  /**
   * show toolbox when add block button
   * @returns {title} name of block
   * @returns {icon} latex icon
   */
  static get toolbox() {
    return {
      title: "latex",
      icon: '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_115_110)"><path d="M3.32387 7.13618C2.77842 7.1305 2.30257 6.98277 1.89632 6.693C1.49007 6.40039 1.17473 5.9984 0.950295 5.48704C0.725863 4.97567 0.613647 4.38902 0.613647 3.72709C0.613647 3.07084 0.731545 2.4913 0.967341 1.98846C1.20598 1.48277 1.5341 1.08647 1.95171 0.799539C2.36933 0.512607 2.84944 0.369141 3.39206 0.369141C3.78978 0.369141 4.13353 0.445846 4.42331 0.599255C4.71308 0.749823 4.95882 0.96005 5.16052 1.22993C5.36507 1.49982 5.53694 1.80948 5.67615 2.15891H6.06819L6.2216 3.71005L7.07387 6.99982H6.13637L5.33524 3.71005C5.29262 3.50266 5.22728 3.26118 5.13921 2.98562C5.05115 2.71005 4.93325 2.44158 4.78552 2.18022C4.63779 1.91885 4.44887 1.70294 4.21876 1.53249C3.99149 1.35919 3.71592 1.27255 3.39206 1.27255C3.04546 1.27255 2.73865 1.37766 2.4716 1.58789C2.20456 1.79812 1.99575 2.08931 1.84518 2.46147C1.69461 2.83363 1.61933 3.26118 1.61933 3.74414C1.61933 4.21573 1.69035 4.64044 1.8324 5.01829C1.97444 5.39329 2.17331 5.69016 2.42899 5.90891C2.68467 6.12482 2.98296 6.23277 3.32387 6.23277C3.63921 6.23277 3.91336 6.14613 4.14632 5.97283C4.37927 5.79669 4.57529 5.57652 4.73439 5.31232C4.89348 5.04527 5.02132 4.77113 5.11791 4.48988C5.21734 4.20579 5.28978 3.95721 5.33524 3.74414L6.05115 0.454368H6.98865L6.2216 3.74414L6.06819 5.34641H5.72728C5.57956 5.69868 5.3949 6.01118 5.17331 6.28391C4.95456 6.5538 4.69177 6.76402 4.38495 6.91459C4.08098 7.06516 3.72728 7.13902 3.32387 7.13618Z" fill="black"/></g><defs><clipPath id="clip0_115_110"><rect width="8" height="8" fill="white"/></clipPath></defs></svg>',
    };
  }
  render() {
    const $block = createBlock();
    const $preview = createPreview();
    const $input = createInput(this.data, this.api.i18n.t("enter latex here"));

    if (!katex) {
      let errMessage = document.createElement("div");
      errMessage.innerText = "Oops! KaTeX is not found";

      return errMessage;
    }

    renderLatex($input.value, $preview);

    $input.addEventListener("keyup", (e) => {
      e.preventDefault();
      renderLatex($input.value, $preview);
    });

    $block.appendChild($preview);
    $block.appendChild($input);

    return $block;
  }

  save(blockContent) {
    return {
      latex: blockContent.lastChild.value,
    };
  }
}
