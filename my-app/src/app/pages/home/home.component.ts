import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dataLanguages: any = [];
  nombre:string="";
  apellidoP:string="";
  apellidoM:string="";
  estadoC:string="";
  
  dataSource:any = [];
  constructor(private language: LanguagesService ){}
  ngOnInit()
  {
    this.language.getListLanguges().subscribe( (data) => {
      for(var key in data)
      {
        var row = {id:key, nombre: data[key].nombre, apellidoP: data[key].apellidoP, apellidoM: data[key].apellidoM, estadoC: data[key].estadoC }
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    } )
  }

save()
{
  let body = 
  {
    nombre: this.nombre,
    apellidoP: this.apellidoP,
    apellidoM: this.apellidoM,
    estadoC: this.estadoC
  }
  this.language.postLanguage(body).subscribe( (data) => {
    if(data!=null)
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

  let nombre = prompt("Nuevo Nombre"+'');
  let apellidoP = prompt("Nuevo Apellido Paterno"+'');
  let apellidoM = prompt("Nuevo Apellido Materno"+'');
  let estadoC = prompt("Nuevo Estado Civil")
  
  let body = {
    nombre: nombre,
    apellidoP: apellidoP,
    apellidoM: apellidoM,
    estadoC: estadoC
  };
  
  this.language.updateLanguage(id, body).subscribe((data) => {
    if (data != null) {
      window.location.reload();
    }
  });
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
actualizarr(id:string){
  let aux = confirm("Esta Seguro de Actualizar")
  let body = 
  {
    abrev: "test Upt abrev",
    name:  "test Upt name"
  }    
  if(!aux) return
  this.language.updateLanguage(id, body).subscribe( (data) => {
    if(data!=null)
    {
      window.location.reload();
    }
  })
}
}


 


