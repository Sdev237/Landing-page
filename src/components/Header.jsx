import React from "react";

import { logoApp } from "../assets/index";
import { Button } from "./Button";
import { Container } from "./Container";
import { ElipseBlueBlur } from "./theme/Header";

export const Header = () => {
  return (
    <div className="border-b border-stroke-1 ">
      <Container className={"relative bg-n-9"}>
        <div className="relative z-10 flex justify-between items-center py-4 lg:py-6">
          {/* {<img src={logoApp} width={104} height={32} alt="App_logo" />} */}Logo
          <Button theme={"primary"}>Login</Button>
        </div>
        <ElipseBlueBlur />
      </Container>
    </div>
  );
};
