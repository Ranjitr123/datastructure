
import "./App.css";
// fibonacci number 


function fibo(n:any){
let arr = [0,1]
for(var i= 2 ;i<= n ; i++ ){
 arr[i] = (arr[i-1] +  arr[i-2])
  console.log(arr)
}
 
}
fibo(6)

// factorial testing 
const fact = (n:any)=>{
  let result = 1;
  for(let i = 2 ; i<=n ;i++){
    result = result * i
  }
  console.log(result)

}
fact(8)

// prime number testing 

  let prime = (n:any)=>{
   if(n< 2) {
    return false
   }
   for(let i =2 ; i< n ; i++){
    if((n % i ) === 0){
      console.log("false")
      return false
    }
   
   }
   console.log("true")
  }
 prime(53)

  // number is a power of 2 or not 
 
  const power = (n:any)=>{
     if(n < 1){
      console.log("false")
      return false
     }
     while(n>1){
      if(n % 2 !== 0){
        console.log("false")
        return false
      }
      n = n/2
     }
     console.log("true")
     return true
  }
power(32)

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-success">this is heading</h1>
    </div>
  );
}

export default App;
