import React from "react";
import styled, { css } from "styled-components";

export const ToolsItem = ({ handler, icon, active, children }) => {
  const Text = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  `;
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 138px;
    height: 50px;
    border-radius: 0px 8px 8px 0px;
    // padding: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    border: 5px solid transparent;
    transition: 0.2s;
    padding-left: 10px;
    // margin-top: 10px;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
    ${() =>
      active &&
      css`
        border-left-color: #0094ff;
        color: #0094ff;
        background: #ffffff;
      `}
  `;
  const StyledLogo = styled(icon)`
    height: 28px;
    width: 28px;
    display: inline-block;

    ${() =>
      active &&
      css`
        path {
          fill: #0094ff;
        }
      `}
  `;
  return (
    <Container onClick={handler}>
      <StyledLogo
        primaryColor={active ? "#0094FF" : "#61DAFB"}
        secondaryColor="violet"
      />
      <Text>{children}</Text>
    </Container>
  );
};
