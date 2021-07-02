import { Component, Input, OnInit, Output } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  @Input() topic: string = '';
  quiz: any;

  constructor(
    private question: QuestionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const topicFromRoute = String(routeParams.get('topic'));
    this.topic = topicFromRoute;
    this.quiz = this.getQuestions(this.topic);
    console.log(this.quiz);
  }

  getQuestions(topic: string) {
    this.question.getQuestion(topic).subscribe((q) => {
      this.quiz = q;
      console.log(q);
    });
  }
}
