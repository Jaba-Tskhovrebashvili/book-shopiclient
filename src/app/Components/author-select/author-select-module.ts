import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorSelect } from './author-select';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { SelectModule } from 'primeng/select';

@NgModule({
  declarations: [AuthorSelect],
  imports: [CommonModule, ChipModule, SelectModule, FormsModule],
  exports: [AuthorSelect]
})
export class AuthorSelectModule { }
