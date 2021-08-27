import './style.css';

import { 
  Observable,
  tap,
  of,  
  timer,
  interval ,
  from,
  filter,
  pipe,
delay
} from 'rxjs';


/**
 * @description Observable is the function that convert ordinary stream of data into observable streaam of data. it emit value asynchronously from stream asynchronously. emits error when stream errors out. emit complete signal when stream completes.
 * 
 * @description Tap Operator is useful for logging, debugging the stream. It does not modify the stream any way.
 * 
 * @description of Operator creates observable from argumnents we pass in it. we can pass any number of argumnets.it emit each argumnets separately one after other.
 * 
 * @description from Operator creates observable from argumnents we pass in it. we can pass only one argument in it. it iterates over the argument and emits each value.
 * 
 * @description Pipe is an observable method which is used for composing operators. Pipe accepts rxjs operatos as a argument. Each operatos is seperated by comma. we can also use pipe as a stand alone or instance method. The order of operator is important for pipe method.
 * 
 * @description delay the emission observable by a given timeout .
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

// froms.subscribe(
//   (val) => { console.log(val); },
//   (err) => { console.log(err); },
//   () => { console.log("froms completed"); }
// );


let froms2 = from(gen())

// froms2.subscribe(
//   (val) => {console.log(val)},
//   (err) => {console.log(err)},
//   () => {console.log("froms2 completed")},
// );

function *gen(){
  let i = 1;
  
  while(i<=5){
    yield i;
    i++;
  }
}

/* 4*/

let custompipe = pipe(
  tap( val => { console.log("tap "+ val) } ),
  filter( val => { return val > 2 } ), 

)

let pipes = new Observable((observe)=>{
  observe.next(1);
  observe.next(2);
  observe.next(3);
  observe.next(4);
  observe.next(5);
  observe.next(6);
  observe.complete();
})

custompipe(pipes).subscribe(
  (val) => { console.log(val)},
  (err) => {console.log("pipe complete")},
  () => {console.log("pipe complete")}
);


let pipes2 = new Observable((observe)=>{
  observe.next(1);
  observe.next(2);
  observe.next(3);
  observe.next(4);
  observe.next(5);
  observe.next(6);
  observe.complete();
}).pipe(
  custompipe
)

pipes2.subscribe(
  (val) => { console.log(val)},
  (err) => {console.log("pipe complete")},
  () => {console.log("pipe complete")}
);

of(1, 2, 3, 4, 5)
.pipe(
  tap(val => console.log("Before " + val)),
  delay(10 * 1000)
)
.subscribe(
  val => console.log(val),
  e => console.log(e),
  () => console.log("Complete")
);





















/**
 * 
  of('World')
    .pipe(map(name => `Hello, ${name}!`))
      .subscribe(console.log);
*/

