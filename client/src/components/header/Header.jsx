import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataProvider";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const UserLogo = styled(Toolbar)`
  justify-content: center;
  & > div {
    padding: 20px;
    color: white;
    text-decoration: solid;
    padding: 10px;
    background-color: #090;
  }
`;

const Header = () => {
  const { account, setAccount } = useContext(DataContext);

  useEffect(() => {
    if (account.name === null || account.name.length === 0) {
      const userDetailString = sessionStorage.getItem("user");
      const userDetail = JSON.parse(userDetailString);
      if (userDetail != null) {
        setAccount({ name: userDetail.name, username: userDetail.username });
      }
    }
  }, []);

  const logout = function () {
    setAccount({ name: "", username: "" });

    sessionStorage.clear();
    console.log("ajhjahj");
  };

  return (
    <Component>
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/account" onClick={logout}>
          LOGOUT
        </Link>
        <UserLogo>
          <div>
            {account.name != null && account.name.length > 0 ? `admin` : "user"}
          </div>
        </UserLogo>
      </Container>
    </Component>
  );
};

export default Header;
