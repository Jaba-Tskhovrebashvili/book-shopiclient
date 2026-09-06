import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-uthor',
  standalone: false,
  styleUrl: './add-uthor.scss',
  templateUrl: './add-uthor.html',
})
export class AddUthor {

  @Input() isAddVisible: boolean = true;
  @Output() AddvisibleFunction = new EventEmitter<any>();

  constructor(private authorServiceService: AuthorServiceService, private messageService: MessageService, private location: Location) { }

  userProfile: any = {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    personalNumber: "",
    birthDate:"",
    countryId: 0,
    cityId: 0,
    sexId: 0
  }

  changeVisible() {
    this.AddvisibleFunction.emit()
  }

  addAuthor() {
    this.authorServiceService.AddAuthorFunct(this.userProfile).subscribe({

      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.AddvisibleFunction.emit();
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

  onAuthorSexChange(Event: any) {
    this.userProfile.sexId = Event?.id
  }

  onCountryChange(Event: any) {
    this.userProfile.countryId = Event?.id
  }
  onCityChange(Event: any) {
    this.userProfile.cityId = Event?.id
  }
}
