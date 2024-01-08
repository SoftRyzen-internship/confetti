const common = async () => (await import('@/data/common.json')).default;

export const getStaticData = async () => {
  return {
    common: await common(),
  };
};
