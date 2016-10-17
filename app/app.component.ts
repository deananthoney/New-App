import {Component} from 'angular2/core';

@Component({
	selector: 'root',
	//Component style
	styles: [`
	h1 {
	  color: red;
	}
	`],
	//External style
	styleUrls['style.css'],
	template: `
	<!--Template inline style-->
	<style>
	h1 {
	  color: purple;
	}
	</style>
	<header>
<nav>
    <ul>
    <li><a href="./app/dashboard"> DASHBOARD</a></li>
    <li><a href="./app/home"> HOME</a></li>
    <li><a href="./app/main"> LOGIN </a></li>
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
</div>`
})
export class AppComponent { }

/*
Developed By Dean
*/
