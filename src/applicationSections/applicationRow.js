export class applicationRow{
    activate(model){
        this.applicationForm = model;
        this.personalDetailsSection = this.applicationForm.personalDetailsSection;
        this.incompleteQualifications = this.applicationForm.qualificationDetailsSection.incompleteQualifications;
        this.incompleteQualifications.strings = this.applicationForm.strings.qualificationDetailsSection;
        this.completedQualifications = this.applicationForm.qualificationDetailsSection.completedQualifications;
        this.completedQualifications.strings = this.applicationForm.strings.qualificationDetailsSection;
        this.predictedGrades = this.applicationForm.qualificationDetailsSection.predictedGrades;
        this.courseDetailsSection = this.applicationForm.courseDetailsSection;
        this.toolBarSection = this.applicationForm.toolBarSection;
        this.results = this.applicationForm.qualificationDetailsSection.results;
        this.results.strings = this.applicationForm.strings.qualificationDetailsSection;
        this.applicationForm.showPanelBody = true;
        this.offer = this.applicationForm.offer;
        this.decisionDetails = this.applicationForm.decisionDetails;
        this.decisionDetails.strings = this.applicationForm.strings.decisionDetails;
    }
}