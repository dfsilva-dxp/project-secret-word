import { Outlet } from "react-router-dom";

import { Container, Content } from "components";

const Base = () => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Base;
