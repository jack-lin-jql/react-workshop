export const wrappedFetch = async (url) => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);

  const responseInJSON = await response.json();
  return responseInJSON;
};
