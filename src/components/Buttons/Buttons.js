import * as S from "./styled";

const Buttons = ({ children, type, variant }) => {
	return <S.StyledButton type={type} variant={variant}>{children}</S.StyledButton>;
};

export default Buttons;
