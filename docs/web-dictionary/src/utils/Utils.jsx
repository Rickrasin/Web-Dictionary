export const getFieldValue = (obj, fieldName) => {
  for (const element of obj) {
    if (Object.hasOwn(element, fieldName)) {
      console.log("Retornei null " + element[fieldName]);
      if (element[fieldName] !== null | element[fieldName] !== "") {
        return element[fieldName];
      }
    }
  }
  return null;
};
