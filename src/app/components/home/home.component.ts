import { Component, OnInit } from '@angular/core';
import { MockDataProgramsLeft } from 'src/app/Data/home-data.constant';
import { MockDataImportantDates } from 'src/app/Data/important-dates-data.constant';
import { IImportantDates } from 'src/app/typing/client/important-dates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeParaDetials: Array<any> = MockDataProgramsLeft;

  public importantDate: Array<IImportantDates> = MockDataImportantDates;

  constructor() { }

  ngOnInit(): void {
  }

}
