import {uploadForm} from "../utils/upload-form";

export class PopupUploadForm {
  constructor(popupElement) {
    this.popupElement = popupElement;
    this.popupFormWrapper = popupElement.querySelector('.popup__wrapper');
    if (this.popupFormWrapper) {
      this.form = this.popupFormWrapper.querySelector('form');
      this.form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let messageClassElem = 'message__wrapper';
        uploadForm(this.form, this.popupFormWrapper, messageClassElem);
      });
    }
  }
}
