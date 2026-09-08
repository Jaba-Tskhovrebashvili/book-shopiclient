import { ChangeDetectorRef, Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';

interface Member {
  id: number;
  name: string;
}

@Component({
  selector: 'app-author-select',
  standalone: false,
  styleUrl: './author-select.scss',
  templateUrl: './author-select.html',
})
export class AuthorSelect implements OnInit {

  members: Member[] = [];
  selected: Member[] = [];

  @Output() getAuthors = new EventEmitter<any>();
  @Input() selectedAutors: any;
  userPage: number = 1;
  totalUserPage!: number;
  userSearch: string = "";
  authorselect: string = "";

  constructor(private authorServiceService: AuthorServiceService, private cdr: ChangeDetectorRef) { }


  myScrollHandler = (event: any) => {

    const target = event.originalEvent.target as HTMLElement;

    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 30 && this.userPage < this.totalUserPage
    ) {

      this.userPage++;
      this.getUsers(
        this.userSearch,
        this.authorselect,
        this.userPage
      );
    }
  };

  ngOnInit(): void {
    if (this.selectedAutors?.length != 0) {
      this.selected = this.selectedAutors?.map((author: any) => ({
        id: author.id,
        name: author.name
      }))

      const authorStrings: any = this.selected?.map((item: any) => item.id).join(",")
      this.authorselect = authorStrings;
      this.getUsers(this.userSearch, authorStrings, this.userPage);
    } else {
      this.getUsers(this.userSearch, "", this.userPage);

    }
  }

  getUsers(search: string, authorselect: string, page: number) {
    this.authorServiceService.GetAuthorSelect(search, authorselect, page).subscribe({
      next: (response) => {
        if (page == 1) {
          this.members = response.authors.authors.map((user: any) => ({
            id: user.id,
            name: user.name + ' ' + user.surname
          }))
        } else {
          const newUsers = response.authors.authors.map((user: any) => ({
            id: user.id,
            name: user.name + ' ' + user.surname
          }))
          this.members.push(...newUsers)
        }

        this.userPage = page;

        this.totalUserPage = response.authors.totalPages;

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onuserFilter(event: any) {
    this.userSearch = event?.filter;
    this.userPage = 1
    this.getUsers(this.userSearch, this.authorselect, this.userPage);
    console.log("safsgdg", event)
  }

  getFirstName(member: Member): string {
    return member.name.split(' ')[0];
  }

  removeItem(event: MouseEvent, member: Member) {
    event.stopPropagation();
    this.selected = this.selected.filter(
      x => x.id !== member.id
    );

    const authorStrings: any = this.selected.map((item: any) => item.id).join(",")
    this.authorselect = authorStrings;
    this.userPage = 1
    this.getUsers(this.userSearch, authorStrings, this.userPage);
    this.getAuthors.emit(this.selected)

  }
  onSelectedChange(event: any) {
    const authorStrings: any = event.map((item: any) => item.id).join(",")
    this.authorselect = authorStrings
    this.userPage = 1
    this.getUsers(this.userSearch, authorStrings, this.userPage);
    this.getAuthors.emit(event)
  }

}
