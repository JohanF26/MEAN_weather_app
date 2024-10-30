import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  articles: Article[] = []
  published: string = ''
  query: string = '';
  errString: string = ''

  constructor(     
    private articleService: ArticleService,
    private messengerService: MessengerService,
    private router: Router
  ) { }

  loadArticles() {
    this.articleService.getArticles().subscribe((values: Article[]) => {
      this.articles = values;
    })
  }

  ngOnInit(): void {
    this.loadArticles()
    this.messengerService.getMsg().subscribe(() => {
      this.loadArticles(); //event trigger from messenger service
    })
  }
}