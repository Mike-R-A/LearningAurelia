export class toolBar {
    activate(model){
        this.applicationForm = model;
        this.toolBarSection = model.toolBarSection;
        this.strings = model.strings;
        this.decisionDetails = model.decisionDetails;
        this.isConditional = model.decisionDetails.decision == 'Conditional';
    }

    OnUnConditionalClick(){
        this.decisionDetails.decision = 'Unconditional';
        this.isConditional = false;
    }

    OnConditionalClick(){
        this.decisionDetails.decision = 'Conditional';
        this.isConditional = true;
    }

    OnRejectClick(){
        this.decisionDetails.decision = 'Reject';
        this.isConditional = false;
    }

    OnPendingClick(){
        this.decisionDetails.decision = 'Pending Decision';
        this.isConditional = false;
    }
}