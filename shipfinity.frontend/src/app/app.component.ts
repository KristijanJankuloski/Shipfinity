import { Component } from '@angular/core';
import { NotificationService } from './shared/services/notification.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shipfinity.frontend';
  successNotification$ = this.notificationService.successMessageAction$.pipe(tap(message => {
    setTimeout(() =>{
      this.notificationService.clearMessages();
    }, 5000);
  }));

  constructor(private notificationService: NotificationService){}
}
