import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { ScheduleCreateFormComponent } from './schedule-create-form/schedule-create-form.component';
import { ToshareModule } from 'src/app/views/toshare/toshare.module';

import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
  AlertModule,

} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ScheduleBeforeCreateFormComponent } from './schedule-before-create-form/schedule-before-create-form.component';
import { CoursesComponent } from './courses/courses.component';

import { FormsModule } from '@angular/forms';
import { ScheduleEnvironmentsComponent } from './schedule-environments/schedule-environments.component';
import { ScheduleTimeAllComponent } from './schedule-time-all/schedule-time-all.component';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleProfessorDetailComponent } from './schedule-professor-detail/schedule-professor-detail.component';
import { ScheduleProfessorViewComponent } from './schedule-professor-view/schedule-professor-view.component';
import { ProfessorAllComponent } from './professor-all/professor-all.component';
import { ScheduleRowComponent } from './schedule-row/schedule-row.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleUpdateComponent } from './schedule-update/schedule-update.component';
import { OaUploadComponent } from './oa-upload/oa-upload.component';
import { ScheduleReserveCreateComponent } from './schedule-reserve-create/schedule-reserve-create.component';

import {EnvironmentModule} from 'src/app/views/environment/environment.module';
import { ScheduleReserveEnviroListComponent } from './schedule-reserve-create/schedule-reserve-enviro-list/schedule-reserve-enviro-list.component';
import { MmodalComponent } from './schedule-reserve-create/shared/modals/mmodal/mmodal.component';

@NgModule({
  declarations: [
    ScheduleCreateComponent,
    ScheduleCreateFormComponent,
    ScheduleBeforeCreateFormComponent,
    CoursesComponent,
    ScheduleEnvironmentsComponent,
    ScheduleTimeAllComponent,
    ScheduleViewComponent,
    ScheduleDetailComponent,
    ScheduleProfessorDetailComponent,
    ScheduleProfessorViewComponent,
    ProfessorAllComponent,
    ScheduleRowComponent,
    ScheduleListComponent,
    ScheduleUpdateComponent,
    OaUploadComponent,
    ScheduleReserveCreateComponent,
    ScheduleReserveEnviroListComponent,
    MmodalComponent,
    
    
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    ToshareModule,
    FormsModule,
    AlertModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    NgxSpinnerModule,
    EnvironmentModule,
  ]
})
export class ScheduleModule {

}
