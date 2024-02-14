/**
 * filterByNameAndBreed
 * @param {object} pet a pet to filter
 * @param {string} query the query used to filter
 */
export const filterByNameAndBreed = (pet, query) => {
  if (query) {
    // if there's a query, do the following
    return (
      // check the cat name OR the breed
      pet.name.toLowerCase().includes(query) ||
      pet.breed.toLowerCase().includes(query)
    );
  } else {
    // if there's no query, keep all cats
    return true;
  }
};