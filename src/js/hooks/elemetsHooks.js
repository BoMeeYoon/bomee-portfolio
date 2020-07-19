export const $ = (selector) => {
  return document.querySelector(selector);
};
export const all$ = (selector) => {
  return document.querySelectorAll(selector);
}

export const mount = (selector, html) => {
  return (selector.innerHTML = html);
};

export const event = (selector, _event, handler) => {
  if (!selector) return addEventListener(_event, handler);
  return selector.addEventListener(_event, handler);
};

export const addName = (selector, name) => {
  return selector.classList.add(name);
};

export const removeName = (selector, name) => {
  return selector.classList.remove(name);
};

export const toggleName = (selector, name) => {
  return selector.classList.toggle(name);
};

export const removeHandler = (target, name, time) => {
  setTimeout(() => {
    removeName(target, name);
  }, time);
};

export const setAttribute = (selector, tag, name) => {
  return document.querySelector(selector).setAttribute(tag, name);
};