import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss']
})

export class SetupComponent implements OnInit {


    constructor(public digitransitService: DigitransitService, private router: Router) {
    }

    naytaPysakki() {
        this.router.navigate(['routes']);
    }

    ngOnInit() {
    }

}
