import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-authorisation',
  standalone: false,
  styleUrl: './authorisation.scss',
  templateUrl: './authorisation.html',
})
export class Authorisation implements OnInit {
  signInForm: any;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): any {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,16}$'
          ),
        ],
      ],
    });
  }


}
