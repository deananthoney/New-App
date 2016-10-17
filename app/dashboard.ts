import {Component} from 'angular2/core';



@Component({
    selector: 'root',
    //Component style
    styles: [`
	h1 {
	 
	}
	`],
    //External style
    styleUrls['style.css'],
    template: `
	<!--Inline CSS-->
	<style>
	
	}
	</style>
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
	</div>
`
})
export class AppDashboard { }
