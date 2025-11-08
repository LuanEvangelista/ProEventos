import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    importProvidersFrom(ModalModule.forRoot(), TooltipModule.forRoot(), BsDropdownModule.forRoot()),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
