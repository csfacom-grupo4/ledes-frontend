import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('logado');
        console.log(document.cookie);
        this.router.navigate(['/general/noticias']);
      },
      (error) => {
        // Lógica de erro - exiba uma mensagem de erro, por exemplo
        console.error('Erro durante o login:', error);
      }
    );
  }
}
