import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe("fish Curry","rewrewrwrewrewreww","https://cdn.mos.cms.futurecdn.net/nGB9rxY8w95ckkrvNNJuFN-650-80.jpg.webp"),
    new Recipe("fish Curry","rewrewrwrewrewreww","https://cdn.mos.cms.futurecdn.net/nGB9rxY8w95ckkrvNNJuFN-650-80.jpg.webp")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
