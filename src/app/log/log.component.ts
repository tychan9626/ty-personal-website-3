import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { log, UserData } from '../user-data.model';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [DatePipe, NgStyle, NgClass],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  log!: log;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.log = data.log;
    });
  }
}
