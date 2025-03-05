import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private _hasMain = !!(window as any).Main;
  constructor() {}

  setMain = (bool: boolean)=> this._hasMain = bool;
  hasMain = ()=>this._hasMain;
}
