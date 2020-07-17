const log = console.log;
export const scrollHeight = selector => {
  return selector.getBoundingClientRect().height;
};

export const scrollIntoView = selector => {
  const scrollTo = document.querySelector(selector);
  return scrollTo.scrollIntoView({ behavior: "smooth" });
};

