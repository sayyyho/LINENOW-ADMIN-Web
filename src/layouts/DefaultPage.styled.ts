import styled from "styled-components";

export const DefaultLayoutGrid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 16rem 1fr;
  height: 100vh;
`;
export const DefaultLayoutOutletWrapper = styled.section`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;
