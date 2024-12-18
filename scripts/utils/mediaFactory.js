// eslint-disable-next-line no-unused-vars
const mediaFactory = function (media, folder) {
  const { video, image, title, ...rest } = media;

  return {
    ...rest,
    title,
    getMarkup: function () {
      if (video) {
        return `<video src="./assets/photographers/${folder}/${video}" controls aria-label="${title}" />`;
      } else if (image) {
        return `<img src="./assets/photographers/${folder}/${image}" alt="${title}" tabindex="0" />`;
      }
    },
  };
};