import { Octokit } from "badhon252";

export default function GIthub_Porjects() {
    const khalid = fetch("https://api.github.com/users/badhon252/repos")

    const data = async() =>{
        const response = await khalid.request("GET /repos/{owner}/{repo}/issues", {
            owner: "octocat",
            repo: "Spoon-Knife",
        });
        console.log(response);
    }
    data();
   


  return (
    <div>GIthub_Porjects</div>
  )
}
