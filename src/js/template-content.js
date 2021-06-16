function templateContent(template) {
  if("content" in document.createElement("template")) {
    return document.importNode(template.content, true);
  } else {
    var fragment = document.createDocumentFragment();
    var children = template.childNodes;
    for (var i = 0; i < children.length; i++) {
      fragment.appendChild(children[i].cloneNode(true));
    }
    return fragment;
  }
}
