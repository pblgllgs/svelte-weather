const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e625c3eca0mshc0bcd0d389a9f3ap1f72d3jsncc7e67cfc4ee',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const getWeatherFrom = async (query = 'chillan') => {
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);
	const data = await response.json();
	const { current, location } = data;
	const { localtime, name, country } = location;
	const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current;
	const { code, text } = condition;
	return {
		localtime,
		country,
		name,
		condition,
		humidity,
		feelslike: feelslike_c,
		windSpeed: wind_kph,
		windDir: wind_dir,
		isDay: is_day,
		conditionCode: code,
		conditionText: text
	};
}
