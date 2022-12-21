import styled from "styled-components";

export const StyledItemCard = styled.section`
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 1;
    padding: 1rem;
    color: white;
    border-radius: 8px;
    transition: all 0.25s ease-in;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    div.cardBody {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        div.cardRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 1rem;

            button {
                background: var(--restaurant-primary);
                border: none;
                outline: none;
                color: white;
                font-weight: 600;
                width: 100%;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    &:hover {
        cursor: pointer;
        box-shadow: -5px 5px 5px 5px rgba(0, 0, 0, 0.75);
    }
`;

export const ItemCardPills = styled.ul`
    display: flex;
    column-gap: 0.25rem;

    li {
        list-style: none;
        text-transform: uppercase;
        font-size: 0.55rem;
        background: var(--bg-primary);
        padding: 2px 0.5rem;
        border-radius: 50px;
    }
`;
