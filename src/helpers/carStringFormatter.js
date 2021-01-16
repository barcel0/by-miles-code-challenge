const carStringFormatter = (make, model, colour, reg) => {
  const formattedMake = capitalizeFirstChar(make);
  const formattedModel = capitalizeFirstChar(model);
  const formattedColour = capitalizeFirstChar(colour);
  return `${formattedMake} ${formattedModel} ${formattedColour} -${reg}`;
}

module.exports = carStringFormatter;