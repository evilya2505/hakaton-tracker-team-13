export const renderImage = async () => {
  return fetch(`https://source.unsplash.com/random`).then((res) => {
    return res.url;
  });
};
