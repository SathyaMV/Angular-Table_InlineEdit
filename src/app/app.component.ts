import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Validation} from 'src/assets/password.validators';
// import Validation from 'src/assets/password.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Task3';

  show: boolean;

  form: FormGroup;
  users: any[] = [];
  idNew: any;
  id: any;
  userId: any;
  name: string;
  password: any;
  email: string;
  mobile: number;
  dob: string;
  gender: string;
  status: string;
  address: string;
  save: boolean;
  hide = true;
  isMod: boolean;

  maritalData: Array<any> = [
    { name: 'Single', value: 'Single' },
    { name: 'Married', value: 'Married' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ],
      ],
      mobile: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      status: ['', [Validators.required]],
      address: ['', [Validators.required]],
      agree: ['', [Validators.required]],
    },{
      validators: [Validation.match('password', 'confirmPassword')],
    });
  }

  get f(){
    return this.form.controls;
  }

  get fname() {
    return this.form.get('name');
  }
  get pwd() {
    return this.form.get('password');
  }

  get cpwd(){
    return this.form.get('confirmPassword');
  }

  get mail() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('mobile');
  }
  get date() {
    return this.form.get('dob');
  }
  get gen() {
    return this.form.get('gender');
  }
  get mstat() {
    return this.form.get('status');
  }
  get add() {
    return this.form.get('address');
  }
  get agr() {
    return this.form.get('agree');
  }

  ngOnInit(): void {
    console.log(this.users);
    this.save = false;
    this.show = false;
    // this.isMod = false;
    
  }

  onSubmit() {
    this.show = true;
    this.isMod = false;
    const idNew = Math.trunc(Math.random() * 50) + 1;
    console.log(this.id);
    this.id = idNew;
    this.name = this.form.controls['name'].value;
    this.email = this.form.controls['email'].value;
    this.mobile = this.form.controls['mobile'].value;
    this.dob = this.form.controls['dob'].value;
    this.gender = this.form.controls['gender'].value;
    this.status = this.form.controls['status'].value;
    this.address = this.form.controls['address'].value;

    if (this.form.invalid) {
      return this.form;
    } else {
      this.users.push({
        id: this.id,
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        dob: this.dob,
        gender: this.gender,
        status: this.status,
        address: this.address,
        isMod : this.isMod,
        password: this.password
      });
    }
    console.log(this.users);
    return this.form.reset();
    // console.log(this.users);
  }

  onSave = (id) => {
    this.isMod = true;
    // this.users['isMod']
    this.save = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        console.log(this.users[i].id);
        this.users[i].id = this.form.controls['id'].value;
        this.users[i].name = this.form.controls['name'].value;
        this.users[i].email = this.form.controls['email'].value;
        this.users[i].mobile = this.form.controls['mobile'].value;
        this.users[i].dob = this.form.controls['dob'].value;
        this.users[i].gender = this.form.controls['gender'].value;
        this.users[i].status = this.form.controls['status'].value;
        this.users[i].address = this.form.controls['address'].value;
      }
    }
    this.form.reset();
    
  }

  onEdit(save: boolean){
    this.save = save;
  }
}
