let city: string = "Indore";
let temperature: number = 30;
let isRaining: boolean = true;

function weatherReport(
  city: string,
  temperature: number,
  isRaining: boolean,
): void {
  console.log(
    "In " + city + ", it is " + temperature + "°C. Is it raining? " + isRaining,
  );
}

weatherReport(city, temperature, isRaining);
