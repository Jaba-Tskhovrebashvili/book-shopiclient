import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishSelect } from './publish-select';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PublishSelect],
  imports: [CommonModule, SelectModule, FormsModule, ButtonModule],
  exports: [PublishSelect],
  providers: [ConfirmationService, MessageService]
})
export class PublishSelectModule { }
