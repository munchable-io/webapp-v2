import { FiLoader } from "react-icons/fi";
import { LoadingWrapper } from "./Loading.styled";

const Loading = ({ size }) => {
	return (
		<LoadingWrapper size={size}>
			<FiLoader />
		</LoadingWrapper>
	);
};

export default Loading;
