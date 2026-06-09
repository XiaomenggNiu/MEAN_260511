import { Injectable } from '@angular/core';
import { filter, forkJoin, from, fromEvent, interval, map, of, take, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  // Creation operators
  obs1 = of([1, 2, 3]);
  obs2 = from([1, 2, 3]);
  notifier = fromEvent(document, 'click')
  obs3 = interval(1000).pipe(
    // take(10),
    takeUntil(this.notifier),
  );

  // obs = forkJoin([this.obs1, this.obs2]);

  // Pipeable operators, pipe()
  obs = this.obs2.pipe(
    tap((v)=>console.log("in service, tap", v)),
    // filter(v=>v > 1),
    map((v)=> v *100),
  )
}
