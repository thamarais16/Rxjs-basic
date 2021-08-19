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
 * @description Observable is the function that convert ordinary stream of data into observable streaam of data. it emit value asynchronously from stream asynchronously. emits error when stream errors out. emit complete signal when stream completes.
 * 
 * @description Tap Operator is useful for logging, debuuging the stream. It does not modify the stream any way.
 * 
 * @description of Operator creates observable from argumnents we pass in it. we can pass any number of argumnets.it emit each argumnets separately one after other.
 * 
 * @description from Operator creates observable from argumnents we pass in it. we can pass only one argument in it.It iterates over argument and emits each value.
*/


/**1 */
let create = Observable.create(observer => {
  setTimeout(()=>{ observer.next("Hi") },2000);
  setTimeout(()=>{ observer.next("Thamarai") },4000);
  setTimeout(()=>{ observer.next("How are you") },6000);
}).pipe(
  tap(val => {debugger; console.log("tap "+ val)}),
);

/* create.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log("emit completed")
); *//

/**2 */
let obs = of([1,2,3], 100, "Hello");

obs.subscribe(
  (val)=> {console.log(val)},
  (err)=> {console.log(err)},
  ()=> {console.log("completed")},
)




















/**
 * 
  of('World')
    .pipe(map(name => `Hello, ${name}!`))
      .subscribe(console.log);
*/

