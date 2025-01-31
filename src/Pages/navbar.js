import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";
import "./Page.css";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import Container from '@mui/material/Container'
import { Typography } from "@mui/material";


// Navitem component
const Navitem = () => {
  return (
    <div className="Catogery " id="Nav-list">
      <Link to="/Choose-resume-templet">

        <button className="btn btn-outline-primary  btn-sm">Resume</button>
      </Link>
      <Link to={"/Create-CV"}>
        <button className="btn btn-outline-primary btn-sm" >CV</button>
      </Link>
      <Link to={"/Cover-letter"}>
        <button className="btn btn-outline-primary btn-sm w-auto">Cover letter</button>
      </Link>
    </div>
  );
};

export const Navbar = () => {
  const [Toggle, settoggle] = useState(window.innerWidth > 768);

  const menu = (
    <Menu style={{ maxwidth: "100%" }}>
      <Menu.Item key="1">
        <div className="toggle-catogery ">
          <Navitem />
        </div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
        const handleResize = () => settoggle(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <Container maxWidth="md" className="mt-2 " style={{justifyContent:"center",position:"sticky" ,top:0,zIndex:2}}>

        <header >
          <nav className="card shadow  sticky-top mt-4" >
            <div className="overall-Navbar">
              <span>
                <img src="logo.svg" alt="logo" height={35} width={35} />
              </span>
              <Typography variant="h6"><em >Resume_Creator</em></Typography> 
              <div className="dropdown-container">
                {Toggle ? (
                  <Navitem />
                ) : (
                  <Space direction="vertical">
                    <Space wrap>
                      <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <RiBarChartHorizontalFill />
                      </Dropdown>
                    </Space>
                  </Space>
                )}
              </div>
            </div>
          </nav>
        </header>
        </Container>
    </>
  );
};
