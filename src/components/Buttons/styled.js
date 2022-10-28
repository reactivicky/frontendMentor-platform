import styled from "@emotion/styled";

export const StyledButton = styled.button`
	color: ${({ theme, type }) => {
		switch (type) {
			case "primary":
			case "destructive":
			default:
				return theme.colors.white;
			case "secondary":
				return theme.colors.darkPurple;
		}
	}};
	background-color: ${({ theme, type }) => {
		switch (type) {
			case "primary":
				return theme.colors.darkPurple;
			case "secondary":
				return theme.colors.buttonSecondary;
			case "destructive":
				return theme.colors.red;
			default:
				return theme.colors.darkPurple;
		}
	}};
	border: none;
	border-radius: 100vw;
	padding: ${({ variant }) => {
		switch (variant) {
			case "large":
				return "16px 61.5px";
			case "small":
			default:
				return "10px 69.5px";
		}
	}};
	font-style: normal;
	font-weight: 700;
	font-size: ${({ variant }) => {
		switch (variant) {
			case "large":
				return "15px";
			case "small":
			default:
				return "13px";
		}
	}};
	cursor: pointer;
	transition: all .2s ease-in;

	:hover {
		background-color: ${({ theme, type }) => {
			switch (type) {
				case "primary":
					return theme.colors.lightPurple;
				case "secondary":
					return theme.colors.buttonSecondaryHover;
				case "destructive":
					return theme.colors.lightRed;
				default:
					return theme.colors.lightPurple;
			}
		}};
	}
`;
