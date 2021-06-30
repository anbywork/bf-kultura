import {uploadForm} from "../utils/upload-form";
import {UploadField} from "./upload-field";

export class ProjectForm {
  constructor(projectFormWrapper) {
    let form = projectFormWrapper.querySelector('form');
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      let messageClassElem = 'message';
      uploadForm(form, projectFormWrapper, messageClassElem);
    });
    const uploadFieldElement = document.querySelector('.form2__upload-field');
    if (uploadFieldElement) {
      const uploadField = new UploadField(uploadFieldElement);
    }

  }
}
