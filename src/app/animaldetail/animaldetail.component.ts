import { Component, OnInit } from '@angular/core';
import { animalService } from './animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animaldetail',
  templateUrl: './animaldetail.component.html',
  styleUrls: ['./animaldetail.component.css']
})
export class AnimaldetailComponent implements OnInit {
 pageTitle = 'Animal Detail';
  errorMessage = '';
  animal: any | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private animalService: animalService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getanimal(id);
    }
  }
  getanimal(id: number) {
    this.animalService.getanimal().subscribe(resp=>
      {
        
        this.animal=resp.filter((animal)=>animal.id===id).map((resp=>resp))[0];
        console.log(this.animal);
      
      }
      );
    }

  onBack(): void {
    this.router.navigate(['/animal']);
  }

}

}
