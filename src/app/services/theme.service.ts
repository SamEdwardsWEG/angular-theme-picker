import { Injectable, computed, effect, signal } from '@angular/core';
import {  } from '@angular/material';

export interface AppTheme {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {


  darkMode = false;
  previousTheme = '';
  customTheme: string;

  private appTheme = signal<'red' | 'green' | 'blue' | 'yellow' | 'cyan' | 'magenta' | 'orange' | 'chartreuse' | 'spring-green' | 'azure' | 'violet' | 'rose'>('red');

  private themes: AppTheme[] = [
    { name: 'red', icon: 'desktop_windows' },
    { name: 'green', icon: 'desktop_windows' },
    { name: 'blue', icon: 'desktop_windows' },
    { name: 'yellow', icon: 'desktop_windows' },
    { name: 'cyan', icon: 'desktop_windows' },
    { name: 'magenta', icon: 'desktop_windows' },
    { name: 'orange', icon: 'desktop_windows' },
    { name: 'chartreuse', icon: 'desktop_windows' },
    { name: 'spring-green', icon: 'desktop_windows' },
    { name: 'azure', icon: 'desktop_windows' },
    { name: 'violet', icon: 'desktop_windows' },
    { name: 'rose', icon: 'desktop_windows' },
  ];

  selectedTheme = computed(() =>
    this.themes.find((t) => t.name === this.appTheme())
  );

  getThemes() {
    return this.themes;
  }

  setTheme(theme) {
    this.previousTheme = this.appTheme();
    this.appTheme.set(theme);
  }

  changeDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  changeTheme(value) {

    console.log(value);
    console.log(document.body.style)

    document.body.style.setProperty('--mat-sys-primary', value);
    document.body.style.setProperty('--mat-sys-surface-variant', value);
    document.body.style.setProperty('--mat-sys-on-primary-container-variant', value);
  }

  constructor() {
    effect(() => {
      const classes = document.body.classList;

      if (classes.length > 1) {
        classes.remove(this.previousTheme);
      }

      document.body.classList.add(this.appTheme());

      if (this.darkMode) {
      document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }
}
