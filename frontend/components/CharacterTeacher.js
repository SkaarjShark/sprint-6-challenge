import React, { useState } from "react";

function Character(props) {
  const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div
			onClick={() => setIsExpanded(!isExpanded)}
			className="character-card"
		>
			<h3 className="character-name">{props.character.name}</h3>
			{isExpanded && (
				<p>
					Planet:{" "}
					<span className="character-planet">{props.character.planet}</span>
				</p>
			)}
		</div>
	);
}

export default Character;