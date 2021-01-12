import { OnInit } from '@angular/core';
import { Session } from "../_services/Session";


export class Auth implements OnInit {
    session: Session;
    userId: string;


    ngOnInit() {

        this.userId=sessionStorage.getItem('userId')



    }

}