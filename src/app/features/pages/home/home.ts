import { Component, CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { bouncy } from 'ldrs';

bouncy.register();

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatIconModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent implements AfterViewInit {

  @ViewChildren('reveal')
  reveals!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('active');

          } else {

            entry.target.classList.remove('active');

          }

        });

      },

      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
      }

    );

    this.reveals.forEach((element) => {

      observer.observe(element.nativeElement);

    });

  }

}