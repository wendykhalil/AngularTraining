import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {NotFoundComponent} from './layout/not-found/not-found.component';
import { ListTicketComponent } from './layout/list-ticket/list-ticket.component';
import { ListEventComponent } from './layout/list-event/list-event.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
    {path: 'tickets', component: ListTicketComponent},
    // routing lazim na3mlik 
  {path:'home', redirectTo:'', pathMatch:'full'},
  {path:'**', component: NotFoundComponent},
  
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
