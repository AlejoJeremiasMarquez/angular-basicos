import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado?: string | null = '';
  variable : string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || null;
  }


  
  
  get mostrarVariable(){
    if(this.heroes.length > 0 && this.heroeBorrado != null){
      return this.variable = "No se ha borrado nada";
    } else {
      return this.variable = "Ya se borraron todos";
    }
  } 
}








/* TS HECHO JUNTO A ABDIAS

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string[] = [];
  
  borrarHeroe(){
    let heroe = this.heroes.shift()
    if(heroe){
      this.heroeBorrado.push(heroe);
    }
  }
  
} */
