import Toast from "./Toast";
import { ToastWrapper } from "./Toast.styled";

const Toasts = ({ toasts, deleteToast }) => {
	return (
		<ToastWrapper>
			{toasts?.map((toast) => {
				return (
					<Toast
						key={toast._id}
						status={toast.status}
						title={toast.title}
						message={toast.message}
						deleteToast={() => deleteToast(toast._id)}
					/>
				);
			})}
		</ToastWrapper>
	);
};

export default Toasts;
