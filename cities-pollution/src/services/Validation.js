export const validate = (inputs) => {
    return inputs.every(element => {
      return element.length > 0
    });
  }
