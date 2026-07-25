import { Routes } from '@angular/router';

import { SplashComponent } from './Core/splash/splash';
import { LayoutComponent } from './Core/layout/layout';

import { HomeComponent } from './features/pages/home/home';
import { ProjectsComponent } from './features/pages/projects/projects';
import { AboutComponent } from './features/pages/about/about';
import { ContactComponent } from './features/pages/contact/contact';

export const routes: Routes = [

  {
    path: '',
    component: SplashComponent
  },

  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'home',
        component: HomeComponent
      },

      {
        path: 'projects',
        component: ProjectsComponent
      },

      {
        path: 'about',
        component: AboutComponent
      },

      {
        path: 'contact',
        component: ContactComponent
      }

    ]
  },

];