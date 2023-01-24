
export default function GIthub_Porjects() {
    const data = fetch("https://api.github.com/users/badhon252/repos")
        data.then(res=>console.log(res)).catch(err=>console.log(err))

  return (
    <div>GIthub_Porjects</div>
  )
}
