import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, ScaleFade } from '@chakra-ui/react';
import _ from 'lodash';
import { memo, ChangeEvent } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import { AutoResizeTextarea } from './AutoResizeTextArea';

type TaskProps = {
  index: number;
  task: TaskModel;
  updateTask: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  deleteTask: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({ index, task, updateTask, deleteTask, onDropHover }: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index },
    onDropHover,
  );

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    updateTask(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        ref={ref}
        as="div"
        role="group"
        position="relative"
        rounded="lg"
        w={200}
        pl={3}
        pr={7}
        pt={3}
        pb={1}
        boxShadow="xl"
        cursor="grab"
        fontWeight="bold"
        userSelect="none"
        bgColor={task.color}
        opacity={isDragging ? 0.5 : 1}
      >
        <IconButton
          position="absolute"
          top={0}
          right={0}
          zIndex={100}
          aria-label="delete-task"
          size="md"
          colorScheme="solid"
          color={'gray.700'}
          icon={<DeleteIcon />}
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
          onClick={handleDeleteClick}
        />
        <AutoResizeTextarea
          value={task.title}
          fontWeight="semibold"
          cursor="inherit"
          border="none"
          p={0}
          resize="none"
          minH={70}
          maxH={200}
          focusBorderColor="none"
          color="gray.700"
          onChange={handleTitleChange}
        />
      </Box>
    </ScaleFade>
  );
}

export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.deleteTask === next.deleteTask &&
    prev.onDropHover === next.onDropHover &&
    prev.updateTask === next.updateTask
  ) {
    return true;
  }

  return false;
});
