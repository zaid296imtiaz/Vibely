import React from "react";
import {
  KanbanBoardContainer,
  KanbanBoard,
} from "../components/tasks/kanban/board";
import KanbanColumn from "../components/tasks/kanban/column";
import KanbanItem from "../components/tasks/kanban/item";

const Tasks = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn>
            <KanbanItem>
                This is my first todo
            </KanbanItem>
          </KanbanColumn>
          <KanbanColumn></KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};

export default Tasks;
