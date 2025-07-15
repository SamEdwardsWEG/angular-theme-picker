import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from '../../sample-dialog/sample-dialog.component';
import { MatOption } from "@angular/material/core";
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRadioModule,
    MatOption,
    MatSelectModule,
    ReactiveFormsModule
],
  templateUrl: './content.component.html',
  styleUrl:  './content.component.scss',
})
export class ContentComponent {
  private dialog = inject(MatDialog);
  themeService = inject(ThemeService);
  fb = inject(FormBuilder);

  form = this.fb.group({
    color: new FormControl('')
  })

  constructor() {
    //
    // UNCOMMENT THE BELOW TO ENABLE CUSTOM COLORS
    //

    // this.form.valueChanges.subscribe(
    //   res => this.themeService.changeTheme(res.color)
    // );
  }

  showDialog(): void {
    this.dialog.open(SampleDialogComponent, {
      width: '500px',
    });
  }
}
