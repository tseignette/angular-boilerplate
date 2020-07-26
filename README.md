# Angular boilerplate

## Getting started
`npm install` is obviously a good start. After that, you can run:
- `npm start` to start the project locally on [http://localhost:4200]() (accessible through local network)
- `npm run build` to build for production, files are generated in `dist/angular-boilerplate`
- `npm lint` to lint (the default configuration has not been modified)

## Features
### Styling
[Spectre.css](https://picturepan2.github.io/spectre), a lightweight CSS framework, is included with its set of pure CSS icons [Icons.css](https://picturepan2.github.io/icons.css).

### Resources included
#### Directives
- `AutofocusDirective`: dynamically focuses an element

#### Pipes
- `ConcatPipe`
- `ForObjectPipe`: iterates through the keys of an object
- `JoinPipe`
- `LastElementPipe`: returns the last element of an array
- `SplitPipe`
- `ToFixedPipe`

## Structure
### @core
`CoreModule` is supposed to contain global services and models. There are a few other useful files:
- `core.constants.ts` to store application constants (not to be confused with `environment.ts`)
- `core.utils.ts` to store simple functions you want to be able to use everywhere

### @theme
`ThemeModule` is supposed to contain global resources which can be used in templates (components, directives, pipes, etc.). You can also find a folder named `styles` containing the following files:
- `custom-spectre.css.scss` imports and configures Spectre.css
- `main.scss` defines global styles
- `variables.scss` stores global SCSS variables

### @modules
This is supposed to contain modules which are likely to be imported in various places in the application.

### Configuration
The project has been initialized with **Angular CLI**. The following configurations have then been added or modified:
- ``.vscode/launch.json`` to be able to attach the debugger to **Chrome**
- routing: nonexistent routes are directed to home and scroll position restoration is enabled
