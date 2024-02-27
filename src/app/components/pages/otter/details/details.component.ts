import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute){
    // la paramMap est une map où la clé correspond au nom écrit après les : dans notre url et la valeur est celle qui la remplace.
    //exemple: route : /otter/:id, url: /otter/5 => paramMap = {id: "5"}
    console.log(this.route.snapshot.paramMap);
    //comme au dessu mais pour les query params
    console.log(this.route.snapshot.queryParamMap);
  }
}
