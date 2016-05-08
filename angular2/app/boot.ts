import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_BINDINGS } from 'angular2/router';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS, HTTP_BINDINGS, JSONP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {PicService} from "./common/PicService";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, HTTP_BINDINGS, HTTP_PROVIDERS, ROUTER_BINDINGS, PicService, JSONP_PROVIDERS,)
]);