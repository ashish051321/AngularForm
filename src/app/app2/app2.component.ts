import { Component } from '@angular/core';

@Component({
  selector: 'app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component {
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
