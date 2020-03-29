import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  exports: [
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
