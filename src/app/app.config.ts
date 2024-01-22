import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(),
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true, // Habilitar GitHub Flavored Markdown
          breaks: true, // Habilitar saltos de línea simples
          smartLists: true, // Habilitar listas inteligentes
          smartypants: true, // Habilitar corrección de estilo tipográfico
          langPrefix: 'hljs language-', // Prefijo para clases de resaltado de sintaxis
          headerIds: true, // Generar automáticamente IDs para encabezados
        },
      },
    }),
  ],
};
