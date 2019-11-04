import { Injectable } from "@angular/core";
import alertify from "alertifyjs";

@Injectable({
  //this means this service is globally accessable
  //to make it global without providedIn:"root" you have to add this service in app.module.ts providers
  //to make this service local remove root and go to related component and add providers:[AlertifyService] to that component's @Component({ providers:[AlertifyService],...})
  //to use this service you have to inject it in relateed component constructor like  constructor(private alertifyService: AlertifyService) {}
  providedIn: "root"
})
export class AlertifyService {
  constructor() {}
  showInfo(message: string) {
    alertify.success(message);
  }
  showError(message: string) {
    alertify.error(message);
  }
  showWarning(message: string) {
    alertify.warn(message);
  }
}
