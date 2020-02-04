// ==UserScript==
// @name         Nippers
// @namespace    https://github.com/usagiga/Nippers
// @version      1.0
// @description  To reduce missing by careless, the User Scripts gets it to be visible.
// @author       Usagigawara
// @include        *
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    // Helpers
    const applyCSS = (css) => {
        // make <style> included css
        let styleElem = document.createElement("style");
        styleElem.type = "text/css";
        styleElem.innerText = css;

        // Insert styleElem into <head>
        const headElem = document.querySelector("head");
        headElem.insertAdjacentElement("afterend", styleElem);
    };

    // Applying CSS
    const css = `
/* Glow <img> missing alt attr */
img:not([alt]) {
    box-shadow: 0 0 5px red;
}
`;

    applyCSS(css);
})();
