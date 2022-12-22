import styled from "styled-components";

export const AccountWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AccountHeader = styled.header`
    width: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    div.flex-column {
        h3 {
            color: var(--fg-text);
            font-weight: 600;
        }

        p {
            color: var(--fg-text);
            font-weight: 300;
        }
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }
`;

export const AccountBody = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
`;

export const AccountNav = styled.nav`
    width: 275px;
    display: flex;
    flex-direction: column;

    ul {
        width: 100%;
        border-bottom: 1px solid var(--bg-secondary);
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        row-gap: 0.25rem;

        p.sm {
            font-size: 12px;
            font-weight: 600;
            color: var(--fg-text);
        }

        li {
            width: 100%;
            list-style: none;
            padding: 0.25rem 0.5rem;
            border-radius: 5px;
            transition: all 0.25s;

            a {
                display: block;
                width: 100%;
                height: 100%;
                color: var(--fg-text);
                display: flex;
                align-items: center;
                column-gap: 0.5rem;

                p {
                    font-weight: 400;
                    text-transform: capitalize;
                }

                svg {
                    width: 0.9rem;
                    height: 0.9rem;
                    color: var(--fg-text);
                }

                &:hover {
                    text-decoration: none;
                }
            }

            &:hover {
                background: rgba(255, 255, 255, 0.1);
            }
        }

        &:last-child {
            border: none;
        }
    }
`;

export const AccountContent = styled.section`
    width: 100%;

    div.contentSection {
        h2 {
            color: var(--fg-text);
            font-weight: 400;
            padding: 1rem 0;
            border-bottom: 1px solid var(--bg-secondary);
        }

        form {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            padding: 1rem 0;

            section {
                display: flex;
                flex-direction: column;
                row-gap: 0.5rem;

                label {
                    display: block;
                    color: var(--fg-text);
                }

                input {
                    width: 440px;
                    background-color: black;
                    outline: none;
                    border: 1px solid var(--bg-secondary);
                    font-size: 1rem;
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: 5px;

                    &:active,
                    &:focus {
                        background-color: var(--bg-primary);
                        border: 2px solid var(--fg-accent);
                    }
                }

                textarea {
                    width: 440px;
                    height: 5rem;
                    resize: none;
                    background-color: black;
                    outline: none;
                    border: 1px solid var(--bg-secondary);
                    font-size: 1rem;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 5px;

                    &:active,
                    &:focus {
                        background-color: var(--bg-primary);
                        border: 2px solid var(--fg-accent);
                    }
                }

                div.note {
                    font-size: 12px;
                    color: var(--fg-muted);
                    padding: 0.25rem 0 0.5rem;
                }

                button {
                    border: none;
                    border-radius: 5px;
                    background: var(--fg-accent);
                    color: white;
                    display: inline-block;
                    width: min-content;
                    white-space: nowrap;
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
            }
        }
    }
`;
