import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileJson:any = {};

  constructor(public auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profileJson = profile;
    });
   
  }

}