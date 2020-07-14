export const $ = selector => document.querySelector(selector);
export const mount = (selector, html) => selector.innerHTML = html;
export const event = (selector, _event, handler) => selector.addEventListener(_event, handler);