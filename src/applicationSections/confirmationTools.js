export class confirmationTools {
    activate(model){
        this.applicationForm = model;
    }

    metAcceptButtonClicked(){
        this.applicationForm.showPanelBody = false;
        this.applicationForm.decisionPostResults = "CF+";
        this.decisionPostResultsDisplayText = "Accept - met conditions";
    }

    notMetAcceptButtonClicked(){
        this.applicationForm.showPanelBody = false;
        this.applicationForm.decisionPostResults = "CF-";
        this.decisionPostResultsDisplayText = "Accept - did not meet Conditions";
    }

    notMetRejectButtonClicked(){
        this.applicationForm.showPanelBody = false;
        this.applicationForm.decisionPostResults = "CFR";
        this.decisionPostResultsDisplayText = "Reject - did not meet Conditions";
    }

    notMetHoldButtonClicked(){
        this.applicationForm.showPanelBody = false;
        this.applicationForm.decisionPostResults = "HLD";
        this.decisionPostResultsDisplayText = "Hold - did not meet Conditions";
    }

    resetButtonClicked(){
        this.applicationForm.showPanelBody = true;
        this.applicationForm.decisionPostResults = "";
        this.decisionPostResultsDisplayText = "";
    }

    expandButtonClicked(){
        this.applicationForm.showPanelBody = true;
    }

    collapseButtonClicked(){
        this.applicationForm.showPanelBody = false;
    }
}