// EXERCISE 38 (Cities).

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Chabahar", "Iran");
describe_city("Tokyo", "Japan");