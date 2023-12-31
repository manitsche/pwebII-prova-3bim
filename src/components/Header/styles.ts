import { styled } from "styled-components";

export const Container = styled.header`
    background: #006300;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1{
            color: #120a8f;
            font-size: 32px;
        }

        h2 {
            color: #000000;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`