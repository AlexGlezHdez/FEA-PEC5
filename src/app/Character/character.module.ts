import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersComponent } from '../Character/components/characters/characters.component';
import { CharacterComponent } from '../Character/components/character/character.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CharacterComponent, CharactersComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class CharacterModule {}
