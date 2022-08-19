import { Component } from '@angular/core';
import { Item } from './item';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users_todolist_project';

  filter: 'all' | 'fun' | 'shopping'| 'vital' | 'work'  = 'all';

  curUser:number = 0;

  users:User[] = [
    { id: 0, name: 'John Doemo', todoList: [
      { description: 'Eat', done: true , category: 'vital'},
      { description: 'Sleep', done: false , category: 'vital'},
      { description: 'Laugh', done: false , category: 'fun'},
      { description: 'Play', done: false , category: 'fun'},
      { description: 'Code', done: true , category: 'work'},
      { description: 'Debug', done: true , category: 'work'},
      { description: 'Egg', done: false , category: 'shopping'},
      { description: 'Bread', done: true , category: 'shopping'},
    ]},
    { id: 1, name: 'Thomas Warin', todoList: [
      { description: 'Sleep', done: false , category: 'vital'},
      { description: 'Play', done: false , category: 'fun'},
      { description: 'Code', done: true , category: 'work'},
      { description: 'Debug', done: true , category: 'work'},
      { description: 'Coment', done: false , category: 'work'},
      { description: 'Test', done: false , category: 'work'},
    ]},
    { id: 2, name: 'Empty User', todoList: []}
  ];

  get filteredItems() {
    if (this.filter === 'all') {
      return this.users[this.curUser].todoList;
    }
    return this.users[this.curUser].todoList.filter((item) => this.filter === item.category);
  }

  get itemsActive() {
    return this.filteredItems.filter((item) => !item.done);
  }

  get itemsDone() {
    return this.filteredItems.filter((item) =>item.done);
  }

  addItem(description: string, category: string) {
    this.users[this.curUser].todoList.unshift({
      description,
      done: false,
      category
    });
  }
  
  remove(item:Item) {
    this.users[this.curUser].todoList.splice(this.users[this.curUser].todoList.indexOf(item), 1);
  }

  setCurrentUser(id:string) {
    this.curUser = +id;
  }
  
}
