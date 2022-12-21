import ItemModal from "../features/item/ItemModal";
import ItemsList from "../features/item/ItemsList";
import useComponentVisible from "../features/ui/hooks/useComponentVisible";
import { MenuContainer, MenuWrapper } from "../features/menu/menu.styled";
import Categories from "../features/menu/Categories/Categories";
import { HeaderContent, HeaderTag } from "../features/ui/Header/Header.styled";
import { FiInfo } from "react-icons/fi";

const MenuPage = () => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    return (
        <MenuWrapper>
            {/* <Categories /> */}
            <MenuContainer>
                <HeaderContent>
                    <div className="contentFlex">
                        <h3>1110 Emanuel Cleaver II Blvd. Kansas City, MO</h3>
                    </div>
                    <div className="contentRow">
                        <p>Open today until 10pm</p>
                        <FiInfo />
                    </div>
                    <div className="contentRow">
                        <HeaderTag>
                            Delicious Chinese food, made fresh every day!
                        </HeaderTag>
                    </div>
                </HeaderContent>
                {/* page content  */}
                <ItemsList
                    modifyModal={(state) => setIsComponentVisible(state)}
                />

                {/* item modal  */}
                {isComponentVisible && (
                    <ItemModal
                        ref={ref}
                        modifyModal={(state) => setIsComponentVisible(state)}
                    />
                )}
            </MenuContainer>
        </MenuWrapper>
    );
};

export default MenuPage;
