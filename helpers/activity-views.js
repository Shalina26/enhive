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

export const validateNameAndVenue = (name, venue) => {
  const regex = /^[A-Za-z0-9\- ]+$/;
  const validName = regex.test(name);
  const validVenue = regex.test(venue);

  if (validName && validVenue) {
    return true;
  }
  return false;
};
