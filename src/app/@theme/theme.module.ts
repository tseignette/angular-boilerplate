import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS_PRIVATE = [
  // Add components you do not want to export
];

const COMPONENTS_PUBLIC = [
  // Add components you want to export
];

const DIRECTIVES = [
  // Add your directives here
];

const IMPORTS = [
  CommonModule
];

const PIPES = [
  // Add your pipes here
];

const PROVIDERS = [
  // Add your components services here
];

@NgModule({
  declarations: [
    ...COMPONENTS_PRIVATE,
    ...COMPONENTS_PUBLIC,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    ...COMPONENTS_PUBLIC,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: IMPORTS
})
export class ThemeModule {

  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: PROVIDERS
    };
  }

}
