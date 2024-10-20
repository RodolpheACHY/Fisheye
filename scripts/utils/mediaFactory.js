const mediaFactory = function (media, folder) {
  const { video, image, title, ...rest } = media;
  console.log("folder", folder);

  return {
    ...rest,
    title,
    getMarkup: function () {
      if (video) {
        return `<video src="/assets/photographers/${folder}/${video}" controls/>`;
      } else if (image) {
        return `<img src="/assets/photographers/${folder}/${image}" alt="${title}" />`;
      }
    },
  };
};
