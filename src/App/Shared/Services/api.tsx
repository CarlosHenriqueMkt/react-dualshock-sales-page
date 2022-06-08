import axios, { AxiosResponse } from "axios";

export interface IGames {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
}

export default async function fetchGames() {
	const options = {
		method: "GET",
		url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
		params: { platform: "pc" },
		headers: {
			"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
			"X-RapidAPI-Key":
				"706790d21dmsh2c503bfbe860e51p16214djsnbafc9eac2c54",
		},
	};

	let games: IGames[] = [];
	try {
		const response: AxiosResponse<IGames[]> = await axios.request(options);
		games = response.data;
		return games;
	} catch (err) {
		console.log(err);
		return [];
	}
}
