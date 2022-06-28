const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
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
		locationName: name,
		condition,
		humidity,
		feelslike: feelslike_c,
		windSpeed: wind_kph,
		windDir: wind_dir,
		isDay: is_day,
		temperature: temp_c,
		conditionCode: code,
		conditionText: text
	};
};
