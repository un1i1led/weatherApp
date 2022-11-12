const city = (name, temp, feels, description, humidity, min, max, wind, country, unit) => {
  const toCelsius = (value) => Math.round(value);
  const toFahr = (value) => Math.round((value * (9 / 5)) + 32);

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
    unit,
    toCelsius,
    toFahr,
  };
};

export default city;
