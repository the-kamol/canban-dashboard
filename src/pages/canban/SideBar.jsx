/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/bordio-logo.svg";
import image from "../../assets/icons/test.png";
import { InputSideBar } from "../../components/InputSideBar";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  max-width: 11.41%;
  width: 100%;
  background-color: #0f1d40;
  min-width: 219px;
`;

const StyledLogo = styled(Logo)`
  display: flex;
  margin-top: 24px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

const SideBarMain = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const WorkSpaceInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 16px;
  gap: 8px;
  align-items: center;
  height: 34px;
  font-size: 14px;
  background: #2d4071;
  margin-top: 8px;
  color: #ffffff;
  img {
    width: 22px;
  }
`;

const List = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 13px;
  font-size: 13px;
  align-items: self-start;
  position: relative;
  color: #ffffff;
`;
const ArrowStyled = styled(Arrow)``;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: self-start;
  font-weight: 400;
  font-size: 14px;
  line-height: 2px;
  color: #8c939f;
  padding-top: 11px;
`;

export const SideBar = () => {
  const [sections, setSections] = useState([
    {
      name: "Favorites",
      isOpen: false,
      id: 1,
      data: ["Marketing", "Mobile App"],
    },
    {
      name: "My Projects",
      isOpen: false,
      id: 2,
      data: ["Marketing", "Mobile App"],
    },
  ]);

  const onOpenSection = (id) => {
    setSections((prev) =>
      prev.map((s) => (id === s.id ? { ...s, isOpen: !s.isOpen } : { ...s }))
    );
  };
  return (
    <Container>
      <StyledLogo />
      <InputSideBar />
      <SideBarMain>
        <WorkSpaceInfo>
          <img placeholder="asd" src={image} />
          My workspace
        </WorkSpaceInfo>
        {sections.map((s) => (
          <List onClick={() => onOpenSection(s.id)}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: "flex-start",
              }}
            >
              <ArrowStyled
                style={{
                  transform: `rotate(${!s.isOpen ? 180 : 0}deg)`,
                }}
              />
              {s.name}
            </div>
            <Item
              style={{
                display: `${!s.isOpen ? "none" : "flex"}`,
                flexDirection: "column",
              }}
            >
              {s.data.map((i) => (
                <p>{i}</p>
              ))}
            </Item>
          </List>
        ))}
      </SideBarMain>
    </Container>
  );
};
