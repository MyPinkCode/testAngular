import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meubles-list',
  templateUrl: './meubles-list.component.html',
  styleUrls: ['./meubles-list.component.css']
})
export class MeublesListComponent implements OnInit {
meubles =[
  {libelle:'table',img:'../assets/table.jpg',prixTTC:47,neuf:true},
  {libelle:'armoire',img:'../assets/armoire.jpg',prixTTC:258.5,neuf:false},
  {libelle:'fauteuil',img:'../assets/fauteuil.jpg',prixTTC:113.8,neuf:true}
]
nbr:number=0;
myDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
