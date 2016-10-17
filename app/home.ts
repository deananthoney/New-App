import {Component} from 'angular2/core';


@Component({
    selector: 'root',
    //Component style
    styles: [`
	
	`],
    //External style
    styleUrls['style.css'],
    template: `
	<!--Inline -->
	<style>
	vrplayer{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
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
`,

    directives:`<vrplayer></vrplayer>`
})

export class AppHome{

}
