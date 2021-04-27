import { action, configure, observable } from 'mobx';
import ToDoModel from '../model/ToDoModel';

configure({ enforceActions: 'always' });

export default class ToDoStore {
  @observable
  ToDos: ToDoModel[] = [];

  @action.bound
  async init() {
    let newToDos: ToDoModel[] = []
    this.addToDoToStore(newToDos);
  }

  @action.bound
  addToDoToStore(ToDos: ToDoModel[]) {
    this.ToDos.length = 0;
    for (let todo of ToDos) {
      this.ToDos.push(todo);
    }
  }

  @action.bound
  getToDos() {
    return this.ToDos;
  }

  @action.bound
  async addToDo(title: string, isCompleted: boolean) {
    let createdToDo: ToDoModel= {
         Title: title,
         IsCompleted: isCompleted
      }
     
      
    this.addNewToDoToStore(createdToDo);
  }

  @action.bound
  async addNewToDoToStore(todo: ToDoModel) {
    this.ToDos.push(todo);
  }
}