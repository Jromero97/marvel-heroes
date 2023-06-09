import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "../../services/loader.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private count = 0;
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.count === 0) {
      this.loaderService.setHttpProgressStatus(true);
    }
    this.count++;
    return next.handle(request).pipe(
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.loaderService.setHttpProgressStatus(false);
        }
      })
    );
  }
}
