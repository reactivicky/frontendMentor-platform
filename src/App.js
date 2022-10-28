import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { StyledButton, Checkbox, Inputs, Select } from "./components";

const themeLight = {
	colors: {
		background: "#F2F2F2",
		darkPurple: "#635FC7",
		lightPurple: "#A8A4FF",
		darkBlack: "#000112",
		onlyBlack: "#20212C",
		littleLightBlack: "#2B2C37",
		moreLightBlack: "#3E3F4E",
		gray: "#828FA3",
		lightGray: "#E4EBFA",
		nearlyWhite: "#F4F7FD",
		white: "#FFFFFF",
		red: "#EA5555",
		lightRed: "#FF9898",
		buttonSecondary: "#635fc71a",
		buttonSecondaryHover: "#635fc740",
		inputBg: "#FFFFFF",
	},
};

const themeDark = {
	colors: {
		background: "#F2F2F2",
		darkPurple: "#635FC7",
		lightPurple: "#A8A4FF",
		darkBlack: "#ffffff",
		onlyBlack: "#20212C",
		littleLightBlack: "#2B2C37",
		moreLightBlack: "#3E3F4E",
		gray: "#828FA3",
		lightGray: "#E4EBFA",
		nearlyWhite: "#20212C",
		white: "#FFFFFF",
		red: "#EA5555",
		lightRed: "#FF9898",
		buttonSecondary: "#FFFFFF",
		buttonSecondaryHover: "#FFFFFF",
		inputBg: "#2B2C37",
	},
};

function App() {
	const [themeColor, setThemeColor] = useState("light");
	return (
		<ThemeProvider theme={themeColor === "light" ? themeLight : themeDark}>
			<div
				className="App"
				style={{
					backgroundColor:
						themeColor === "light"
							? themeLight.colors.white
							: themeDark.colors.littleLightBlack,
				}}
			>
				<button
					onClick={() =>
						setThemeColor((prevState) =>
							prevState === "light" ? "dark" : "light"
						)
					}
				>
					Change Theme
				</button>
				<StyledButton type="primary" variant="large">
					Text
				</StyledButton>
				<StyledButton type="primary" variant="small">
					Text
				</StyledButton>
				<StyledButton type="secondary" variant="small">
					Text
				</StyledButton>
				<StyledButton type="destructive" variant="small">
					Text
				</StyledButton>
				<Checkbox />
				<Inputs />
				<Select />
			</div>
		</ThemeProvider>
	);
}

export default App;
