import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'

  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = 'pallavi123';
  password = '12345';

  constructor(private http: HttpClient, private api: ApiService, private customer: CustomerService, private router: Router) { }

  tryLogin() {
    let postData = {
      "username": this.email,
      "password": this.password
    }

    this.http.post("http://localhost/logistic_v1/api/users/token.json", postData, httpOptions)
      .pipe(

      ).subscribe(data => {
        console.log(data);
    let token = data['data']['token'];
    console.log("=======>" + token);
    this.customer.setToken(token);
    this.router.navigateByUrl('/dashboard');
  });
}


ngOnInit() { }

}
