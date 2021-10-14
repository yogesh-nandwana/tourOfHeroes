import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {  
  constructor(private msgService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.msgService.add('HeroService: fetched heroes');
    return heroes;    
  }
}