import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { DropdownComponent } from './dropdown/dropdown.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
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

const routes: Routes = [
  { path: "accordion", component: AccordionComponent },
  { path: "badge", component: BadgeComponent },
  { path: "block", component: BlockComponent },
  { path: "button", component: ButtonComponent },
  { path: "button-group", component: ButtonGroupComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "callout", component: CalloutComponent },
  { path: "checkbox", component: CheckboxComponent },
  { path: "chip", component: ChipComponent },
  { path: "circular-progress", component: CircularProgressComponent },
  { path: "container", component: ContainerComponent },
  { path: "datepicker", component: DatePickerComponent },
  { path: "details", component: DetailsComponent },
  { path: "divider", component: DividerComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "file-upload", component: FileUploadComponent },
  { path: "form-item", component: FormItemComponent },
  { path: "form-stepper", component: FormStepperComponent },
  { path: "grid", component: GridComponent },
  { path: "hero-banner", component: HeroBannerComponent },
  { path: "icon", component: IconComponent },
  { path: "icon-button", component: IconButtonComponent },
  { path: "input", component: InputComponent },
  { path: "modal", component: ModalComponent },
  { path: "notification-banner", component: NotificationBannerComponent },
  { path: "pagination", component: PaginationComponent },
  { path: "popover", component: PopoverComponent },
  { path: "radio", component: RadioComponent },
  { path: "side-menu", component: SideMenuComponent },
  { path: "skeleton", component: SkeletonComponent },
  { path: "spacer", component: SpacerComponent },
  { path: "table", component: TableComponent },
  { path: "tabs", component: TabsComponent },
  { path: "textarea", component: TextAreaComponent },
  { path: "tooltip", component: TooltipComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
