import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { newtonsCradle } from 'ldrs';


newtonsCradle.register();

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splash.html',
  styleUrls: ['./splash.css']
})
export class SplashComponent implements OnInit {

  isLoading = true;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    setTimeout(() => {

      this.isLoading = false;

      setTimeout(() => {

        this.router.navigate(['/home']);

      }, 700);

    }, 3500);

  }

}