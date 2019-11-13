import { Component, OnInit,Input } from '@angular/core';
import {Mymeub} from '../mymeub';
@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
@Input ()meub=Mymeub;
test:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
