import { Component, OnInit } from '@angular/core';
import { Requester } from '../requester';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesterService } from '../requester.service';

@Component({
  selector: 'app-update-requester',
  templateUrl: './update-requester.component.html',
  styleUrls: ['./update-requester.component.css']
})
export class UpdateRequesterComponent implements OnInit {

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

  updateRequester() {
    this.requesterService.updateRequester(this.id, this.requester)
      .subscribe(data => console.log(data), error => console.log(error));
    this.requester = new Requester();
    this.gotoList();
  }

  onSubmit() {
    this.updateRequester();    
  }

  gotoList() {
    this.router.navigate(['/request']);
  }
}