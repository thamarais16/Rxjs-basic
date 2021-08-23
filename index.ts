import './style.css';

import { 
  Observable,
  tap,
  of,  
  timer,
  interval ,
  from
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
  setTimeout(()=>{ observer.complete() },7000);
}).pipe(
  tap(val => { console.log("tap "+ val)}),
);

/* create.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log("emit completed")
); */

/**2 */
let ofs = of([1,2,3], 100, "Hello");

// ofs.subscribe(
//   (val)=> {console.log(val)},
//   (err)=> {console.log(err)},
//   ()=> {console.log("ofs completed")},
// );

let ofs2 = of(["Thamarai"], ["selvan"]);

// ofs2.subscribe(
//   (val)=> { console.log(val) },
//   (err)=> {  console.log(err) },
//   ()=> {  console.log("ofs2 completed") },
// );

/**3 */
let map = new Map();
map.set(1, 'abc').set(2, 'def').set(3, 'ghi');

let froms = from(map)

froms.subscribe(
  (val) => { console.log(val); },
  (err) => { console.log(err); },
  () => { console.log("froms completed"); }
);



let froms2 = from(gen())

froms2.subscribe(
  (val) => { console.log(val); },
  (err) => { console.log(err); },
  () => { console.log("froms2 completed"); }
);

function *gen(){
  let i = 0;
  while(i < 5){
    i = i + 1
    yield i;
  };
}




















/**
 * 
  of('World')
    .pipe(map(name => `Hello, ${name}!`))
      .subscribe(console.log);
*/

