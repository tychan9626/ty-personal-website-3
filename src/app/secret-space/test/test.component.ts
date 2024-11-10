import { Component } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  testData: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.getRenderTestData().subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.testData = response;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
