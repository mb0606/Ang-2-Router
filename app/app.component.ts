import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent}  from './albums.component';
import {AlbumComponent}  from './album.component'
import {ContactComponent} from './contact.component';
import {HomeComponent} from './home.component';
import {ArchivesComponent} from './archives.component';



@RouteConfig([
    {path:'/albums' , name:'Albums' , component: AlbumsComponent  , useAsDefault: true},
    {path:'/albums/:id', name:'Album', component: AlbumComponent},
    {path:'/home', name:'Home', component: HomeComponent},
    {path:'/archives/:year/:month', name:'Archives', component: ArchivesComponent},
    {path:'/contact', name:'Contact', component: ContactComponent},
    {path:'/*other' , name: 'Other' , redirectTo: ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}