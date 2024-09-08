import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class LocalGuard extends AuthGuard('local') {
    //execute and return boolean
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // console.log('hello world');
        //it will return super classes: in this case AuthGuard('local')
        return super.canActivate(context);
    }
}