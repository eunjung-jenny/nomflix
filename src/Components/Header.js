import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(252, 252, 252, 0.1);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 10px 15px;
  border-bottom: 3px solid
    ${(props) =>
      props.current ? "yellowgreen" : "transparent"};
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/" replace>
          Home
        </SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv" replace>
          TV
        </SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search" replace>
          Search
        </SLink>
      </Item>
    </List>
  </Header>
));
