import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public block_connection:string = "block_connection_switch";
  public block_creation:string = "block_creation";
  public form_connection:string="form_connection";
  public form_creation:string="form_creation_switch";
  public Row2_login_form:string="Row2_login_form";

  ngOnInit(): void {
  }

  changeOptionConnection()
  {
    if (this.block_connection == "block_connection")
    {
      this.block_connection= "block_connection_switch";
      this.form_connection="form_connection";
      this.Row2_login_form="Row2_login_form";
    }
    this.form_creation="form_creation_switch";
    this.block_creation = "block_creation";
  }
  changeOptionCreation()
  {
    if (this.block_creation == "block_creation")
    {
      this.block_creation= "block_creation_switch";
      this.form_creation="form_creation";
      this.Row2_login_form="Row2_login_form_creation";
    }
    this.form_connection="form_connection_switch";
    this.block_connection = "block_connection";
  }
}
