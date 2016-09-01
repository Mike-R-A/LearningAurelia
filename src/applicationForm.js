import {DataService} from 'Services/DataService';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class applicationForm{
    constructor(dataService){
        this.dataService = dataService;
        this.applicationForm = this.dataService.getApplicationForm();
        this.personalDetailsSection = this.applicationForm.personalDetailsSection;
        this.qualificationDetailsSection = this.applicationForm.qualificationDetailsSection;
        this.courseDetailsSection = this.applicationForm.courseDetailsSection;
        this.toolBarSection = this.applicationForm.toolBarSection;
    }
}