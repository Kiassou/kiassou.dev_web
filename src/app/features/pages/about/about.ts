import {
  Component,
  HostListener,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { metronome } from 'ldrs'
metronome.register()


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements AfterViewInit {

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

  showCvModal = false;

  openCvModal(): void {
    this.showCvModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeCvModal(): void {
    this.showCvModal = false;
    document.body.style.overflow = 'auto';
  }


  isScrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 80;
  }


  stats = [
    {
      value: '5+',
      label: 'Projets réalisés',
      icon: 'bi bi-briefcase-fill'
    },
    {
      value: '10+',
      label: 'Technologies',
      icon: 'bi bi-code-slash'
    },
    {
      value: '2026',
      label: 'Portfolio',
      icon: 'bi bi-stars'
    }
  ];


  passions = [
    {
      icon: 'bi bi-code-slash',
      title: 'Développement Web'
    },
    {
      icon: 'bi bi-phone-fill',
      title: 'Applications Mobile'
    },
    {
      icon: 'bi bi-cloud-fill',
      title: 'Cloud Computing'
    },
    {
      icon: 'bi bi-cpu-fill',
      title: 'DevOps'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Cybersécurité'
    },
    {
      icon: 'bi bi-palette-fill',
      title: 'UI / UX'
    }
  ];


  informations = [
    {
      icon: 'bi bi-mortarboard-fill',
      title: 'Formation',
      value: 'Génie Logiciel'
    },
    {
      icon: 'bi bi-geo-alt-fill',
      title: 'Localisation',
      value: 'Mali'
    },
    {
      icon: 'bi bi-laptop-fill',
      title: 'Spécialité',
      value: 'Développeur Full Stack'
    },
    {
      icon: 'bi bi-translate',
      title: 'Langues',
      value: 'Français • Anglais'
    },
    {
      icon: 'bi bi-envelope-fill',
      title: 'Email',
      value: 'thierogaoussou@email.com'
    },
    {
      icon: 'bi bi-telephone-fill',
      title: '+223 XX XX XX XX'
    }
  ];

  timeline = [
    {
      year: '2023',
      title: 'Entrée à la FST',
      description: 'Début de mon parcours en Génie Logiciel.'
    },
    {
      year: '2024',
      title: 'Développement Web',
      description: 'Découverte des technologies modernes.'
    },
    {
      year: '2025',
      title: 'Angular & Node.js',
      description: 'Développement de plusieurs applications Full Stack.'
    },
    {
      year: '2026',
      title: 'Portfolio & Stage',
      description: 'Création de projets professionnels et montée en compétences.'
    }
  ];

}