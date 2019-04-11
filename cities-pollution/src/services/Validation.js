export const validate = (inputs) => {
  if (inputs) {
    return inputs.every(element => {
      return element
    });
  }
  return false
}
