import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioServicio: UsuarioService) { }
  flag: boolean = true;
  email: string = '';
  password: string = '';

  ngOnInit() {
  }

  onLoginBtnClick(): void {
    this.usuarioServicio.loginUser(this.email, this.password).subscribe(item => {
      console.log(item);
      this.usuarioServicio.saveToken(item.id);
      this.usuarioServicio.saveUserInformation(item.user);
      if (this.flag == true){
        this.flag = false;
        location.reload();
      }
    });
  }
}
