import {
  Component
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  MatDialog
} from '@angular/material';
import {
  UserModel,
  UserResponse
} from '../../../shared/models';
import {
  UserService
} from '../../../../services';
import {
  UserClass
} from '../../../shared/classes';
import {
  CryptoUtilities
} from '../../../shared/utilities';
import {
  ProfileLeftSidebarUserInfoMessageDiaglogComponent
} from './message/message.component';
import {
  ProfileLeftSidebarUserInfoPostToDiaglogComponent
} from './post-to/post-to.component';

@Component({
  selector: 'profile-left-sidebar-user-info-component',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class ProfileLeftSidebarUserInfoComponent {
  constructor (
    private route: ActivatedRoute,
    private userService: UserService,
    private dialog: MatDialog
  ) {
    console.log(this.user);
    this.route.params.subscribe(params => {
      console.log(params);
      this.userId = params.id;
    });
  }

  protected userId: string;
  protected user: UserModel;
  private cryptoUtilities = new CryptoUtilities();

  public ngOnInit (): void {
    this.userId = this.cryptoUtilities.decipher(this.userId);
    this.userId && this.userService.getProfile(this.userId)
    .subscribe((response: UserResponse) => {
      this.user = response.user;
    });

    !this.userId && (this.user = UserClass.getUser());
  }

  protected onOpenMessageDiaglogComponent (): void {
    this.dialog.open(ProfileLeftSidebarUserInfoMessageDiaglogComponent);
  }

  protected onOpenPostToDiaglogComponent (): void {
    this.dialog.open(ProfileLeftSidebarUserInfoPostToDiaglogComponent);
  }
}
