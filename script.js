

const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
// You can write your code here

async function handleApiUsingPall() {
	 const start = performance.now();
	await Promise.all(apiUrls.map(url => fetch(url)));
	 const end = performance.now();
	 document.getElementById("output-all").textContent = end - start;
}
async function handleApiUsingPany() {
	const start = performance.now();
	 await Promise.any(apiUrls.map(url => fetch(url)));
	const end = performance.now();
	 document.getElementById("output-any").textContent = end - start; 
	
}
handleApiUsingPall() ;
 handleApiUsingPany() ;
