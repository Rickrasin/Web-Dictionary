export const getFieldValue = (obj, fieldName) => {
    for (const element of obj) {
      if (Object.hasOwn(element, fieldName)) {
        return element[fieldName];
      } 
    }
    return null;
  }