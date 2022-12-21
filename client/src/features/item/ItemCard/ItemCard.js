import { ItemCardPills, StyledItemCard } from "./ItemCard.styled";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../item.slice";

const ItemCard = ({ item, modifyModal }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedItem(item._id));
        modifyModal(true);
    };

    return (
        <StyledItemCard onClick={handleClick}>
            <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
            />
            <div className="cardBody">
                <section>
                    <h3>{item?.name}</h3>
                    <ItemCardPills>
                        <li>Vegan</li>
                        <li>Organic</li>
                    </ItemCardPills>
                </section>
                <section>
                    <p>{item?.description}</p>
                </section>
                <section>
                    <div className="cardRow">
                        <h3>${item?.price?.toFixed(2)}</h3>
                        <button>Add to Cart</button>
                    </div>
                </section>
            </div>
        </StyledItemCard>
    );
};

export default ItemCard;
