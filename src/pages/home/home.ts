import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Registrar= RegistrarPage;

  nota1 = '';
  nota2 = '';
  notas = [];

  Usuarios= [{correo: "fervillatamez@gmail.com", contraseña: "amigas"}
  ];

  constructor(public navCtrl: NavController,
               public alertCtrl: AlertController,
               public storage: Storage) {
                this.storage.keys()
                .then(keys => {
                  if(keys.some(key => key == 'notas')){
                    this.storage.get('notas')
                    .then(notas => {
                      this.notas = JSON.parse(notas);
                    })
                  }
                })
                 

  }

  ClickRegistrar()
  {
    this.navCtrl.push(this.Registrar, {Usuarios: this.Usuarios});
    this.storage.set('notas', JSON.stringify(this.notas));
  }

  ClickIniciar()
  {
  let index = this.Usuarios.findIndex(U => U.correo == this.nota1 && U.contraseña == this.nota2);

  if(this.nota1.length > 0 && this.nota2.length > 0 )
  {
    console.log("Inicio de sesión exitosa.")
    const alert = this.alertCtrl.create({
      title: "¡Bienvenido!",
      subTitle: "Inicio de sesión exitosa.",
      buttons: ['Ok']
    });
    alert.present();
  }
  else{
    console.log("Los parámetros están vacíos")
    const alert = this.alertCtrl.create({
      title: "Oops!",
      subTitle: "Los parámetros están vacios.",
      buttons: ['Ok']
    });
    alert.present();
  }
  }

}
