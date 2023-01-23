
export default function GIthub_Porjects() {
    let data = fetch("https://api.github.com/users/badhon252/repos");
    
    data.then(res=>JSON.stringify(res)).then(data=>console.log(data)).catch(err=>console.log(err))

  return (
    <div>{}</div>
  )
}
