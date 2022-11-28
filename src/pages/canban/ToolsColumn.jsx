import React, { useState } from "react";
import styled from "styled-components";
import { ToolsItem } from "../../components/ToolsItem";
import { ReactComponent as FilesIcon } from "../../assets/icons/filesIcon.svg";
import { ReactComponent as NotesIcon } from "../../assets/icons/notesIcon.svg";
import { ReactComponent as SheduleIcon } from "../../assets/icons/sheduleIcon.svg";
import { ReactComponent as TasksIcon } from "../../assets/icons/tasksIcon.svg";
import { ReactComponent as RoadmapIcon } from "../../assets/icons/roadmap.svg";

const Container = styled.div`
  max-width: 154px;
  background: #f5f8fa;
  width: 100%;
  padding-right: 10px;
  .header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #222222;
  }
`;

export const ToolsColumn = () => {
  const [items, setItems] = useState([
    { name: "Roadmap", icon: RoadmapIcon, isActive: true, id: 0 },
    { name: "Shedule", icon: SheduleIcon, isActive: false, id: 1 },
    { name: "Tasks", icon: TasksIcon, isActive: false, id: 2 },
    { name: "Notes", icon: NotesIcon, isActive: false, id: 3 },
    { name: "Files", icon: FilesIcon, isActive: false, id: 4 },
  ]);

  const setActiveItem = (id) => {
    setItems((prev) =>
      prev.map((i) =>
        id === i.id ? { ...i, isActive: true } : { ...i, isActive: false }
      )
    );
  };

  return (
    <Container>
      <div className="header">Tools</div>
      {items.map((i) => (
        <ToolsItem
          handler={() => setActiveItem(i.id)}
          key={i.id}
          active={i.isActive}
          icon={i.icon}
        >
          {i.name}
        </ToolsItem>
      ))}
    </Container>
  );
};
