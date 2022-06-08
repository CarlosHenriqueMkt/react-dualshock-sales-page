import React, { useEffect, useState } from "react";
import * as C from "./styles";
import Divider from "@mui/material/Divider";
import "animate.css";
import fetchGames, { IGames } from "../../Services/api";

function Games() {
	const [games, setGames] = useState<IGames[]>([]);

	useEffect(() => {
		fetchGames().then((response) => setGames(response || []));
	}, []);

	return (
		<C.Games>
			<Divider>
				<article className="gameTittle animate__animated animate__zoomIn">
					<h2>Games</h2>
				</article>
			</Divider>
			<section>
				<div id="games" className="flex">
					{!!games.length &&
						games.slice(0, 10).map((game) => (
							<div
								key={game.id}
								className="gameBox animate__animated animate__fadeInUp"
							>
								<a
									target="_blank"
									rel="noreferrer"
									href={game.freetogame_profile_url}
								>
									<img
										src={game.thumbnail}
										alt={game.title}
									/>
								</a>
								<p>{game.title}</p>
							</div>
						))}
				</div>
			</section>
		</C.Games>
	);
}

export default Games;
