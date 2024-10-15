import { useState } from "react";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projecstState, setProjectState] = useState({
    currentAction: "adding",
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(taskText){
    setProjectState((prevState) => {
      const taskId = Math.random().toString();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: taskText,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      } 
    });
}
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  const selectedProject = projecstState.projects.find(
    (project) => project.id === projecstState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projecstState.tasks.filter(task => task.projectId === projecstState.selectedProjectId)}
    />
  );

  if (projecstState.selectedProjectId === null) {
    content = (
      <NewProjectForm
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projecstState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  // else {
  //   content = <ProjectDetails />;}

  function handleSelectProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random().toString();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projecstState.projects}
        selectedProjectId={projecstState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
