import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 1.5rem;
`;
export const Row = styled.div`
  display: flex;
  text-align: left;
  padding-bottom: 0.5rem;
`;

export const Cell = styled.div`
  flex: 1;
  font-size: 16px;
`;

export const HeaderCell = styled(Cell)`
  font-weight: bold;
  border-bottom: 2px solid #333;
`;
