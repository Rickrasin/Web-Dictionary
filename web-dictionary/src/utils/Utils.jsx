export const getFieldValue = (obj, fieldName) => {
  console.log(obj, fieldName);
  for (const element of obj) {
    if (Object.hasOwn(element, fieldName)) {
      if (element[fieldName] !== null && element[fieldName].length > 0) {
        console.log("Achei " + element[fieldName]);
        return element[fieldName];
      }
    }
  }
  return null;
};

export const getFieldValuebyName = (obj, valueName) => {
  for (const element of obj) {
    if (Object.hasOwn(element, valueName)) {
      if (element == valueName) {
        return element;
      }
    }
  }
  return null;
};
