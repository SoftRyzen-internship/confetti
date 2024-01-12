export const getCurrentScreenWidth = () => {
  if (typeof window === 'undefined') return;

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};
