import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, FormBuilder  } from '@angular/forms';
import { Profile } from '../../../apex/entities/profile.entity';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private router: Router, private profileService: ProfileService) {
    
    this.user = new Profile();
    this.getProfile(this.profileService.getCurrentProfileId());
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
  getProfile(id:any){
    this.profileService.getProfile(id).subscribe((data:any)=>{
      if(data){
        this.user = data.message;
        console.log(data)
      }
    })
  }
  save() {
    console.log(this.user)
    this.profileService.save(this.user).subscribe((data:any)=>{

      if(data){
        this.router.navigate(['myProfile'])
      }
    })  
  }
  show(e) {
    if (e.target.checked) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
  outputEvent($event: any){
    this.user.image = $event;
  }

}