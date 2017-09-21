import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  <app2></app2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  submittedFormValues;

  onSubmit(myFormValues){
    this.submittedFormValues = [];
    console.log(myFormValues);
    // this.submittedFormValues = myFormValues;
    for(var propName in myFormValues){
      // console.log(myFormValues[propName]);
      this.submittedFormValues.push(propName + " : " + myFormValues[propName]);
    }
  }

}
