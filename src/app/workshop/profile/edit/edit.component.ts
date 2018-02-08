import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, FormBuilder  } from '@angular/forms';
import { Profile } from '../../../apex/entities/profile.entity';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  myForm: FormGroup;
  user: any;
  visible: any = false;
  constructor(private fb: FormBuilder) {
    
    this.user = new Profile();
    this.myForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
      city: [null, Validators.required],
      college: [null, Validators.required],
      specalization: [null, Validators.required],
      yearofpass: [null, Validators.required],
      organizationname:  [null, Validators.required],
      workexperience: [null, Validators.required],
      technolgies: [null, Validators.required]
  });
   }

  ngOnInit() {
  }
  save(data: any) {
    console.log(data);
    console.log(this.myForm);
    
  }
  show(e) {
    if (e.target.checked) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

}