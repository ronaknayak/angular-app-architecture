import { MaterialModule } from './../../material-module';
import { SharedModule } from './../../shared/shared.module';
import { PostsComponent } from './../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from "./default.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [CommonModule, RouterModule, SharedModule, MaterialModule]
})
export class DefaultModule {}
