/**
 * Created by Renan on 29/04/2016.
 */
import {Component} from 'angular2/core';
import {PicService} from "../../common/PicService";
import {Router} from "angular2/router";
import {TimerWrapper} from "angular2/src/facade/async";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'slide',
    templateUrl: 'app/view/slide/slide.component.html',
    styleUrls: ['app/view/slide/slide.component.css']
})

export class SlideComponent {

    constructor(private picService:PicService) {
        this.picService = picService;
        console.log('Slide constructor');
    }

    private hashtag:String;
    public fotos_error:Boolean = false;
    public fotos = new Object;
    public pics = new Object;
    public image:String = '';
    public lastCall;
    public aux = 0
    public started:boolean = false;
    public userName:String = '';
    public textPost:String = '';


    ngOnInit() {
        console.log('Slide ngOnInit)');
        this.hashtag = this.picService.getHashtag();
        this.getPics();

    }


    getHashtag() {
        console.log('getHashtag()');
        this.hashtag = this.picService.getHashtag();
    }

    getPics() {
        console.log('getPics()');
        this.picService.getPics().subscribe(
            data => {
                this.fotos = new Object;
                this.pics = new Object;
                this.fotos = data,
                    this.pics = data.data
                if (!this.started) {
                    this.slideShow(this.pics);
                    this.started = true;
                }
            }
        err => { this.fotos_error = true });
    }

    getMore() {
        console.log('getMore()');
        if (this.fotos.pagination.next_url) {
            this.picService.getMore(this.fotos.pagination.next_url).subscribe(
                data => {
                    this.fotos = new Object;
                    this.pics = new Object;
                    this.fotos = data
                    this.pics = data.data
                },
                err => {
                    this.fotos_error = true
                }
            );
        } else {
            this.getPics();
        }
    }

    stopShow() {
        console.log('stopShow()');
        clearInterval(this.interval);
    }


    slideShow(pics) {
        console.log('slideShow()');
        this.interval = setInterval(() => {
            this.slideShowStart()
        }, 1000);
    }

    slideShowStart() {
        console.log('slideShowStart()');
        this.image = this.pics[this.aux].images.standard_resolution.url;
        if (this.aux !== this.pics.length - 1) {
            console.log('aux = ' + this.aux + ' aux++');
            this.aux++;
            this.image = 'background-image: url(' + this.pics[this.aux].images.standard_resolution.url + ');  ' +
                'background-repeat: no-repeat; ' +
                'background-position: center; ' +
                'background-attachment: fixed;';
            this.userName = this.pics[this.aux].user.username;
            this.textPost = this.pics[this.aux].caption.text;
        } else {
            console.log('else');
            if (this.fotos.pagination.next_url) {
                console.log('slideShowStart -- getMore()');
                this.aux = 0;
                this.getMore();
            } else {
                console.log('slideShowStart -- getPics()');
                this.aux = 0;
                this.started = false;
                this.stopShow();
                this.getPics();
            }
        }
    }
}
    