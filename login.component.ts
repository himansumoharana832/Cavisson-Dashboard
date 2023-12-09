import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  emailname: string = '';
  password: string = '';
  errorMessage1: string = '';
  errorMessage2: string = '';

  visible:boolean=true;
  changetype:boolean=true;
            // Icon visible or not
  viewpass(){         
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }

  
  ngOnInit() {
    const container: HTMLElement | null = document.getElementById('container');
    const registerBtn: HTMLElement | null = document.getElementById('register');
    const loginBtn: HTMLElement | null = document.getElementById('login');

    if (container && registerBtn && loginBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
      });
    }
  }


  
  onSubmit() {
    if (!this.emailname && !this.password) {
      this.errorMessage1= ' Username is required!';
      this.errorMessage2= ' Password is required!';
    }
    else if(!this.emailname && this.password){
      this.errorMessage1 = ' Username is required!';
      this.errorMessage2= '';
    }
    else if(!this.password && this.emailname){
      this.errorMessage2= ' Password is required!';
      this.errorMessage1= '';
    }
    else {
      this.errorMessage1 = '';
      this.errorMessage2 = '';
    }
  }
}
