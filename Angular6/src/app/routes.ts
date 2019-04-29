import{ Routes } from '@angular/router';
import{ UserComponent } from './user/user.component';
import{ SignUpComponent } from './user/sign-up/sign-up.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes =[

    {
        path:'signup', component: UserComponent,
        children :[{ path:'',component: SignUpComponent}]
    },
    {
        path:'login', component: UserComponent,
        children :[{ path:'',component: SigninComponent}]
    },
    {
        path:'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path:'', redirectTo: '/login' , pathMatch:'full'
    } 
];