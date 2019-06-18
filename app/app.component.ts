/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public optionsArray = [];
  public optionsCount = 60;
  public filterString: string = "";
  constructor() {

  }

  public ngOnInit(): void {
    for(let x = 0; x < this.optionsCount; x++) {
        this.optionsArray.push("Option " + x);
    }
    console.log(this.optionsArray);
  }

  public get filteredOptions(): Array<string> {
    return this.optionsArray.filter(option => option.toLowerCase().includes(this.filterString.toLowerCase()));
  }

}