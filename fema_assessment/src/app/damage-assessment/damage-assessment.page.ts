import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl, Form} from '@angular/forms';

@Component({
  selector: 'app-damage-assessment',
  templateUrl: './damage-assessment.page.html',
  styleUrls: ['./damage-assessment.page.scss'],
})
export class DamageAssessmentPage implements OnInit {

  constructor(private validations: Validators, private forBuilder: FormBuilder, fromGroup: FormGroup,
              private formControl: FormControl, private form: Form) { }

  ngOnInit() {
  }

}
