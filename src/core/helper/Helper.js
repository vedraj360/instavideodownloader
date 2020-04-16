const urlConverter = (url) => {
  let x = url.split("?");
  x = x[0] + "?__a=1";
  return x;
};

const urlVaildator = (url) => {
  let validUrl = "https://www.instagram.com/p/";
  if (url.includes(validUrl)) {
    return true;
  }
};

export { urlConverter, urlVaildator };
