import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-day6-component',
  imports: [ReactiveFormsModule],
  templateUrl: './day6-component.html',
  styleUrl: './day6-component.scss',
})
export class Day6Component implements OnInit {
  username = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3), this.noSpaceValidator()],
    updateOn: 'blur',
  });

  // form Group
  // registerForm = new FormGroup(
  //   {
  //     username: this.username,
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     age: new FormControl('', [Validators.required]),
  //   },
  //   [
  //     // Validators to check mutliple fields
  //   ],
  // );

  // form builder - service
  private fb = inject(FormBuilder);
  registerForm: FormGroup = this.fb.group(
    {
      username: this.username,
      email: [
        '' ,
        [Validators.required, Validators.email],
        [this.emailExistsValidator()],
        // { updateOn: 'blur' }, do more research
        /*
          email: new FormGroup('', {
            validators: [Validators.required, Validators.email],
            updateOn: 'blur'
          })
        */
      ],
      age: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.passwordMatchValidator() },
  );

  // form Array - list of FormControls
  // new FormArray() /this.fb.arrray()

  ngOnInit(): void {
    console.log(this.username);
    console.log(this.registerForm);
    // this.username.valueChanges.subscribe((val) => {
    //   console.log(val);
    // });
    this.registerForm.statusChanges.subscribe((val) => {
      console.log(this.registerForm);
    });
  }

  get ageControl() {
    return this.registerForm.get('age');
  }

  // Custom Validators:
  // 1. Sync
  noSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;
      const space = name.includes(' ');
      console.log(name);
      return space ? { hasSpace: true } : null;
    };
  }
  // 2. Async: run after all sync validators
  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      // in real-world, call a method in Service to make http request to check whether the email exists or not

      // mock data here
      const existingEmails = ['admin@g.com', 'test@g.com', 'user@g.com'];

      return of(existingEmails).pipe(
        map((curr) => {
          console.log(curr);
          const existing = curr.includes(email);
          return existing ? { emailExists: true } : null;
        }),
      );
    };
  }
  // cross-field validators
  passwordMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      // console.log(password, confirmPassword)
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }
}
