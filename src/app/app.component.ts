import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users_todolist_project';

  filter: 'all' | 'vital' | 'fun' | 'work' = 'all';

  allItems = [
    { description: 'Eat', done: true , category: 'vital'},
    { description: 'Sleep', done: false , category: 'vital'},
    { description: 'Play', done: false , category: 'fun'},
    { description: 'Laugh', done: false , category: 'fun'},
    { description: 'Code', done: false , category: 'work'},
  ];

  get filteredItems() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === item.category);
  }

  get itemsActive() {
    return this.filteredItems.filter((item) => !item.done);
  }

  get itemsDone() {
    return this.filteredItems.filter((item) =>item.done);
  }

  addItem(description: string, category: string) {
    this.allItems.unshift({
      description,
      done: false,
      category
    });
  }
  
  remove(item:Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
