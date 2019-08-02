import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
let DamageAssessmentPage = class DamageAssessmentPage {
    constructor(validations, forBuilder, fromGroup, formControl, form) {
        this.validations = validations;
        this.forBuilder = forBuilder;
        this.formControl = formControl;
        this.form = form;
    }
    ngOnInit() {
    }
};
DamageAssessmentPage = tslib_1.__decorate([
    Component({
        selector: 'app-damage-assessment',
        templateUrl: './damage-assessment.page.html',
        styleUrls: ['./damage-assessment.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Validators, FormBuilder, FormGroup,
        FormControl, Object])
], DamageAssessmentPage);
export { DamageAssessmentPage };
//# sourceMappingURL=damage-assessment.page.js.map