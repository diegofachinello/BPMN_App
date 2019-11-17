import { Requester } from '../requester';
import { Component, OnInit, Input } from '@angular/core';
import { RequesterService } from '../requester.service';
import { RequesterListComponent } from '../requester-list/requester-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requester-details',
  templateUrl: './requester-details.component.html',
  styleUrls: ['./requester-details.component.css']
})
export class RequesterDetailsComponent implements OnInit {

  id: number;
  requester: Requester;

  constructor(private route: ActivatedRoute,private router: Router,
    private requesterService: RequesterService) { }

  ngOnInit() {
    this.requester = new Requester();

    this.id = this.route.snapshot.params['id'];
    
    this.requesterService.getRequester(this.id)
      .subscribe(data => {
        console.log(data)
        this.requester = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['request']);
  }
}