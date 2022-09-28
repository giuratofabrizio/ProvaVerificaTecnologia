import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  name: string;
  constructor() { 
    this.name = 'quarto';
  }

  ngOnInit(): void {
  }

}
