import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { CustomValidators } from '../utils/CustomValidators'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  registerForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])

  },
      { validators : CustomValidators.mustMatch('password', 'confirmPassword') }

  );


  get fo() {
    return this.registerForm.controls;
  }


  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  ngOnInit(): void {
  }
  onSubmit(): void {

    console.log("dans le submit")
    const { username, email, password } = this.registerForm.value;
    console.log(username + " "+ email)

    this.authService.registerUser(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
