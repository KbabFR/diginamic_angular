import { Item } from "./item";

export interface User {
    id:number;
    name: string;
    todoList: Item[];
  }