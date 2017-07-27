import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeezerApiService } from './deezerApi.service';
import { HttpModule, JsonpModule } from '@angular/http';

export * from './deezerApi.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [],
  exports: []
})
export class DeezerApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DeezerApiModule,
      providers: [DeezerApiService]
    };
  }
}
