import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, FormBuilder  } from '@angular/forms';
import { Profile } from '../../../apex/entities/profile.entity';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  myForm: FormGroup;
  user: any;
  visible: any = false;
  userDetails: any;
  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    
    this.user = new Profile();
    this.myForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
      collegeName: [null, Validators.required],
      Stream: [null, Validators.required],
      yearOfPassing: [null, Validators.required],
      companyName:  [null],
      designation: [null],
      workingOn: [null],
      interstedTech:[null]
    });
  }
  ngOnInit() {
  }
  save(data: any) {

    const url = '';
    this.userDetails = data;
    this.profileService.save(url, this.userDetails);
    console.log(data);
    console.log(this.myForm);
    
  }
  show(e) {debugger;
    if (e.target.checked) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

}