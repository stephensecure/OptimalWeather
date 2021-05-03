
## Getting set up

To get the site up and running, follow these simple steps:

Login to rapidapi, register and get an API key. https://rapidapi.com/weatherbit/api/weather 
e.g. weather/rapid_api.png

Open the getWeatherForecast.tsx file and insert your API key in the "x-rapidapi-key" section.

```bash
# Install dependencies
npm install

# The following steps will need to be run in different processes
npm start

# Serve site in 'watch' mode, automatically open default browser
npm run serve


By default, the JSON server runs at `http://localhost:3000`, 

To run the test suites, you can use the following commands:

# Single run of test suites
npm run test

# Run test suites in 'watch' mode
npm run test:watch
```

## Commands

Run commands via NPM e.g. `npm run test:watch` from the project root.

| Command      | Description                                    |
| ------------ | ---------------------------------------------- |
| `test`       | Single run of test suites                      |
| `test:watch` | Run test suites in 'watch' mode                |
| `clean`      | Delete compiled assets                         |
| `db`         | Serve JSON data                                |
| `serve`      | Serve site, automatically open default browser |


