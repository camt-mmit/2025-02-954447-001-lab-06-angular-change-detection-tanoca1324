import { Routes } from '@angular/router';
import { TrialOne } from './trial-one/trial-one';
import { TrialTwo } from './trial-two/trial-two';
import { TrialThree } from './trial-three/trial-three';
import { TrialZero } from './trial-zero/trial-zero';
import { TrialLab } from './trial-lab/trial-lab';

export const routes: Routes = [
  { path: '', redirectTo: 'trial-one', pathMatch: 'full' },
  { path: 'trial-one', component: TrialOne },
  { path: '', redirectTo: 'trial-two', pathMatch: 'full' },
  { path: 'trial-two', component: TrialTwo },
  { path: '', redirectTo: 'trial-three', pathMatch: 'full' },
  { path: 'trial-three', component: TrialThree },
  { path: '', redirectTo: 'trial-zero', pathMatch: 'full' },
  { path: 'trial-zero', component: TrialZero },
  { path: '', redirectTo: 'trial-lab', pathMatch: 'full' },
  { path: 'trial-lab', component: TrialLab },
];
