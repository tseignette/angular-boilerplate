import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent, ButtonComponent, ToggleSwitchComponent } from './components';
import { NgForObjectPipe } from './pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ButtonComponent,
  NotFoundComponent,
  ToggleSwitchComponent,
];

const DIRECTIVES = [
  // Add directives here
];

const PIPES = [
  NgForObjectPipe,
];

const PROVIDERS = [
  // Add services here
];

const IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    ...IMPORTS,
  ]
})
export class ThemeModule {

  constructor() { }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }

}
