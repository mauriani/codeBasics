import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  footer {
    display: flex;
    justify-content: center;
    flex-shrink: 1;
    flex-wrap: wrap;
    padding: 0 100px;
    gap: 1rem;
  }
`;
