import styled from "@emotion/styled";

export const StyledInputContainer = styled.div`
	position: relative;
	display: inline-block;
	max-width: 350px;

	span {
		position: absolute;
		color: ${({ theme }) => theme.colors.red};
		font-weight: 500;
		font-size: 13px;
		line-height: 23px;
		right: 10px;
		top: 7px;
	}
`;

export const StyledInput = styled.input`
	padding: 0.7rem 1rem;
	width: 350px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.inputBg};
  transition: all .2s ease-in;
  color: ${({ theme }) => theme.colors.darkBlack};
	border: 1px solid
		${({ theme, error }) => {
			if (error) {
				return theme.colors.red;
			}
			return `${theme.colors.gray}3F`;
		}};
	font-size: 13px;
	font-weight: 500;

	::placeholder {
		color: ${({ theme }) => `${theme.colors.darkBlack}3F`};
	}

	:focus,
	:focus-visible {
		outline: none;
	}
`;
