import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-observable-rxjs',
  imports: [],
  templateUrl: './observable-rxjs.html',
  styleUrl: './observable-rxjs.scss',
})
export class ObservableRxjs implements OnInit{
data=of(1,2,3,4,5,6,7,8,9,10);





 mapObservable=of(1,2,3).pipe(
  map(x=>x*10)
).subscribe(value=>console.log("Map",value));
filterObservable=this.data.pipe(
  filter(x=>x>5)
).subscribe(value=> console.log("filter",value));


tabObservable=this.data.pipe(
  tap(x=>console.log('قبل',x))
).subscribe();





mapObservableCode=` mapObservable=of(1,2,3).pipe(
  map(x=>x*10)
).subscribe(value=>console.log("Map",value));`;
filterObservableCode=`filterObservable=this.data.pipe(
  filter(x=>x>5)
).subscribe(value=> console.log("filter",value));
`;

tabObservableCode=`tabObservable=this.data.pipe(
  tap(x=>console.log('قبل',x))
).subscribe();`;


  ngOnInit(): void {
   this.myObservable.subscribe({
    next:value=>console.log(value),
    error:err=>console.log(err),
    complete:()=>console.log('Finshed')
   });
    this.mapObservable;

  }



  myObservable=new Observable(obs=>{
  obs.next("Hello"),
  obs.next("Mostafa"),
  obs.next('From Observable'),
  obs.complete()
});

codeObs=` myObservable=new Observable(obs=>{
  obs.next("Hello"),
  obs.next("Mostafa"),
  obs.next('From Observable'),
  obs.complete()
});
`;

codeView=`this.myObservable.subscribe({
    next:value=>console.log(value),
    error:err=>console.log(err),
    complete:()=>console.log('Finshed')
   });`;
operator=`source$
  .pipe(
    operator1(),
    operator2(),
    operator3()
  )
  .subscribe(...)
`;




}
