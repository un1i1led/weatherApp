const city = (name, temp, feels, description, humidity, min, max, wind, country) => {
  const toCelsius = (value) => Math.round(value - 273.15);
  const toFahr = (value) => Math.round(((value - 273.15) * (9 / 5)) + 32);

  return {
    name,
    temp,
    feels,
    description,
    humidity,
    min,
    max,
    wind,
    country,
    toCelsius,
    toFahr,
  };
};

export default city;
