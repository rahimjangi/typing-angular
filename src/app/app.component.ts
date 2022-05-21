import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rdnText = faker.lorem.sentence();
  win = false;
  enteredChar = '';
   
  getChange(e: any) {
    let val = e.target.value;
    this.enteredChar = val;
  }
  getClass(letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "noclass";
    }
    if (letter == enteredLetter) {
      return "correct";
    } else {
      return "incorrect";
    }
    
  }
  
  }

