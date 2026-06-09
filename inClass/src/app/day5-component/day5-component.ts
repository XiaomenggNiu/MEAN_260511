import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FetchDataService } from '../day4-component/Service/fetch-data-service';
import { BehaviorSubject, first, fromEvent, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { ShareDataService } from './Service/share-data-service';

@Component({
  selector: 'app-day5-component',
  imports: [],
  templateUrl: './day5-component.html',
  styleUrl: './day5-component.scss',
})
export class Day5Component implements OnInit, AfterViewInit{
  private dataService = inject(ShareDataService);
  // multi cast
  firstSub = new Subject();
  // Uni-cast
  myObs = new Observable<number>((subscriber)=>{
      // start of the data stream
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      subscriber.next(4)
     
      subscriber.complete();
  });
  // give you the latest value in the stream
  secondSub = new BehaviorSubject(0);
  // replay the entire data stream
  thirdSub = new ReplaySubject(3);

  sub: Subscription[]= [];


  ngOnInit(): void {
    this.sub.push(this.dataService.obs.subscribe((res)=>{
      console.log(res);
    }))
    this.dataService.obs3.subscribe((res)=>{
      console.log(res);
    })
   
    // sharing the same data stream
    // this.firstSub.subscribe((val)=>{
    //   console.log("subject 1", val);
    // })
    // this.firstSub.next(1);
    // this.firstSub.next(2);

    // this.firstSub.subscribe((val)=>{
    //   console.log("subject 2", val);
    // })
    // this.firstSub.next(3);

    // independent data streams
    // this.myObs.subscribe((res)=>{
    //   console.log('obs 1', res)
    // })
    // this.myObs.subscribe((res)=>{
    //   console.log('obs 2', res)
    // })

    // this.secondSub.subscribe((val)=>{
    //   console.log("behavior subject 1", val);
    // })
    // this.secondSub.next(1);
    // this.secondSub.next(2);

    // this.secondSub.subscribe((val)=>{
    //   console.log("behavior subject 2", val);
    // })
    // this.secondSub.next(3);

    // this.thirdSub.subscribe((val)=>{
    //   console.log("Replay subject 1", val);
    // })
    // this.thirdSub.next(1);
    // this.thirdSub.next(2);
    // this.thirdSub.next(3);
    // this.thirdSub.next(4);

    // this.thirdSub.subscribe((val)=>{
    //   console.log("Replay subject 2", val);
    // })
    // this.thirdSub.next(5);
    
  }

  ngAfterViewInit(): void {
    const btn = document.querySelector(".btn");
    if (btn){
      fromEvent(btn, "click").subscribe((res)=>{
        console.log("from Event Observable", res)
        this.sub?.forEach((sub)=>sub.unsubscribe());
      })
    }

   

  }
}
