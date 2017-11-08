import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../Services/data.storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }

      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

}
