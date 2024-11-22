import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
import { LoadingPageComponent } from "../../shared-resources/loading-page/loading-page.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [LoadingPageComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  testData: any;
  bIsLoading: boolean = false;
  constructor(private sharedDataService: SharedDataService) { }

}
