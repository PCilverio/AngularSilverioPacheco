import { Component, OnInit } from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dataUsers: any = [];
  dataLanguages: any = [];
  name:string = "Python";
  abrev:string = "Py";
  dataSource:any = [];
  constructor(private usersServices: UsuariosService, private lenguajesServices: LenguajesService, private language: LanguagesService ){}
  ngOnInit()
  {
    this.usersServices.getUser().subscribe ((data) => {
      this.dataUsers = data;
    });

    this.lenguajesServices.getLenguajes().subscribe ((data) => {
      let arrayLenguajes = [data];
      this.dataLanguages = arrayLenguajes;
    });

    this.language.getListLanguges().subscribe( (data) => {
      for(var key in data)
      {
        var row = {id:key, abrev: data[key].abrev, name: data[key].name}
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    } )
  }

save()
{
  let body = 
  {
    name: this.name,
    abrev: this.abrev
  }
  this.language.postLanguage(body).subscribe( (data) => {
    if(data!=null)
    {
      window.location.reload();
    }
  })
}

borrar(id:string){
  let aux = confirm("¿Esta Seguro de Borrar?")
  if(!aux) return
  this.language.deleteLanguage(id).subscribe( (data) => {
    if(data==null)
    {
      window.location.reload();
    }
  })
}

actualizar(id: string) {
  let aux = confirm("¿Estás seguro de editar?");
  if (!aux) {
    return;
  }
  let abrev = prompt("Nuevo valor para Abrev"+'');
  let name = prompt("Nuevo valor para Name"+'');
  let body = {
    abrev: abrev,
    name: name
  };
  this.language.updateLanguage(id, body).subscribe((data) => {
    if (data != null) {
      window.location.reload();
    }
  });
}
}


 


