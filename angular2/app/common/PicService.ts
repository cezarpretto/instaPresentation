/**
 * Created by Renan on 29/04/2016.
 */
import {Injectable} from 'angular2/core';
import {Http, Response,JSONP_BINDINGS, Jsonp, BaseRequestOptions, RequestOptions} from "angular2/http";
import {Observable} from 'rxjs/Rx';
import {StringWrapper} from "angular2/src/facade/lang";

@Injectable()
export class PicService {

    constructor(private http:Http, private jsonp:Jsonp) {

    }

    private hashtag:String;
    private userId:String;
    private url:String;
    private pics:any[] = [];
    private increment = 0;


    tags:Array<Object>;

    setHashtag(_hashtag:String) {
        this.hashtag = _hashtag;
    }

    getHashtag() {
        return this.hashtag;
    }

    getPics(){
        var _url = 'https://api.instagram.com/v1/tags/' + this.getHashtag() +
            '/media/recent?callback=JSONP_CALLBACK&access_token=16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587'
        return this.jsonp.get(_url).map(res => res.json());
    }

    private _fetchFailed(error:any) {
        console.error(error);
        return Promise.reject(error);
    }

    getHashTag(name:string) {
        return this.getRecent(name)
    };


    getMore(url_:String) {
        url_ = url_ +'&callback=JSONP_CALLBACK';
        return this.jsonp.get(url_).map(res => res.json());
    }

    setUserId(userId_) {
        this.userId = userId_;
    }


}
;
