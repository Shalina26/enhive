export const createPriceInEuro = (priceInCents) => {
  return priceInCents / 100;
};

export const createPriceInCents = (priceInEuro) => {
  return priceInEuro * 100;
};

export const createSlug = (name, venue) => {
  const trimmedName = name.trim();
  const trimmedVenue = venue.trim();
  const combinedNameAndVenue = trimmedName + " " + trimmedVenue;
  const slug = combinedNameAndVenue.replace(/ /g, "-");

  return slug.toLowerCase();
};
