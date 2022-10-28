import * as S from "./styled";

const Inputs = ({ hasError, value, onChange }) => {
	return (
		<S.StyledInputContainer>
			<S.StyledInput
				type="text"
				placeholder="input"
				error={hasError}
				value={value}
				onChange={onChange}
			/>
			{hasError && <span>Can't be empty</span>}
		</S.StyledInputContainer>
	);
};

export default Inputs;
