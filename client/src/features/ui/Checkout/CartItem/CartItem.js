import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromLocalCart } from "../../../users/users.slice";
import Counter from "../Counter/Counter";
import { StyledItem } from "./CartItem.styled";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<StyledItem>
			<section className="flex-row">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGQFAm_pPERw-r3--vykViGg4nAbPbUvfdA&usqp=CAU"
					alt=""
				/>
				<div>
					<p className="xs title">{item?.name}</p>
					<p className="xs desc">
						<span className="gray">Details: </span>Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Amet, ut!
					</p>
				</div>
			</section>
			<section className="flex-column">
				<Counter id={item?.id} count={item?.qty} />
				<Link onClick={() => dispatch(deleteFromLocalCart(item?.id))}>
					<p className="xs">remove</p>
				</Link>
				<p className="xs">${(item?.price * item?.qty).toFixed(2)}</p>
			</section>
		</StyledItem>
	);
};

export default CartItem;
