import { useState } from "react";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projecstState, setProjectState] = useState({
    currentAction: "adding",
    selectedProjectId: undefined,
    projects: [],
  });

  console.log("projects", projecstState);

  let content;

  if(projecstState.selectedProjectId === null) {
    content = <NewProjectForm onAdd={handleAddProject}/>;
  } else if (projecstState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  } 
  // else {
  //   content = <ProjectDetails />;}

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
      ...prevState, 
      selectedProjectId: null,
     };
  });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString()
      };
      return {
      ...prevState, 
      projects: [...prevState.projects,
        newProject
      ],
     };
  });
}
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
