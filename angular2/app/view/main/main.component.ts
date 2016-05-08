/**
 * Created by Renan on 29/04/2016.
 */
import {Component} from 'angular2/core';
import {PicService} from "../../common/PicService";
import {Router} from "angular2/router";


@Component({
    selector: 'main',
    templateUrl: 'app/view/main/main.component.html',
    styleUrls: ['app/view/main/main.component.css']
})

export class MainComponent {

    private hashtag:String ;

    constructor(private picService:PicService, private router:Router) {
        this.picService = picService;

    }

    go() {
        this.picService.setHashtag(this.hashtag);
        this.router.navigate(['Slide']);
    }
}
    