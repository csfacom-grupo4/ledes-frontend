import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent {
  usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    linkedin: '',
    curso: '',
    senha: '',
    funcao: '',
    isAdmin: false,
    isGerenciadorNoticia: false,
    isGerenciadorProjeto: false,
  };

  imagemPerfil: string | ArrayBuffer | null = null;
  repetirSenha = '';

  constructor(private router: Router) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPerfil = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  senhasConferem(): boolean {
    return (
      this.usuario.senha === this.repetirSenha &&
      /[a-zA-Z]/.test(this.usuario.senha) &&
      /[0-9]/.test(this.usuario.senha)
    );
  }

  cadastrarUsuario(): void {
    // Implemente aqui a lógica para enviar o formulário de cadastro.
    if (this.senhasConferem()) {
      console.log('Cadastro válido, enviando...');
    } else {
      console.error('As senhas não conferem ou não atendem aos requisitos.');
    }
  }

  navigateBack() {
    this.router.navigate(['/user']);
  }
}
