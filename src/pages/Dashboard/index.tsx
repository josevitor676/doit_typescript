import {
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { FirstTask } from "./FirstTask";
import { NotFound } from "./NotFound";
import { TaskList } from "./TasksList";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { signOut, user, accessToken } = useAuth();
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();
  const {
    isOpen: isTaskDetailOpen,
    onClose: onTaskDetailClose,
    onOpen: onTaskDetailOpen,
  } = useDisclosure();

  

  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  const handleClick = (task: Task) => {
    setSelectedTask(task);
    onTaskDetailOpen();
  };

  if (notFound) {
    return (
      <NotFound isTaskDetailOpen={isTaskDetailOpen} onTaskDetailClose={onTaskDetailClose} selectedTask={selectedTask} taskNotFound={taskNotFound}/>
    );
  }

  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask/>
      ) : (
        <TaskList handleClick={handleClick} loading={loading} tasks={tasks}/>
      )}
    </>
  );
};
