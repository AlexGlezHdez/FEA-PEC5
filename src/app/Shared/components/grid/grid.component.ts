import { Component, Input, OnInit } from '@angular/core';
import { CharacterDTO } from 'src/app/Character/models/character.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() characters: CharacterDTO[] = [];

  displayedColumns: string[] = ['name', 'status'];

  constructor() {}

  ngOnInit() {}
}
