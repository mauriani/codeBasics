import ReactLoading from "react-loading";

import { Container, LoadingContainer } from "./styles";

export function Loading() {
  return (
    <Container>
      <LoadingContainer>
        <ReactLoading
          type={"spin"}
          color={"#4FC3F7"}
          height={"7%"}
          width={"7%"}
        />
      </LoadingContainer>
    </Container>
  );
}
