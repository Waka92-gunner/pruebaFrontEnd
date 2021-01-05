import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicio/api/api.service'
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import {loginI } from '../../modelos/login.interface';
import { responseI} from '../../modelos/response.interface';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })


  constructor(private api:ApiService , private router:Router) { }

errorStatus:boolean = false;
errorMsj:any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['home'])
    }
  }

  onlogin(form:loginI){
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:responseI = data;
      if(dataResponse.status =="ok"){
        localStorage.setItem('token',dataResponse.result.token);
        this.router.navigate(['home'])
      }else{
        this.errorStatus=true;
        this.errorMsj=dataResponse.result.error_msg;
        
      }

    })
    
  }

}
