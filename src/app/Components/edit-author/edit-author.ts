import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-author',
  standalone: false,
  styleUrl: './edit-author.scss',
  templateUrl: './edit-author.html',
})
export class EditAuthor {
  @Input() userProfile!: any;
  @Input() visible: boolean = true;
  @Output() closeEdit = new EventEmitter<any>();

  editForm: any;
  constructor(private authorServiceService: AuthorServiceService, private messageService: MessageService, private location: Location) { }


  OnClose() {
    this.closeEdit.emit()
  }

  onAuthorSexChange(Event: any) {
    this.userProfile.sexId = Event?.id
  }

  onCountryChange(Event: any) {
    this.userProfile.countryId = Event?.id
  }
  onCityChange(Event: any) {
    this.userProfile.cityId = Event?.id
  }

  EditProfile() {
    const authorObj = {
      name: this.userProfile.name,
      surname: this.userProfile.surname,
      phoneNumber: this.userProfile.phoneNumber,
      email: this.userProfile.email,
      personalNumber: this.userProfile.personalNumber,
      birthDate: new Date(this.userProfile.birthDate),
      countryId: this.userProfile.countryId,
      cityId: this.userProfile.cityId,
      sexId: this.userProfile.sexId
    }
    this.authorServiceService.EditAuthorProfile(authorObj, this.userProfile.id).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.closeEdit.emit();
        setTimeout(() => {
          this.location.historyGo(0);
        }, 2000);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
      }
    })
  }
}
