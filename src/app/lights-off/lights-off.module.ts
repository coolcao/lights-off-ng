import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LightsOffRoutingModule } from './lights-off-routing.module';
import { LightsOffBoardComponent } from './lights-off-board/lights-off-board.component';
import { LightsOffStore } from './lights-off-store';
import { ScatterFlowersComponent } from './scatter-flowers/scatter-flowers.component';


@NgModule({
  declarations: [
    LightsOffBoardComponent,
    ScatterFlowersComponent,
  ],
  imports: [
    CommonModule,
    LightsOffRoutingModule,
    FormsModule,
  ],
  providers: [
    LightsOffStore
  ],
})
export class LightsOffModule { }
