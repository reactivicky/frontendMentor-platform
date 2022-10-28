import * as S from "./styled";

const Checkbox = ({ checked }) => {
	return (
		<S.StyledCheckbox>
			<S.StyledInput type="checkbox" id="checkbox" />
			<S.StyledLabel htmlFor="checkbox" checked={false}>
				Label
			</S.StyledLabel>
		</S.StyledCheckbox>
	);
};

export default Checkbox;
