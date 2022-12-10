import { ToastsWrapper } from "./Toast.styled";
import { useSelector } from "react-redux";
import { getToasts } from "./Toast.slice";
import Toast from "./Toast";

const Toasts = () => {
	const toasts = useSelector(getToasts);

	return (
		<ToastsWrapper>
			{toasts.map((toast) => (
				<Toast key={toast.id} toast={toast} />
			))}
		</ToastsWrapper>
	);
};

export default Toasts;
