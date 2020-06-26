import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    private jwtService: JwtService
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  logout() {
    this.jwtService.destroyToken()
    this.router.navigate(['/login'], {
      replaceUrl: true
    })
  }

}
