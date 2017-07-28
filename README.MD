# angular-deezer-api

## Installation

To install this library, run:

```bash
$ npm install angular-deezer-api --save
```

## Use this library

Once you have downloaded this library you can use on your angular module.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { DeezerApiModule } from 'angular-deezer-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    DeezerApiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use the service in component

```typescript
import { DeezerApiService } from 'angular-deezer-api';

constructor(
  private deezerApiService: DeezerApiService,
) { //...

search(value) {
  this.deezerApiService.search(value).then(result => {
    console.log(result);
  });
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Jeremy De la casa](mailto:jeremydelacasa@gmail.com)
