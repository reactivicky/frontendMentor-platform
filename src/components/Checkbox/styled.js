import styled from "@emotion/styled";

export const StyledCheckbox = styled.div`
	max-width: 350px;
	padding: 12px;
	background-color: ${({ theme }) => theme.colors.nearlyWhite};
	color: ${({ theme }) => theme.colors.darkBlack};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  gap: .6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s ease-in;

  :hover {
    background-color: ${({ theme }) => `${theme.colors.darkPurple}3F`};
  }
`;

export const StyledLabel = styled.label`
	pointer-events: none;
  cursor: pointer;
	text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
	opacity: ${({ checked }) => (checked ? 0.5 : 1)};
`;

export const StyledInput = styled.input`
  cursor: pointer;
`
