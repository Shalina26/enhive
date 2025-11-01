export const createPriceInEuro = (priceInCents) => {
  return priceInCents / 100;
};

export const createPriceInCents = (priceInEuro) => {
  return priceInEuro * 100;
};

export const createSlug = (name, venue) => {
  const combinedNameAndVenue = (name + " " + venue).trim();
  const slug = combinedNameAndVenue.replace(/[^A-Za-z0-9]+/g, "-");

  return slug.toLowerCase();
};
