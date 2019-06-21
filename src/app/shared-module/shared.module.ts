import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  exports:[
    MatProgressBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
