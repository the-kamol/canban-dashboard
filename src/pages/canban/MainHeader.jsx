/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { InputSearchHeader } from "../../components/InputSearchHeader";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import image from "../../assets/icons/test.png";
import { DropDownSelect } from "../../components/DropDownSelect";

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  max-width: 75%;
  background: #ffffff;
  min-width: 100%;
  box-shadow: 0px 2px 4px #f0f1f2;
  padding: 20px;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const HeaderNothific = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .count {
    font-size: 8px;
    color: white;
    position: absolute;
    left: 50%;
    right: -25%;
    top: -12.5%;
    bottom: 50%;
    background: #f21247;
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
`;

const Bell = styled(BellIcon)``;
const dropDownData = [
  { label: "Board view", id: 1 },
  { label: "Table view", id: 2 },
  { label: "Kanban", id: 3 },
];
export const MainHeader = () => {
  return (
    <Container>
      <HeaderRow>
        <Button children={"Add new"} type="add" />
        <DropDownSelect data={dropDownData} children={"Kanban"} />
        <DropDownSelect data={dropDownData} children={"Filter"} />
      </HeaderRow>
      <HeaderRow>
        <InputSearchHeader />
        <HeaderNothific>
          <Bell />
          <div className="count">99</div>
        </HeaderNothific>
        <img placeholder="asd" src={image} />
      </HeaderRow>
    </Container>
  );
};
