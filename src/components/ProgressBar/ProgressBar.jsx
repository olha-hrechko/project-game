import React from "react";

// Pixel Progress Bar component
const PixelProgressBar = ({
	value = 0,
	max = 10,
	pixelCount = 10,
	pixelSize = 20,
	filledColor = "#4caf50",
	emptyColor = "#e0e0e0"
}) => {
	const filledPixels = Math.round((value / max) * pixelCount);
	return (
		<div style={{ display: "flex", gap: 4 }}>
			{[...Array(pixelCount)].map((_, i) => (
				<div
					key={i}
					style={{
						width: pixelSize,
						height: pixelSize,
						background: i < filledPixels ? filledColor : emptyColor,
						borderRadius: 4,
						border: "1px solid #888"
					}}
				/>
			))}
		</div>
	);
};

export default PixelProgressBar;
