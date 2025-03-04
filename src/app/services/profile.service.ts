import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../components/auth/services/user.service';
import { SnackService } from './snack.service';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private http = inject(HttpClient);
  private userService = inject(UserService);
  private snack = inject(SnackService);

  uploadImageToCloud(data: any): Observable<any> {
    return this.http.post(
      `https://api.cloudinary.com/v1_1/${environment.cloudinaryConfig.CloudName}/image/upload`,
      data
    );
  }

  updateProfileImageByFB(imgUrl: string) {
    this.userService
      .updateUserProfile(this.userService.user()?.userId || '', {
        ...this.userService.user(),
        picture: imgUrl,
      })
      .subscribe(() => {
        this.userService.setUserFromFB(this.userService.user()?.userId || '');
        this.snack.success('Your Image Successfully Updated');
      });
  }

  updateProfileInfo(body: any) {
    this.userService
      .updateUserProfile(this.userService.user()?.userId || '', {
        ...this.userService.user(),
        ...body,
      })
      .subscribe(() => {
        this.userService.setUserFromFB(this.userService.user()?.userId || '');
        this.snack.success('Your Information Successfully Updated');
      });
  }
}
