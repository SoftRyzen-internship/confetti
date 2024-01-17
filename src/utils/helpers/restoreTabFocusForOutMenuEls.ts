export const restoreTabFocusForOutMenuEls = () => {
  const allElements = document.querySelectorAll('main *, footer *');

  allElements.forEach(element => element.removeAttribute('tabindex'));
};
