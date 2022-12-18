import axios from "../features/api/axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../features/auth/auth.slice";
import { addToast } from "../features/ui/Toast/Toast.slice";
import { useNavigate } from "react-router-dom";

const RestaurantLoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector(getUser);

	const [restaurantName, setRestaurantName] = useState("");

	const handleClick = async (e) => {
		e.preventDefault();

		// validate data
		let missingFields = [];
		if (!restaurantName) {
			missingFields.push("Restaurant Name");
		}

		if (missingFields.length === 0) {
			// try to add restaurant to db
			const restaurant = {
				name: restaurantName,
				admin: user?.userId,
			};
			try {
				const response = await axios.post("/restaurants", restaurant);

				// set user's restaurant id to result
				await dispatch(
					updateUser({
						id: user?.userId,
						payload: {
							role: "manager",
							restaurantId: response.data?._id,
						},
					})
				);

				// clear form
				setRestaurantName("");

				// redirect to restaurant dashboard
				navigate("/account", { replace: true });

				// send success message
				dispatch(
					addToast({
						status: "success",
						header: "Success!",
						body: `${response.data?.name} has been created!`,
					})
				);
			} catch (err) {
				dispatch(
					addToast({
						status: "error",
						header: "Unable to create restaurant:",
						body: "We are unable to process your request at this time.",
					})
				);
			}
		} else {
			dispatch(
				addToast({
					status: "warning",
					header: "Cannot submit form:",
					body: `Missing fields: ${missingFields.join(", ")}`,
				})
			);
		}
	};

	return (
		<div className="container">
			<h2>Create Restaurant</h2>
			<form autoComplete="off">
				<label htmlFor="restaurantName">Restaurant Name:</label>
				<input
					type="text"
					id="restaurantName"
					value={restaurantName}
					onChange={(e) => setRestaurantName(e.target.value)}
				/>

				<button type="submit" onClick={handleClick}>
					Create Account
				</button>
			</form>
		</div>
	);
};

export default RestaurantLoginPage;
