import { useTheme } from "@emotion/react";
import { useState } from "react";
import Select from "react-select";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const SelectComponent = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const theme = useTheme();
	return (
		<Select
			value={selectedOption}
			onChange={setSelectedOption}
			options={options}
			styles={{
				control: (styles, state) => {
					return {
						...styles,
						border: state.isFocused
							? `1px solid ${theme.colors.darkPurple}`
							: `1px solid ${theme.colors.gray}3F`,
						borderRadius: "4px",
						width: "350px",
						color: theme.colors.darkBlack,
						backgroundColor: theme.colors.inputBg,
						boxShadow: "none",
						"&:hover": {
							border: `1px solid ${theme.colors.darkPurple}`,
						},
					};
				},
				indicatorSeparator: () => null,
				dropdownIndicator: (styles) => ({
					...styles,
					color: theme.colors.darkPurple,
				}),
				valueContainer: (styles) => ({
					...styles,
					padding: "0.5rem 1rem",
				}),
				singleValue: (styles) => ({
					...styles,
					margin: 0,
					fontSize: "13px",
					color: theme.colors.darkBlack,
				}),
				input: (styles) => ({
					...styles,
					margin: 0,
					padding: 0,
				}),
        menu: (styles) => ({
					...styles,
					backgroundColor: theme.colors.inputBg,
          width: "350px",
				}),
			}}
		/>
	);
};

export default SelectComponent;
