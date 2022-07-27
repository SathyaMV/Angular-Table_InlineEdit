import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users;
  @Input() form;
  @Input() onSave;
  @Output() saveVal = new EventEmitter<any>();

  

  maritalData: Array<any> = [
    { name: 'Single', value: 'Single' },
    { name: 'Married', value: 'Married' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(id, user){
    const save = false;
    this.saveVal.emit(save);
    //   for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i].id === id) {
    //     console.log(this.users[i].id);
    //     // this.userId = this.users[i].id;
    //     this.form.patchValue({
    //       name: this.users[i].name,
    //       email: this.users[i].email,
    //       mobile: this.users[i].mobile,
    //       dob: this.users[i].dob,
    //       gender: this.users[i].gender,
    //       status: this.users[i].status,
    //       address: this.users[i].address,
    //     });
    //   }
    // }
    user.isMod = true;
  }

  onDelete(id){
    console.log(id);
    for(let i = 0; i< this.users.length; i++){
      if(this.users[i].id === id){
        this.users.splice(i , 1);
      }
    }
    
  }

  onUpdate(user){
    this.onSave(user);
    user.isMod = false;
    console.log(this.users);
  }

  onCancel(user){
    user.isMod = false;
  }
}
