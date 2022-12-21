import styled from "styled-components";

export const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const MenuContainer = styled.section`
    max-width: 1400px;
    padding: 1rem 0;
`;

export const MenuInfo = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    li {
        background: var(--primary-light-gray);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: black;

        svg {
            width: 0.8rem;
            height: 0.8rem;
        }
    }

    @media (max-width: 550px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;
