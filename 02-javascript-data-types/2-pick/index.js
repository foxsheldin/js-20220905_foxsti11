/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let object = JSON.parse(JSON.stringify(obj));

  object = Object.fromEntries(
    Object.entries(object).filter(([key]) => fields.includes(key))
  );

  return object;
};
