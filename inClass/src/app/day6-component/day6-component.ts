import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-day6-component',
  imports: [ReactiveFormsModule],
  templateUrl: './day6-component.html',
  styleUrl: './day6-component.scss',
})
export class Day6Component implements OnInit {
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);

  // form Group
  registerForm = new FormGroup({
    username: this.username,
    email: new FormControl('',[Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
  }, [Validators.required]);

  ngOnInit(): void {
    // console.log(this.username);
    console.log(this.registerForm);
    // this.username.valueChanges.subscribe((val) => {
    //   console.log(val);
    // });
    this.registerForm.statusChanges.subscribe((val)=>{
      console.log(this.registerForm);
    })
  }

  get ageControl(){
    return this.registerForm.get('age');
  }
}
