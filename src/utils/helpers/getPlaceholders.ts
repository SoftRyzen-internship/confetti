export const getPlaceholders = ({
  qty,
  obj,
}: {
  qty: number;
  obj: {
    path: string;
    alt: string;
  };
}) => {
  return Array.from(Array(qty).keys()).map(() => {
    return obj;
  });
};
