/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../assets/icons/arrow-b.svg";

function useOutsideClick(ref, e) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        e();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [e, ref]);
}

const DropDownStyled = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  gap: 8px;
  height: 40px;
  background: #e1e4e7;
  border-radius: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;
const ArrowStyled = styled(Arrow)`
  ${(props) =>
    props.open &&
    css`
      transform: rotate(180deg);
    `}
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  position: absolute;
  width: 132px;
  height: 132px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  top: 40px;
`;
const ListItem = styled.div`
  margin-top: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 120px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  &:hover {
    background: #f5f8fa;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: #f5f8fa;
    `}
`;

export const DropDownSelect = ({ data, handler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(data[0]);

  const onCloseSelect = () => {
    setIsOpen(false);
  };
  const onSelectOption = (option) => {
    setSelectedValue(option);
    handler(option);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, onCloseSelect);

  return (
    <DropDownStyled ref={wrapperRef} onClick={() => setIsOpen(!isOpen)}>
      {selectedValue.label}
      <ArrowStyled open={isOpen} fill="black" />
      {isOpen && (
        <List>
          {data.map((s) => (
            <ListItem
              isActive={s.id === selectedValue.id}
              onClick={() => onSelectOption(s)}
              key={s.value}
            >
              {s.label}
            </ListItem>
          ))}
        </List>
      )}
    </DropDownStyled>
  );
};
