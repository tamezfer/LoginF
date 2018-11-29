import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosPage } from '../usuarios/usuarios';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  UsuariosExistentes= UsuariosPage;
  correo= '';
  contraseña= '';
  
  usuarios= [
  ];

  UsuariosExistentess=[
    {nombre: "Marifer Cázarez", correo: "marifercazarez@gmail.com"},
    {nombre: "René Sánchez", correo: "renesanchez@gmail.com"}


  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.usuarios= this.navParams.get('Usuarios');
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  ClickUsuario()
  {
    //this.usuarios.push({
      //correo: this.correo,
     // contraseña: this.contraseña
     this.navCtrl.push(this.UsuariosExistentes);
  };
  }


