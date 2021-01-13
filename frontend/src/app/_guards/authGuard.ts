import { OnInit } from '@angular/core';
import { Session } from "../_services/SessionValues";


export class Auth  {
    session: Session=new Session();
    userId: string;


    constructor()
    {
        this.userId=this.session.userId;
    }

        



    

}