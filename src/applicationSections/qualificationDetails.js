export class qualificationDetails{
    activate(model){
        this.incompleteQualifications = model.incompleteQualifications;
        this.incompleteQualifications.strings = model.strings;
        this.results = model.results;
        this.results.strings = model.strings;
        this.completedQualifications = model.completedQualifications;
        this.completedQualifications.strings = model.strings;
        this.predictedGrades = model.predictedGrades;     
        this.strings = model.strings;
    }
}