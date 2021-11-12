import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 5;

  public task = [
   {
     "name" : "Buy Vegetables",
     "id" : 1,
     "details" : "20 Nov 2021"
   },
   {
     "name" : "Elective 2 exam",
     "id" : 2,
     "details" : "12:45 PM, 15 Nov 2021"
   },
   {
     "name" : "Submit assignments",
     "id" : 3,
     "details" : "Deadline : 17 Nov 2021"
   },
   {
     "name" : "Service Appointment",
     "id" : 4,
     "details" : "1:00 PM, 20 Nov 2021"
   },
   {
     "name" : "Exam Results",
     "id" : 5,
     "details" : "6 Dec 2021"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
