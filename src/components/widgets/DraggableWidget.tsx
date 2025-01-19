import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const widgets = [
  { id: '1', content: 'Revenue' },
  { id: '2', content: 'Sales' },
  { id: '3', content: 'Users' },
  { id: '4', content: 'Performance' },
];

const DraggableWidget: React.FC = () => {
  const [items, setItems] = React.useState(widgets);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="widgets">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg"
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableWidget;
