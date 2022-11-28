import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  min-width: 300px;
  gap: 0;
`;
const Title = styled.div`
  min-height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 9px;
  gap: 10px;
`;

const TitleText = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const TitleCount = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 15px;
  width: 26px;
  height: 20px;
  background: #e8ebef;
  border-radius: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #8c939f;
`;

const TaskWrp = styled.div`
  min-height: 100vh;
  background: #fff;
  width: 100%;
  border: 1px solid #f3f3f3;
  padding: 10px;
  min-width: 290px;
`;
const TaskHeader = styled.div`
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TasksColumn = ({
  row = { id: "", title: "", cards_ids: [] },
  data,
}) => {
  return (
    <Container>
      <TaskHeader>
        <Title>
          <TitleText>{row.title}</TitleText>
          <TitleCount>{row.cards_ids?.length}</TitleCount>
        </Title>
      </TaskHeader>
      {
        <Droppable droppableId={row.id}>
          {(provided) => (
            <TaskWrp {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((card, index) => (
                <Task
                  title={row.title}
                  key={card.id}
                  card={card}
                  background="#FEC6B7"
                  index={index}
                />
              ))}
              {provided.placeholder}
            </TaskWrp>
          )}
        </Droppable>
      }
    </Container>
  );
};
