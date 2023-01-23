import { Octokit } from "octokit";

export default function GIthub_Porjects() {
    const khalid = new Octokit({
        auth : "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"
    });

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
