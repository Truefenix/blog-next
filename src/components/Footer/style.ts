import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`
        text-align: center;
        color: ${theme.colors.gray};
        font: ${theme.font.sizes.small};
    `}
`;
