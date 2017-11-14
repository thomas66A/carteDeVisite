import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from './components/cards.component';
import {AppComponent} from './components/app.component';
import {HomeComponent} from './components/home.component';
import {CreerComponent} from './components/creer.component';


export const appRoutes: Routes =[
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'cards',
        component: CardsComponent
    },
    {
        path:'creer',
        component: CreerComponent
    }
    
];