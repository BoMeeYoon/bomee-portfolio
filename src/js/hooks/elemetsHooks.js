export const $ = selector => {
  return document.querySelector(selector);
};

export const mount = (selector, html) => {
  return selector.innerHTML = html;
};

export const event = (selector, _event, handler) => {
  return selector.addEventListener(_event, handler)
};

