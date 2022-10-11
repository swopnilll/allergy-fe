/**
 * Method to set the item with the specified key in localstorage.
 *
 * @param {String} key
 * @param {String|Array|Number|Object|Boolean} value
 * @returns {Boolean}
 */
export const setValueInLocalStorage = async (key: string, value: any) => {
  try {
    await localStorage.setItem(key, value);
  } catch (error) {
    throw error;
  }

  return true;
};

/**
 * Method to get the item from the localstorage.
 *
 * @param {string} key
 * @returns {Promise}
 */

export const getValueFromLocalStorage = async (key: string) => {
  let item;
  try {
    item = localStorage.getItem(key);
  } catch (error) {
    throw error;
  }

  return item;
};

/**
 * Method to remove item from the localstorage.
 *
 * @param {string} key
 * @returns {Boolean}
 */
export const removeValueFromLocalStorage = async (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    throw error;
  }

  return true;
};
