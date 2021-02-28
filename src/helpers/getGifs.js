export const getGifs = async (category) => {
  const encodedCat = encodeURI(category);

  const uri = `https://api.giphy.com/v1/gifs/search?q=${encodedCat}&limit=10&api_key=BaG1CBfN7m5BIgBh15iyCQfu6BvUvN1E`;
  const res = await fetch(uri);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
