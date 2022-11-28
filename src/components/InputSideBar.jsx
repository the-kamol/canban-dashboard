import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
const InputCustom = styled.input`
  width: 187px;
  height: 32px;
  background: #2d4071;
  border-radius: 4px;
  border: none;
  margin-top: 10px;
  padding: 10px;
  color: #8c939f;
`;
const Container = styled.div`
  position: relative;
`;
const Glass = styled(SearchIcon)`
  position: absolute;
  right: 25px;
  top: 18px;
`;
export const InputSideBar = ({ handler }) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
    handler(e.target.value);
  };

  return (
    <Container>
      <InputCustom
        placeholder="Search..."
        value={value}
        onChange={onChangeInput}
      />
      <Glass />
    </Container>
  );
};
