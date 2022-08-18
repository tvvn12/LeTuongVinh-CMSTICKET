import MenuComponent from "../menu/Menu";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Layout, Row, Space } from "antd";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <Row>
        <Col span={4}>
          <div>
            <svg
              width="133"
              height="58"
              viewBox="0 0 133 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="133" height="58" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_17895_40"
                    transform="translate(-0.0037594) scale(0.0037594 0.00862069)"
                  />
                </pattern>
                <image
                  id="image0_17895_40"
                  width="268"
                  height="116"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <MenuComponent></MenuComponent>
          
        </Col>

        <Outlet></Outlet>
      </Row>
    </>
  );
};

export default MainLayout;
