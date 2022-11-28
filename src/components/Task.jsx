import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";

export const Task = ({ card, index, title }) => {
  const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    background: ${card.color};
    max-height: 84px;
    height: 100%;
    border-radius: 8px;
    margin-top: 10px;

    ${() =>
      title === "Completed" &&
      css`
        background: #f0f0f0;
        color: #a5a5a5;
        text-decoration: line-through;
      `}
  `;
  const Task = styled.div``;

  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {(provided) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Task>{card.text}</Task>
          <Task>{card.time}</Task>
        </TaskContainer>
      )}
    </Draggable>
  );
};
