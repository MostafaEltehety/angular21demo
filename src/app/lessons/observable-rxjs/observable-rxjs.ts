import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-rxjs',
  imports: [],
  templateUrl: './observable-rxjs.html',
  styleUrl: './observable-rxjs.scss',
})
export class ObservableRxjs implements OnInit{
  ngOnInit(): void {
   this.myObservable.subscribe({
    next:value=>console.log(value),
    error:err=>console.log(err),
    complete:()=>console.log('Finshed')
   });
  }
  myObservable=new Observable(obs=>{
  obs.next("Hello"),
  obs.next("Mostafa"),
  obs.next('From Observable'),
  obs.complete()
});


}
