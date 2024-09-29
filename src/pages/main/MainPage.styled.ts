import styled from "styled-components";

export const MainWaitingCardList = styled.section`
  display: grid;
  align-items: start;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  grid-template-columns: repeat(1, 1fr); /* 기본 1열 */

  @media (min-width: 660px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 660px 이상일 때 2열 */
  }

  @media (min-width: 1004px) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 1004px 이상일 때 3열 */
  }

  @media (min-width: 1348px) {
    grid-template-columns: repeat(4, 1fr); /* 화면이 1348px 이상일 때 4열 */
  }

  width: 100%;

  padding: 1.5rem 2rem;
`;
