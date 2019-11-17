import { RequesterService } from '../requester.service';
import { Requester } from '../requester';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-requester',
  templateUrl: './create-requester.component.html',
  styleUrls: ['./create-requester.component.css']
})
export class CreateRequesterComponent implements OnInit {

  requester: Requester = new Requester();
  submitted = false;

  constructor(private requesterService: RequesterService,
    private router: Router) { }

  ngOnInit() {
  }

  newRequester(): void {
    this.submitted = false;
    this.requester = new Requester();
  }

  save() {
    this.requesterService.createRequester(this.requester)
      .subscribe(data => console.log(data), error => console.log(error));
    this.requester = new Requester();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/request']);
  }
}