
export default function GIthub_Porjects() {
    let data = fetch("https://api.github.com/users/badhon252/repos");
    
    data.then(res=>console.log(res)).catch(err=>console.log(err))

  return (
    <div>{data}</div>
  )
}
