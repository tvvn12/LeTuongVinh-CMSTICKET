import MenuComponent from "../menu/Menu";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Layout, Row } from "antd";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Row>
          <Col span={12}>
            <MenuComponent></MenuComponent>
          </Col>
          <Col span={12}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default MainLayout;
