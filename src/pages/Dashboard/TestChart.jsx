import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const normalizedTests = (tests) => {
  const retArr = [];
  const unitTests = [];
  const integrationTests = [];
  const functionalTests = [];
  const e2eTests = [];

  tests.forEach((el) => {
    if (el.category === 'unit') unitTests.push(el);
    else if (el.category === 'integration') integrationTests.push(el);
    else if (el.category === 'functional') functionalTests.push(el);
    else if (el.category === 'e2e') e2eTests.push(el);
  });

  retArr.push(unitTests, e2eTests, integrationTests, functionalTests);

  return retArr;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = source;
  const destClone = destination;
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);
  const result = [];
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  if (droppableDestination.droppableId == 0) updateTest({ ...removed }, 'unit');
  else if (droppableDestination.droppableId == 1)
    updateTest({ ...removed }, 'integration');
  else if (droppableDestination.droppableId == 2)
    updateTest({ ...removed }, 'e2e');
  else if (droppableDestination.droppableId == 3)
    updateTest({ ...removed }, 'functional');
  return result;
};

const updateTest = async (test, newCategory) => {
  test.category = newCategory;
  try {
    await fetch('/api/tests', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(test),
    });
  } catch (err) {
    console.log('Log in: ERROR: ', err);
  }
};

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'rgb(235, 236, 240)',
  padding: 8,
  width: 250,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
const reorder = (list, startIndex, endIndex) => {
  const result = list;
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const TestChart = () => {
  const tests = useAppSelector((state) => state.app.tests);
  const [state, setState] = useState(normalizedTests(tests));

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setState(newState);
    }
  }

  return (
    <div className='flex'>
      <DragDropContext onDragEnd={onDragEnd}>
        <DroppableCard
          items={state[0]}
          droppableId={'0'}
          header={'Unit Testing'}
        />
        <DroppableCard
          items={state[1]}
          droppableId={'1'}
          header={'Integration Testing'}
        />
        <DroppableCard
          items={state[2]}
          droppableId={'2'}
          header={'End-to-End Testing'}
        />
        <DroppableCard
          items={state[3]}
          droppableId={'3'}
          header={'Functional Testing'}
        />
      </DragDropContext>
    </div>
  );
};

const DroppableCard = (props) => {
  return (
    <Droppable droppableId={props.droppableId} key={props.droppableId}>
      {(provided, snapshot) => (
        <div
          className='border-r border-2'
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          <h3 className='self-center whitespace-nowrap'>{props.header}</h3>
          {props.items.map((item, index) => (
            <DraggableCard item={item} index={index} key={index}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const DraggableCard = (props) => {
  return (
    <Draggable draggableId={`${props.item.id}`} index={props.index}>
      {(provided, snapshot) => (
        <div
          className='flex flex-col gap-2 items-left rounded bg-white drop-shadow p-3'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='text-sm font-semibold'>{props.item.testName}</div>
          <div className='text-sm'>Description: {props.item.description}</div>
          <div className='text-sm'>Status: {props.item.status}</div>
        </div>
      )}
    </Draggable>
  );
};

export default TestChart;
