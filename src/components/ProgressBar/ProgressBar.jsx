import React from "react";

// Pixel Progress Bar component
const PixelProgressBar = ({
	value = 0,
	max = 10,
	pixelCount = 10,
	pixelSize = 20,
	filledColor = "#22c55e",
	emptyColor = "#e9d5ff"
}) => {
	const filledPixels = Math.round((value / max) * pixelCount);
	return (
		<div style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
			{[...Array(pixelCount)].map((_, i) => (
				<div
					key={i}
					style={{
						width: pixelSize,
						height: pixelSize,
						background: i < filledPixels ? filledColor : emptyColor,
						borderRadius: 4,
						border: "2px solid " + (i < filledPixels ? filledColor : "#d8b4fe"),
						transition: "all 0.3s ease"
					}}
				/>
			))}
		</div>
	);
};

export default PixelProgressBar;
