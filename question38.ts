function describeCity(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
}

describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("London", "UK");