/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import plus from "../assets/icons/plus.png";
import styled from "styled-components";

const CustomButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  gap: 8px;
  width: 114px;
  height: 40px;
  background: #0094ff;
  color: white;
  border-radius: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;
  transition: 0.3s;
  &:hover {
    background: rgb(0, 118, 204);
    transform: scale(1.02);
  }
`;
export const Button = ({ handler, children, type = "default" }) => {
  return (
    <CustomButton onClick={handler}>
      <>
        <img src={plus} />
        {children}
      </>
    </CustomButton>
  );
};
