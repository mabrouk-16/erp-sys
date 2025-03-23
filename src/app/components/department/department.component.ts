import {
  AfterViewInit,
  Component,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { usersList } from './users';
import { Departments, User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { SnackService } from '../../services/snack.service';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { UrlsNames } from '../../models/shared';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

export interface UserData {
  userId: string;
  email: string;
  emailVerified: boolean;
  userName: string;
  picture: string;
  title: string;
  birthDate: string;
  phone: string;
  address: string;
  gender: string;
  role: string;
}

@Component({
  selector: 'app-department',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent {
  usersService = inject(UsersService);
  clipboard = inject(Clipboard);
  private snack = inject(SnackService);

  department = signal('');
  userDepartment = Departments;
  urlsNames = UrlsNames;

  displayedColumns: string[] = [
    'userId',
    'userName',
    'title',
    'role',
    'gender',
    'details',
  ];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    // const users = usersList;
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
    // console.log(this.dataSource);
    this.getUsers();
  }

  ngAfterViewInit() {}
  filterByDepartment(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    console.log(event);
    this.dataSource.filter = this.department().trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  copyId(userId: string) {
    this.snack.success('User ID Copied to Clipboard');

    console.log(userId);
    // this.clipboard.copy(userId);
  }
  getUsers() {
    let usersArr: User[] = [];
    this.usersService.getAllUsers().subscribe({
      next: (res) => {
        res.forEach((doc) => {
          usersArr.push(doc.data() as User);
        });
        this.dataSource = new MatTableDataSource(usersArr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this.snack.error(err.message);
      },
    });
  }
}
