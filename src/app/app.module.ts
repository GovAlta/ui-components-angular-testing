import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@abgov/web-components';
import { AngularComponentsModule } from '@abgov/angular-components';

import { AccordionComponent } from './accordion/accordion.component';
import { BadgeComponent } from './badge/badge.component';
import { BlockComponent } from './block/block.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalloutComponent } from './callout/callout.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipComponent } from './chip/chip.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { ContainerComponent } from './container/container.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DetailsComponent } from './details/details.component';
import { DividerComponent } from './divider/divider.component';
import { FormItemComponent } from './form-item/form-item.component';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { GridComponent } from './grid/grid.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { IconComponent } from './icon/icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { RadioComponent } from './radio/radio.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SpacerComponent } from './spacer/spacer.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    BadgeComponent,
    BlockComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CalendarComponent,
    CalloutComponent,
    CheckboxComponent,
    ChipComponent,
    CircularProgressComponent,
    ContainerComponent,
    DatePickerComponent,
    DetailsComponent,
    DividerComponent,
    FormItemComponent,
    FormStepperComponent,
    GridComponent,
    HeroBannerComponent,
    IconComponent,
    IconButtonComponent,
    InputComponent,
    ModalComponent,
    NotificationBannerComponent,
    PaginationComponent,
    PopoverComponent,
    RadioComponent,
    SideMenuComponent,
    SkeletonComponent,
    SpacerComponent,
    TableComponent,
    TabsComponent,
    TextAreaComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
