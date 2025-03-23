import { Component, inject, signal } from '@angular/core';
import { UserService } from '../auth/services/user.service';
import { environment } from '../../../environment';
import { ProfileService } from '../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { user } from '@angular/fire/auth';
import { Departments, User } from '../../models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  userService = inject(UserService);
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  user = signal<User | null | undefined>(null);

  toggleEdit = signal(false);
  toggleLinkEdit = signal(false);
  isMyProfile = signal(true);
  title = signal(this.userService.user()?.title || '');
  department = signal(this.userService.user()?.department || '');
  userName = signal(this.userService.user()?.userName || '');
  phone = signal(this.userService.user()?.phone || '');
  address = signal(this.userService.user()?.address || '');
  birthDate = signal(this.userService.user()?.birthDate || '');
  userLinks = signal(
    this.userService.user()?.links || {
      linkedIn: '',
      facebook: '',
      twitter: '',
      github: '',
      website: '',
    }
  );
  userDepartment = Departments;

  constructor() {
    this.route.url.subscribe(() => {
      const id = this.route.snapshot.params['userId'];
      if (id && id !== this.userService.user()?.userId) {
        this.getUserById(id);
      } else {
        this.user.set({ ...this.userService.user() });
        this.isMyProfile.set(true);
      }
    });
  }

  getUserById(userId: string) {
    this.userService
      .getUserProfile(userId)
      // .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((res) => {
        this.user.set({ ...res.data() });
        this.isMyProfile.set(false);
        console.log(this.user());
      });
  }

  changeImgFile(event: any) {
    // this.imgLoading.set(true);
    const data = new FormData();
    const now = new Date().getMilliseconds();
    if (event?.target?.files) {
      data.append('file', event.target.files[0]);
      data.append('upload_preset', environment.cloudinaryConfig.uploadPresets);
      data.append('cloud_name', environment.cloudinaryConfig.CloudName);
      data.append('public_id', event.target.files[0].name + now);
      this.profileService
        .uploadImageToCloud(data)
        // .pipe(finalize(() => this.imgLoading.set(false)))
        .subscribe((imageData) => {
          console.log(imageData);
          this.profileService.updateProfileImageByFB(imageData.url);
        });
    }
  }
  updateMainInfo() {
    this.profileService.updateProfileInfo({
      title: this.title(),
      userName: this.userName(),
      phone: this.phone(),
      address: this.address(),
      birthDate: this.birthDate(),
      department: this.department(),
    });
    // setTimeout(() => {
    this.toggleEdit.set(false);
    // }, 450);
  }
  updateUserLinks() {
    this.profileService.updateProfileInfo({ links: this.userLinks() });
    // setTimeout(() => {
    this.toggleLinkEdit.set(false);
    // }, 450);
  }
}
