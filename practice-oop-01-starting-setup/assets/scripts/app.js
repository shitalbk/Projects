class DOMHelper{
  static clearEventListeners(element){
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static moveElement(elementId, newDestinationSelector){
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component{
  constructor(hostElementId, insertBefore = false){
    if(hostElementId){
      this.hostElement = document.getElementById(hostElementId);
    } else{
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }
  dettach(){
    if(this.element){
      this.element.remove();
    }
  }
  attach(){
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}
class Tooltip extends Component{
  constructor(closeNotifierFunction, text){
    super();
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }
  closeToolTip = () =>{
    this.dettach();
    this.closeNotifier();
  };
  create(){
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = this.text;
    tooltipElement.addEventListener('click', this.closeToolTip);
    this.element = tooltipElement;
  }
}
class ProjectItem{
  hasActiveToolTip = false;
  constructor(id, updateProjectListsFunction, type){
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }
  showMoreInfoHandler(){
    if(this.hasActiveToolTip){
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(()=> {
      this.hasActiveToolTip = false;
    },toolTipText);
    tooltip.attach();
    this.hasActiveToolTip = true;
  }
  connectMoreInfoButton(){
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }
  connectSwitchButton(type){
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener('click',this.updateProjectListsHandler.bind(null, this.id));
  }
  update(updateProjectListsFn, type){
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);

  }
}
class ProjectList{
  projects = [];
  constructor(type){
    this.type = type;
    

    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for(const prjItem of prjItems){
      this.projects.push(new ProjectItem(prjItem.id, this.switchProjects.bind(this), this.type));
    }
    console.log(this.projects);
  }
    setSwitchHandlerFunction(switchHandlerFunction){
      this.switchHandler = switchHandlerFunction;
    }
    addProject(project){
      this.projects.push(project);
      DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
      project.update(this.switchProjects.bind(this), this.type);
    }
    switchProjects(projectId){
      // const projectIndex = this.projects.findIndex(p => p.id === projectId);
      // this.projects.splice(projectIndex, 1);
      this.switchHandler(this.projects.find(p => p.id === projectId));
      this.projects = this.projects.filter(p => p.id !== projectId);
    }
}
class App{
  static init(){
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList));
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();