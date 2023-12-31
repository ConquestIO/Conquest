import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import Select from 'react-select';

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

  retArr.push(unitTests, integrationTests, e2eTests, functionalTests);

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
  if (droppableDestination.droppableId == 0)
    updateTestCategory({ ...removed }, 'unit');
  else if (droppableDestination.droppableId == 1)
    updateTestCategory({ ...removed }, 'integration');
  else if (droppableDestination.droppableId == 2)
    updateTestCategory({ ...removed }, 'e2e');
  else if (droppableDestination.droppableId == 3)
    updateTestCategory({ ...removed }, 'functional');

  return result;
};

const updateTestCategory = async (test, newCategory) => {
  test.category = newCategory;
  try {
    await fetch('/api/tests', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        id: test._id,
        status: test.status,
        category: test.category,
        featureId: test.feature_id,
      }),
    });
  } catch (err) {
    console.log('Update Test Category: ERROR: ', err);
  }
};

const updateTestStatus = async (test, newStatus) => {
  test.status = newStatus;
  try {
    const res = await fetch('/api/tests', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        id: test._id,
        status: test.status,
        category: test.category,
        featureId: test.feature_id,
      }),
    });
  } catch (err) {
    console.log('Update Test Status: ERROR: ', err);
  }
};

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'rgb(235, 236, 240)',
  padding: 8,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
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
  useEffect(() => {
    setState(normalizedTests(tests));
  }, [tests]);
  const onDragEnd = (result) => {
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
  };

  const updateStatus = (test, newStatus, location) => {
    updateTestStatus({ ...test }, newStatus);
    test.status = newStatus;
    const newState = state.slice();

    for (let i = 0; i < newState[location].length; i++) {
      if (newState[location][i].id === test._id) {
        newState[location][i] = test;
        break;
      }
    }
    setState(newState);
  };

  return (
    <div className='flex h-5/6 w-full'>
      <DragDropContext onDragEnd={onDragEnd} style={{}}>
        <div className='flex flex-col items-center gap-3 w-[25%] min-w-[196px]'>
          <h1 className='font-bold whitespace-nowrap'>Unit Testing</h1>
          <DroppableCard
            items={state[0].slice()}
            droppableId={'0'}
            updateStatus={updateStatus}
            rounded='rounded-l-lg'
          />
        </div>

        <div className='flex flex-col items-center gap-3 w-[25%] min-w-[196px]'>
          <h1 className='font-bold whitespace-nowrap'>Integration Testing</h1>
          <DroppableCard
            items={state[1].slice()}
            droppableId={'1'}
            updateStatus={updateStatus}
            className='h-full'
          />
        </div>
        <div className='flex flex-col items-center gap-3 w-[25%] min-w-[196px]'>
          <h1 className='font-bold whitespace-nowrap'>End-to-End Testing</h1>
          <DroppableCard
            items={state[2].slice()}
            droppableId={'2'}
            updateStatus={updateStatus}
          />
        </div>
        <div className='flex flex-col items-center gap-3 w-[25%] min-w-[196px]'>
          <h1 className='font-bold whitespace-nowrap'>Functional Testing</h1>
          <DroppableCard
            items={state[3].slice()}
            droppableId={'3'}
            updateStatus={updateStatus}
            rounded='rounded-r-lg'
          />
        </div>
      </DragDropContext>
    </div>
  );
};

const DroppableCard = (props) => {
  return (
    <Droppable droppableId={props.droppableId} key={props.droppableId}>
      {(provided, snapshot) => (
        <div
          className={`border-r border-2 ${props.rounded}`}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          <h3 className='self-center whitespace-nowrap'>{props.header}</h3>
          {props.items.map((item, index) => (
            <DraggableCard
              item={item}
              index={index}
              key={index}
              updateStatus={props.updateStatus}
              droppableId={props.droppableId}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const DraggableCard = (props) => {
  const statuses = [
    { value: 'notStarted', label: 'Not Started' },
    { value: 'inProgress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];
  const statusIndex =
    props.item.status === 'completed'
      ? 2
      : props.item.status === 'inProgress'
      ? 1
      : 0;
  return (
    <Draggable draggableId={`${props.item._id}`} index={props.index}>
      {(provided, snapshot) => (
        <div
          className='flex flex-col gap-2 items-left rounded bg-white drop-shadow p-3'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='text-sm font-semibold'>{props.item.test_name}</div>
          <div className='text-sm'>Description: {props.item.description}</div>
          <div className='text-sm flex items-center gap-2'>
            Status:{' '}
            <button>
              <Select
                options={statuses}
                menuPortalTarget={document.body}
                styles={{ menu: (provided) => ({ ...provided, zIndex: 9999 }) }}
                onChange={(e) =>
                  props.updateStatus(
                    { ...props.item },
                    e.value,
                    props.droppableId
                  )
                }
                defaultValue={statuses[statusIndex]}
              />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TestChart;
