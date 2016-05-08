import {Component, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MainComponent} from "./view/main/main.component";
import {SlideComponent} from "./view/slide/slide.component";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    {path: '/', name: 'Main', component: MainComponent, useAsDefault: true},
    {path: '/slide', name: 'Slide', component: SlideComponent}
])

export class AppComponent {
    constructor() {

    }
}
