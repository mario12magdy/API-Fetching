import { Component,  OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetDataService } from '../../get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsInterface } from '../../items-interface';
import { SearchPipe } from '../../search.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    SearchPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _getDataService: GetDataService) { }


  isActive: boolean[] = [];
  isLoading: boolean = true
  searchTerm: string = ""
  pageNumber: number = 0;
  sliceNumber: number = 5;




  items: ItemsInterface[] = []

  ngOnInit(): void {
    this._getDataService.getData().subscribe({
      next: (response) => {
        this.items = response
        console.log(this.items);
        this.isActive = new Array(this.items.length);

        this.isLoading = false

        // this.isActive = new Array(this.items.length).fill(false);
        //We can use .fill(true/false)
        // in this case we don't use it because it's alreadey false by default

      }
    })
  }
  toggleActive(i: number): void {
    this.isActive[i] = !this.isActive[i];

  }

  slicePageForward(): void {
    this.pageNumber += 5
    this.sliceNumber += 5
    this.isActive = new Array(this.items.length);

  }
  slicePageBack(): void {
    this.pageNumber -= 5
    this.sliceNumber -= 5
    this.isActive = new Array(this.items.length);

  }


}

