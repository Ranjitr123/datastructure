
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

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-success">this is heading</h1>
    </div>
  );
}

export default App;
