import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../../models/article'

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.css']
})
export class RecentNewsComponent implements OnInit {

  articles: Article[] = []

  constructor(
    private articleService: ArticleService
  ) { }

  loadArticles() {
    this.articleService.getRecentArticles().subscribe((values: Article[]) => {
      this.articles = values;
    })
  }

  ngOnInit(): void {
    this.loadArticles()
  }

}
