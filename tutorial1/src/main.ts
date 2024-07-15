import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: [provideProtractorTestingSupport(), provideRouter(routes)]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

