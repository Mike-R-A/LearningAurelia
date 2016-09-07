import {DataService} from 'Services/DataService';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class confirmationList{
    constructor(dataService){
        this.dataService = dataService;
        var strings = this.dataService.getApplicationStrings();
        this.applicationForms = this.dataService.getApplicationForms();
        this.applicationForms.forEach(function(element, index, array){
            element.strings = strings;
        });
        
    }
}