import {setProjectsToggle} from "../controllers/projects";
import {ProjectForm} from "../components/project-form";

export const setProjectPage = () => {
  // настройка переключения списков проектов
  setProjectsToggle();

  let projectFormWrapperElement = document.querySelector('.project__form-wrapper');
  if (projectFormWrapperElement) {
    const projectFormWrapper = new ProjectForm(projectFormWrapperElement);
  }
}
