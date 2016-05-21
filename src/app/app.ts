import { Component, Inject } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world';
import { ClickMeComponent } from './components/click-me';
import { ToggleMeComponent } from './components/toggle-me';
import { NgForComponent } from './components/ng-for';
import { NgClassComponent } from './components/ng-class';
import { NgStyleComponent } from './components/ng-style';
import { NgIfComponent } from './components/ng-if';
import { AtInputComponent } from './components/at-input';
import { ToggleClassComponent } from './components/toggle-class';
import { KeyUpComponent } from './components/key-up';
import { AtCounterComponent } from './components/at-counter';
import { UseContnetComponent } from './components/use-content';
import { GetDataComponent } from './components/get-data';

import { AtColorDirective } from './directives/at-color';

import { MessageLengthPipe } from './pipes/message-length';

import { LanguagesService } from './services/languages';

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Angular2TS Quick Start</h1>

    <!-- Components -->
    <h3 class="title">Hello World Component</h3>
    <div class="content">
      <hello-world></hello-world>
    </div>

    <h3 class="title">Click Me Component</h3>
    <div class="content">
      <click-me></click-me>
    </div>

    <h3 class="title">Toggle Me Component</h3>
    <div class="content">
      <toggle-me></toggle-me>
    </div>

    <h3 class="title">Ng For Component</h3>
    <div class="content">
      <ng-for></ng-for>
    </div>

    <h3 class="title">Ng Class Component</h3>
    <div class="content">
      <ng-class></ng-class>
    </div>

    <h3 class="title">Ng Style Component</h3>
    <div class="content">
      <ng-style></ng-style>
    </div>

    <h3 class="title">Ng If Component</h3>
    <div class="content">
      <ng-if></ng-if>
    </div>

    <h3 class="title">At Input Component</h3>
    <div class="content">
      <at-input something="Angular 2"></at-input>
    </div>

    <h3 class="title">Toggle Class Component</h3>
    <div class="content">
      <toggle-class></toggle-class>
    </div>

    <h3 class="title">Key Up Component</h3>
    <div class="content">
      <key-up></key-up>
    </div>

    <h3 class="title">At Counter Component</h3>
    <div class="content">
      <at-counter atCount="7" (atCountChange)="number2=$event"></at-counter>
    </div>

    <h3 class="title">Use Content Component</h3>
    <div class="content">
      <use-content>Hi, Angular 2</use-content>
    </div>

    <h3 class="title">Get Data Component</h3>
    <div class="content">
      <get-data>Hi, Angular 2</get-data>
    </div>

    <!-- Directives -->
    <h3 class="title">At Color Directive</h3>
    <div class="content">
      <p atColor>Hello Angular 2</p>
    </div>

    <!-- Pipes -->
    <h3 class="title">Message Length Pipe</h3>
    <div class="content">
      <p>{{ message }} (Length: {{ message | length }})</p>
    </div>

    <!-- Services -->
    <h3 class="title">Languages Service</h3>
    <div class="content">
      <p>Decided Language: {{ language }}</p>
    </div>
  `,
  styles: [`
    .title {
      color: #3F51B5;
      text-align: center;
    }
    .content {
      display: flex;
      justify-content: center;
    }
  `],
  directives: [
    // Components
    HelloWorldComponent,
    ClickMeComponent,
    ToggleMeComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfComponent,
    AtInputComponent,
    ToggleClassComponent,
    KeyUpComponent,
    AtCounterComponent,
    UseContnetComponent,
    GetDataComponent,
    // Directives
    AtColorDirective
  ],
  viewProviders: [
    // Services
    LanguagesService
  ],
  pipes: [
    // Pipes
    MessageLengthPipe
  ]
})
export class App {
  public message: string = 'Hello Angular 2';
  public language: string = '';

  constructor(@Inject(LanguagesService) languages) {
    this.language = languages.ts;
  }
}
