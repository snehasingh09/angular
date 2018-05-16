import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: "home", component: UserHomeComponent },
//   { path: "linkedin", component: UserLinkedinComponent },
//   { path: "emailVerification/:token", component: UserHomeComponent },
//   { path: "reset_password/:token", component: UserHomeComponent },
//   { path: "show_events", component: ShowEventsToUserComponent },
//   { path: 'show_event/:event_id', component: ShowEventDetailsUserComponent},
//   { path: "quick_header", component: QuickLinkHeaderComponent,
//     children: [
//       { path: 'about_us', component: AboutUsComponent},
//       { path: "faq", component: FaqComponent },
//       { path: "faqStartup", component: StartupFaqComponent },
//       { path: "policy", component: PrivacyPolicyComponent },
//     ] 
//  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
