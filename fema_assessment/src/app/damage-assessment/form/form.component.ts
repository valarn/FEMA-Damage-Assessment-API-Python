import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-forms-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

  property_details_group: FormGroup;
  property_damage_group: FormGroup;

  // property_type: Array<string>;
  // rent_status: Array<string>;
  // disaster_type: Array<string>;
  // occupancy_status: Array<string>;
  // damage_degree: Array<string>;


  property_type = [
      "Select property type",
      "apartment",
      "townhouse",
      "single-family residence ",
      "Multi-family residence",
      "Other"
  ];

  rent_status = [
      "Select rent status",
      "Owner",
      "Renter"
  ];

  disaster_type = [
      "Select disaster type",
      "Earthquake", "Fire, Flooding", "Hurricane/typhoon",
      "Landslide", "Severe Storms", "Sewer Backup",
      "Utility Outage", "Straight line winds",
      "Tornado", "Tsunami", "Terrorism", "Volcanic Eruption"
  ];

  occupancy_status = [
      "Select", "Primary", "Secondary", "Vacant"
  ];

  damage_degree = [
      "Select amount of damage", "Destroyed", "Major", "Minor"
  ];

  access_property = [
      "Yes", "No", "Obstructed"
  ];


  validation_messages = {
      'propertyType': [
          { type: 'required', message: "Please choose property type."}
      ],

      'rentStatus': [
          { type: 'required', message: "Please select rent status."}
      ],

      'occupancyStatus': [
      { type: 'required', message: 'Please choose occupancy status.' },
      ],

      'propertyAccess': [
      { type: 'required', message: 'Is the property blocked? (Partial access choose "Obstructed")'}
      ],

      'disasterType': [
      { type: 'required', message: 'Please choose cause of damage.' }
      ],

      'propertyDamage': [
      { type: 'required', message: 'Please choose your best estimate for damage.' }
      ]
  };


  constructor() { }

  ngOnInit() {

      this.rent_status = ["Select rent status",
      "Owner",
      "Renter"];

      this.property_type = [
          "Select property type",
      "Apartment",
      "Townhouse",
      "Single-family residence ",
      "Multi-family residence",
      "Other"
      ];

      this.damage_degree = [
          "Select amount of damage", "Destroyed", "Major", "Minor"
      ];

      this.disaster_type = ["Select disaster type",
      "Earthquake", "Fire, Flooding", "Hurricane/typhoon",
      "Landslide", "Severe Storms", "Sewer Backup",
      "Utility Outage", "Straight line winds",
      "Tornado", "Tsunami", "Terrorism", "Volcanic Eruption"];

      this.access_property = [
          "Please select option", "Yes", "No", "Obstructed"
      ];

      this.occupancy_status = [
          "Select", "Primary", "Secondary", "Vacant"
      ];

      this.createForms();

  }

  createForms() {

    this.property_details_group = new FormGroup({
        propertyType: new FormControl(this.property_type[0], Validators.required,),

        rentStatus: new FormControl(this.rent_status[0], Validators.required),

        occupancyStatus: new FormControl(this.occupancy_status[0], Validators.required),

        propertyAccess: new FormControl(this.access_property[0], Validators.required),

        disasterType: new FormControl(this.disaster_type[0], Validators.required),

        propertyDamage: new FormControl(this.damage_degree[0], Validators.required)
    });

    // this.property_damage_group = new FormGroup({
    //   disasterType: new FormControl(this.disaster_type[0], Validators.required),
    //
    //   propertyDamage: new FormControl(this.damage_degree[0], Validators.required)
    // });

  }
//
  onSubmit(value){
    console.log(value);
  }


}