import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  setItemLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItemLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

}
