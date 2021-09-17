import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5 th at 2.30 pm ",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6 th at 2.30 pm ",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5 th at 2.30 pm ",
      reminder: false,
    },
  ]);

  // Delete Task

  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    //console.log('toggled element with ' + id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
