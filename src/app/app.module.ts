import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaldetailComponent } from './animaldetail/animaldetail.component';
import { FilterlistComponent } from './filterlist/filterlist.component';
import { CardOverviewElephantComponent } from './card-overview-elephant/card-overview-elephant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material';
import {MatToolbarModule,  MatTabsModule,MatButtonModule,MatIconModule,MatCardModule} from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AnimaldetailComponent,
    FilterlistComponent,
    CardOverviewElephantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule, 
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
