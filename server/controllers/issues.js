const { Octokit } = require('octokit');

const octokit = new Octokit({
  auth: process.env.YOUR_PASSWORD,
});

const getIssues = async (req, res) => {
  
  const { owner, repo } = req.params;

  try {

    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    })

    let tempArray = [];

    for (let obj of response.data) {
      let time = obj.created_at.slice(0, 10);
      tempArray.push({ url: obj.html_url, title: obj.title, number: obj.number, user: obj.user.login, create: time });
    }

    res.status(200).json(tempArray);
    
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

};

module.exports = {
  getIssues
};
