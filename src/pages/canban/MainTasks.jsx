/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import {
  getCardsThunk,
  moveCardThunk,
} from "../../redux/canban/actionCreators";
import { cardsSelector, rowsListSelector } from "../../redux/canban/selectors";
import { TasksColumn } from "../../components/TasksColumn";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 100%;
  width: 100%;
  &::last-child {
    margin-right: 100px;
  }
`;

const AddStatusWrp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  min-width: 400px;
  gap: 0;
`;
const AddStatus = styled.div`
  cursor: pointer;
  min-height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 25px;
  color: #8c939f;
  gap: 10px;
  &:hover {
    color: black;
  }
`;

const Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const AddStatusHeader = styled.div`
  box-sizing: content-box;
  margin-left: -1px;
  border-bottom: 1px solid #f3f3f3;
  border-left: 1px solid #f3f3f3;
  height: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
`;

export const MainTasks = () => {
  const dispatch = useDispatch();
  const rows = useSelector(rowsListSelector);

  const onDragEnd = (data) => {
    if (!data.destination) return;
    dispatch(moveCardThunk(data));
  };

  const cards = useSelector(cardsSelector);

  // const rowCards = useMemo(() => ;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {Object.values(rows).map((row) => (
          <TasksColumn row={row} data={row.cards_ids.map((id) => cards[id])} />
        ))}
        <AddStatusWrp>
          <AddStatusHeader>
            <AddStatus>
              <Text>+Add Status</Text>
            </AddStatus>
          </AddStatusHeader>
        </AddStatusWrp>
      </Container>
    </DragDropContext>
  );
};
