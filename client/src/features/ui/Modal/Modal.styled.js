import styled from "styled-components";

export const StyledModal = styled.main`
    background: white;
    position: fixed;
    width: 600px;
    height: 90vh;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    z-index: 100;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ModalHeader = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-light-gray);

    svg {
        &:hover {
            cursor: pointer;
        }
    }
`;

export const ModalBody = styled.section`
    padding: 1rem 2rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const ModalSection = styled.section`
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    justify-content: space-between;
    align-items: ${(props) =>
        props.direction
            ? props.direction === "row"
                ? "center"
                : "flex-start"
            : "center"};
    column-gap: 0.5rem;
    row-gap: 0.5rem;

    div.row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ModalFooter = styled.footer`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--primary-light-gray);
`;
