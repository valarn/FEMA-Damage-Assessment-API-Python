import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ParentErrorStateMatcher } from '..validators';
let FormsComponent = class FormsComponent {
    constructor(fb) {
        this.fb = fb;
        // matching_passwords_group: FormGroup;
        // country_phone_group: FormGroup;
        this.parentErrorStateMatcher = new ParentErrorStateMatcher();
        this.property_type = [
            "Select property type",
            "apartment",
            "townhouse",
            "single-family residence ",
            "Multi-family residence",
            "Other"
        ];
        this.rent_status = [
            "Select rent status",
            "Owner",
            "Renter"
        ];
        this.disaster_type = [
            "Select disaster type",
            "Earthquake", "Fire, Flooding", "Hurricane/typhoon",
            "Landslide", "Severe Storms", "Sewer Backup",
            "Utility Outage", "Straight line winds",
            "Tornado", "Tsunami", "Terrorism", "Volcanic Eruption"
        ];
        this.occupancy_status = [
            "Select", "Primary", "Secondary", "Vacant"
        ];
        this.damage_degree = [
            "Select amount of damage", "Destroyed", "Major", "Minor"
        ];
        this.access_property = ["Yes", "No", "Obsructed"];
        this.validation_messages = {
            'propertyType': [
                { type: 'required', message: "Please choose property type." }
            ],
            'occupancyStatus': [
                { type: 'required', message: 'Please choose occupancy status.' },
            ],
            'propertyAccess': [
                { type: 'required', message: 'Is the property blocked? (Partial access choose "Obstructed")' }
            ],
            'disasterType': [
                { type: 'required', message: 'Please choose cause of damage.' }
            ],
            'propertyDamage': [
                { type: 'required', message: 'Please choose your best estimate for damage.' }
            ]
        };
    }
    ngOnInit() {
        this.createForms();
    }
    createForms() {
        this.property_details_group = new FormGroup({
            propertyType: new FormControl(this.property_type[0], Validators.required),
            rentStatus: new FormControl(this.rent_status[0], Validators.required),
            occupancyStatus: new FormControl(this.occupancy_status[0], Validators.required),
            propertyAccess: new FormControl(this.access_property[0], Validators.required),
        });
        this.property_damage_group = new FormGroup({
            disasterType: new FormControl(this.disaster_type[0], Validators.required),
            propertyDamage: new FormControl(this.damage_degree[0], Validators.required)
        });
    }
    // TODO: remove or update?
    static onSubmitPropertyDetails(value) {
        console.log(value);
    }
    static onSubmitDamageDetails(value) {
        console.log(value);
    }
};
FormsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-forms-page',
        templateUrl: './forms.component.html',
        styleUrls: ['./forms.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder])
], FormsComponent);
export { FormsComponent };
//# sourceMappingURL=form.component.js.map