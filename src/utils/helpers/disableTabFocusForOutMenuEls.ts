export const disableTabFocusForOutMenuEls = () => {
  const allElements = document.querySelectorAll('main *, footer *');

  allElements.forEach(element => element.setAttribute('tabindex', '-1'));
};
