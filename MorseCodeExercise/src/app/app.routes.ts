import { Routes } from '@angular/router';
import { MorseCodeEncoderComponent } from './morse-code-encoder/morse-code-encoder.component';
import { MorseCodeDecoderComponent } from './morse-code-decoder/morse-code-decoder.component';

export const routes: Routes = [
  { path: 'morse-code-encoder', component: MorseCodeEncoderComponent },
  { path: 'morse-code-decoder', component: MorseCodeDecoderComponent },
  { path: '', redirectTo: '/morse-code-encoder', pathMatch: 'full'}
];
