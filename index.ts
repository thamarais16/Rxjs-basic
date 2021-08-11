import './style.css';

import { 
  Observable,
  map,
  tap,
  of,  
  timer,
  interval 
} from 'rxjs';

/**
 * @description Observable is the function that convert or
 * @description Tap Operator is useful for logging, debuuging the stream. It does not modify the stream any way.
 * 
*/
new Observable((observe)=>{
  setTimeout(()=>{
    observe.next(1);
  },2000);
  setTimeout(()=>{
    observe.next(2);
  },4000);
  setTimeout(()=>{
    observe.complete();
  },6000);
}).pipe(
  tap(
    val => {
      console.log("After " + val);
    },
    () => {
      console.log("completed");
    }
  ),
) .subscribe(val => console.log(val));




















/**
 * 
  of('World')
    .pipe(map(name => `Hello, ${name}!`))
      .subscribe(console.log);
*/

