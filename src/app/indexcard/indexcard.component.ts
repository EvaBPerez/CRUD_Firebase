import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-indexcard',
  templateUrl: './indexcard.component.html',
  styleUrls: ['./indexcard.component.css']
})
export class IndexcardComponent implements OnInit {

  public bookId: number | undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bookId=this.route.snapshot.params['id'];
  }

}
