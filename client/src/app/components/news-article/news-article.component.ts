import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  article: Article;

  constructor(
    private messenger: MessengerService,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.messenger.sendMsg({
      type: '',
      msg: ''
    })
    const id = this.route.snapshot.params.id;
    this.articleService.getSingleArticle(id).subscribe((result: Article) => {
      this.article = result;
    })
  }

}
