import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'extended-input',
  template: `<div class="form-group" 
                  [ngClass]="{'has-error':errorMessage}">        
                       <ng-content ></ng-content>                     
                           <span class="help-block"  *ngIf="errorMessage">
                              {{errorMessage}}
                        </span>
             </div>`

})
export class ExtendedInput implements OnChanges {
  @Input()
  IsSubmitted: boolean;

  @Input()
  inputErrors: any;
  @Input()
  errorDefs: any;

  errorMessage: string = '';

  ngOnChanges(changes: any): void {


    if (changes.inputErrors) {
      var errors: any = changes.inputErrors.currentValue;
      this.errorMessage = '';
      if (errors) {
        Object.keys(this.errorDefs).some(key => {
          if (errors[key]) {
            this.errorMessage = this.errorDefs[key];
            return true;
          }
        });
      }
    }
  }
}