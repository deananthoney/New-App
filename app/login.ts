/ login.ts
import {Component} from 'angular2/core';

@Component({
    selector: 'root',
    styleUrls['style.css'],
  template: `




  <header>
<nav>
    <ul>
    <li><a href="./app/dashboard"> DASHBOARD</a></li>
    <li><a href="./app/home"> HOME</a></li>
    <li><a href="./app/login"> LOGIN </a></li>
  </ul>
</nav> 
  </header>
        
<div class="content">
<form (ngSubmit)="formSubmit()">
<div class="formgroup">
<label for="uname" >Username:</label>
<input type="text" id="uname" class="form-control" [(ngModel="data.username"]]>
</div>
<div class="formgroup">
<label for="pwd" >Password:</label>
<input type="text" id="pwd" class="form-control"  [(ngModel="data.password")]>
</div>
<button type="submit" class="btn btn-default">Login</button>
</form>  
</div>
</div>
`

})
export class LoginApp {

}