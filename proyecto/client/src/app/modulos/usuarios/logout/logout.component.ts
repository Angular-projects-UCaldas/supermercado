import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent implements OnInit {

  constructor(private userService: UsuarioService, private router: Router) { }

  flag: boolean = true;

  ngOnInit() {
    this.logoutUser();
  }

  logoutUser(): void {
    this.userService.logoutUser();
    this.router.navigate(["/home"]);
  //   if (this.flag == true){
  //     this.flag = false;
  //     location.reload();
  //  }
  }

}
