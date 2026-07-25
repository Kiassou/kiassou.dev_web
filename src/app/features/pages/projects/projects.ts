import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { leapfrog } from 'ldrs'
leapfrog.register()

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements AfterViewInit {

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

  showDetailsModal = false;
  showCommentModal = false;

  selectedProject: any = null;
  currentProject: any = null;

  commentName = '';
  commentMessage = '';

  projects = [

    {
      id: 1,
      name: 'BookZen',
      category: 'Application Web',
      logo: 'assets/images/bookzen_logo.png',
      image: 'assets/images/bookzen_image.png',
      shortDescription:
      'Plateforme Full Stack de gestion de bibliothèque offrant une administration centralisée, une authentification sécurisée et une expérience utilisateur fluide.',
      description:
      'BookZen est une application web Full Stack conçue pour simplifier la gestion d’une bibliothèque. Elle permet d’administrer les livres, les catégories, les utilisateurs et les emprunts depuis un tableau de bord moderne. L’application intègre une authentification sécurisée basée sur JWT, une architecture REST, une interface responsive ainsi qu’un système de recherche et de gestion optimisé. Ce projet met en avant mes compétences en développement Full Stack, en conception de bases de données relationnelles et en création d’interfaces modernes avec Angular.',
      technologies: [
      'Angular',
      'Node.js',
      'Express',
      'MySQL',
      'Bootstrap'
      ],
      features: [
      'Authentification sécurisée avec JWT',
      'Gestion des utilisateurs et des rôles',
      'Gestion des livres et des catégories',
      'Emprunts et retours de livres',
      'Tableau de bord administrateur',
      'Recherche et filtrage avancés',
      'API REST sécurisée',
      'Interface responsive'
      ],

      github: 'https://github.com/kiassou',

      demo: '',

      likes: 16,

      liked: false,

      comments: []
    },

    {
      id: 2,
      name: 'StockNova',
      category: 'Gestion de Stock',
      logo: 'https://i.pinimg.com/736x/10/cc/ed/10cced86ea99c042983c86cfb457ebb5.jpg',
      image: 'https://i.pinimg.com/736x/8b/c8/e8/8bc8e8bfa61a074d47b65bd97df4229e.jpg',
      shortDescription:
      'Solution Full Stack de gestion de stock permettant aux entreprises de suivre leurs produits, ventes et performances en temps réel.',
      description:
      'StockNova est une application web de gestion de stock développée pour centraliser l’administration des produits, des catégories, des clients et des ventes. Elle offre un tableau de bord interactif avec des statistiques en temps réel afin d’aider les entreprises à mieux suivre leurs activités. L’application repose sur une architecture moderne combinant Angular et Spring Boot, garantissant des performances élevées, une maintenance facilitée et une interface responsive.',
      technologies: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Bootstrap'
      ],
      features: [
        'Gestion complète des produits (CRUD)',
        'Gestion des catégories',
        'Suivi des ventes',
        'Gestion des clients',
        'Tableau de bord interactif',
        'Statistiques en temps réel',
        'Recherche et filtrage',
        'Interface responsive'
      ],
      github: 'https://github.com/kiassou',
      demo: '',
      likes: 19,
      liked: false,
      comments: []
    },
    
    {
      id: 3,
      name: 'BamaFood',
      category: 'Application Restaurant',
      logo: 'assets/images/bamafood_logo.png',
      image: 'https://i.pinimg.com/736x/e2/29/ef/e229efd0283d5f4d8df255d10fc9833f.jpg',
      shortDescription:
      'Plateforme Full Stack de commande de repas en ligne offrant une expérience fluide aux clients, livreurs et administrateurs.',
      description:
      'BamaFood est une plateforme de restauration développée pour simplifier la commande et la gestion des repas en ligne. L’application permet aux clients de consulter les menus, passer des commandes, suivre leur livraison et effectuer leurs paiements. Les administrateurs disposent d’un tableau de bord complet pour gérer les restaurants, les menus, les commandes et les utilisateurs. L’architecture Full Stack assure une navigation rapide, une authentification sécurisée et une expérience utilisateur moderne sur ordinateur comme sur mobile.',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MySQL',
        'Bootstrap'
      ],
      features: [
        'Authentification sécurisée',
        'Catalogue des menus',
        'Panier intelligent',
        'Commande de repas',
        'Suivi des commandes',
        'Paiement intégré',
        'Tableau de bord administrateur',
        'Gestion des menus et des utilisateurs',
        'Interface responsive'
      ],
      github: 'https://github.com/kiassou',
      demo: '',
      likes: 21,
      liked: false,
      comments: []
    },

    {
      id: 4,
      name: 'MyResto',
      category: 'Application Web',
      logo: 'https://i.pinimg.com/736x/c6/87/75/c68775c821cc6d10deb18ddff1eebd05.jpg',
      image: 'https://i.pinimg.com/vwebp/736x/f8/f0/e9/f8f0e992ab4d4375f0c41c8b06758d31.webp',
      shortDescription:
      'Solution web de gestion de tickets restaurant permettant de simplifier les commandes, les paiements et le suivi des transactions.',
      description:
      'MyResto est une application web conçue pour digitaliser la gestion des tickets restaurant. Elle permet d\'administrer les utilisateurs, les articles, les commandes et les paiements depuis une interface intuitive. Le projet met en avant une architecture Full Stack sécurisée, une authentification JWT ainsi qu\'un tableau de bord offrant un suivi complet de l\'activité du restaurant.',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MySQL',
        'Bootstrap'
      ],
      features: [
        'Authentification sécurisée avec JWT',
        'Gestion des utilisateurs',
        'Gestion des articles',
        'Gestion des commandes',
        'Gestion des paiements',
        'Tableau de bord administrateur',
        'Statistiques',
        'Interface responsive'
      ],
      github: 'https://github.com/kiassou',
      demo: '',
      likes: 12,
      liked: false,
      comments: []
    },
    
   {
      id: 5,
      name: 'Quizfy',
      category: 'Application Web',
      logo: 'assets/images/quizify_logo.png',
      image: 'https://i.pinimg.com/vwebp/1200x/8e/39/41/8e3941c6fd6f284898cd89287ef6a5fa.webp',
      shortDescription:
      'Plateforme interactive de quiz permettant de créer, partager et relever des défis tout en suivant sa progression.',
      description:
      'Quizfy est une application web dédiée à l\'apprentissage et au divertissement grâce à des quiz interactifs. Les utilisateurs peuvent créer leurs propres questionnaires, participer à des défis, consulter leur historique et suivre leurs performances grâce à des statistiques détaillées. Le projet met en œuvre une architecture moderne, une authentification sécurisée et une expérience utilisateur fluide.',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MySQL',
        'Bootstrap'
      ],
      features: [
        'Authentification sécurisée',
        'Création de quiz',
        'Participation aux quiz',
        'Classement des joueurs',
        'Historique des résultats',
        'Statistiques détaillées',
        'Tableau de bord',
        'Interface responsive'
      ],
      github: '#',
      demo: '',
      likes: 12,
      liked: false,
      comments: []
    },
    
    {
      id: 6,
      name: 'CityCare',
      category: 'Application mobile',
      logo: 'assets/images/citycare_image.png',
      image: 'https://i.pinimg.com/vwebp/736x/ed/df/92/eddf920f8335e3dbb555ed5e0ea65e78.webp',
      shortDescription:
      'Application mobile citoyenne permettant de signaler les incidents urbains et de suivre leur résolution.',
      description:
      'CityCare est une application mobile qui facilite la communication entre les citoyens et les services municipaux. Les utilisateurs peuvent signaler des problèmes tels que les routes dégradées, l\'éclairage public défectueux ou les dépôts sauvages, joindre des photos, suivre le traitement de leurs signalements et évaluer la qualité des interventions.',
      technologies: [
        'Flutter',
        'Node.js',
        'Express',
        'MySQL'
      ],
      features: [
        'Authentification sécurisée',
        'Signalement avec photo',
        'Suivi des incidents',
        'Notifications',
        'Historique des signalements',
        'Évaluation des interventions',
        'Tableau de bord administrateur',
        'Interface mobile responsive'
      ],
      github: 'https://github.com/kiassou',
      demo: '',
      likes: 52,
      liked: false,
      comments: []
    },
    
    {
      id: 7,
      name: 'Toptok',
      category: 'Application mobile',
      logo: 'https://i.pinimg.com/736x/aa/d5/ac/aad5ac6a93172a5c669844abbaf546f1.jpg',
      image: 'https://i.pinimg.com/736x/3d/5d/ce/3d5dce565c7a1a3345e217cdbd294137.jpg',
      shortDescription:
      'Plateforme mobile de partage de vidéos courtes offrant une expérience sociale moderne et immersive.',
      description:
    'Toptok est une application mobile inspirée des plateformes de vidéos courtes. Les utilisateurs peuvent publier des vidéos, interagir grâce aux commentaires et aux mentions "J\'aime", suivre leurs créateurs favoris et découvrir du contenu personnalisé. L\'application s\'appuie sur Firebase pour la gestion des données en temps réel et des utilisateurs.',
      technologies: [
        'Flutter',
        'Firebase'
      ],
      features: [
        'Authentification',
        'Publication de vidéos',
        'Lecture en continu',
        'Commentaires',
        'Mentions "J’aime"',
        'Profils utilisateurs',
        'Flux personnalisé',
        'Temps réel avec Firebase'
      ],
      github: 'https://github.com/kiassou',
      demo: '',
      likes: 25,
      liked: false,
      comments: []
    },

    {
      id: 8,
      name: 'Altrix',
      category: 'Application mobile',
      logo: 'https://i.pinimg.com/vwebp/736x/57/27/03/57270347fd0da74b51f37bcc7087eb2c.webp',
      image: 'https://i.pinimg.com/736x/21/4d/14/214d1469b17432b26ee2e3c28afe617c.jpg',
      shortDescription:
      'Solution mobile de transfert d\'argent conçue pour réaliser des transactions rapides, fiables et sécurisées.',
      description:
      'Altrix est une application mobile de transfert d\'argent développée pour faciliter les transactions financières entre utilisateurs. Elle offre une gestion sécurisée des comptes, un historique détaillé des opérations, des notifications en temps réel ainsi qu\'une interface intuitive garantissant une expérience utilisateur fluide.',

      technologies: [
        'Flutter',
        'Dart',
        'Node.js',
        'MySQL'
      ],

      features: [
        'Authentification sécurisée',
        'Transfert d\'argent',
        'Historique des transactions',
        'Gestion des bénéficiaires',
        'Notifications',
        'Tableau de bord utilisateur',
        'Sécurité des opérations',
        'Interface responsive'
      ],
      github: 'https://github.com/kiassou',
      demo: '',
      likes: 32,
      liked: false,
      comments: []
    },


  ];


  toggleLike(project: any) {

    project.liked = !project.liked;

    if (project.liked) {

      project.likes++;

    } else {

      project.likes--;

    }

  }


  openDetails(project: any) {

    this.selectedProject = project;

    this.showDetailsModal = true;

  }

  closeDetails() {

    this.showDetailsModal = false;

  }


  openCommentModal(project: any) {

    this.currentProject = project;

    this.showCommentModal = true;

  }

  closeCommentModal() {

    this.showCommentModal = false;

    this.commentName = '';

    this.commentMessage = '';

  }

  submitComment() {

    if (!this.commentName.trim() || !this.commentMessage.trim()) {

      return;

    }

    this.currentProject.comments.push({

      name: this.commentName,

      message: this.commentMessage,

      date: new Date()

    });

    this.commentName = '';

    this.commentMessage = '';

    this.showCommentModal = false;

  }


  getTechColor(tech: string): string {

    const colors: any = {

      Angular: '#dd0031',

      'Node.js': '#3c873a',

      Express: '#5b5b5b',

      Bootstrap: '#7952b3',

      HTML: '#e34c26',

      CSS: '#264de4',

      JavaScript: '#f7df1e',

      TypeScript: '#3178c6',

      MySQL: '#00758f',

      PostgreSQL: '#336791',

      MongoDB: '#13aa52',

      Firebase: '#ffca28',

      Flutter: '#42a5f5',

      Django: '#0c4b33',

      Java: '#f89820',

      'Spring Boot': '#6db33f',

      Python: '#3776ab',

      Git: '#f1502f',

      GitHub: '#24292f',

      Docker: '#2496ed',

      Linux: '#fbc02d'

    };

    return colors[tech] || '#6c757d';

  }

}