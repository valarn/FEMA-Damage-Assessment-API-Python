import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DamageAssessmentPage } from './damage-assessment.page';
const routes = [
    {
        path: '',
        component: DamageAssessmentPage
    }
];
let DamageAssessmentPageModule = class DamageAssessmentPageModule {
};
DamageAssessmentPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DamageAssessmentPage]
    })
], DamageAssessmentPageModule);
export { DamageAssessmentPageModule };
//# sourceMappingURL=damage-assessment.module.js.map