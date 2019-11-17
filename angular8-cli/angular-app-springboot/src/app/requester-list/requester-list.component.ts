import { RequesterDetailsComponent } from '../requester-details/requester-details.component';
import { Observable } from "rxjs";
import { RequesterService } from "../requester.service";
import { Requester } from "../requester";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-requester-list",
  templateUrl: "./requester-list.component.html",
  styleUrls: ["./requester-list.component.css"]
})
export class RequesterListComponent implements OnInit {
  request: Observable<Requester[]>;

  constructor(private requesterService: RequesterService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.request = this.requesterService.getRequestList();
  }

  deleteRequester(id: number) {
    this.requesterService.deleteRequester(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateRequester(id: number) {
    this.router.navigate(['update', id]);
  }

  requesterDetails(id: number){
    this.router.navigate(['details', id]);
  }
}