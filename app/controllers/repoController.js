const axiosClient = require('../config/axiosClient');

// const showRepoInfo =  async ( req, res ) => {
//     const repoName = req.params;

//     res.status(200).json({
//         msg: 'The reponame is:',
//         reponame: repoName,
//     });
// };

exports.showRepoInfo = async ( req, res ) => {
    const userName = req.params.username;
    const repoName = req.params.reponame;
    if(userName && repoName){
        const resp = await axiosClient.get(`/repos/${userName}/${repoName}`);
        console.log(resp);
        res.status(200).json(resp.data);
    }
    else {
        res.send(400).json({
            msg: 'error',
        });
    }
};

exports.showCommitsInfo = async ( req, res ) => {
    const userName = req.params.username;
    const repoName = req.params.reponame;
    if(userName && repoName){
        const resp = await axiosClient.get(`/repos/${userName}/${repoName}/commits`);
        console.log(resp);
        res.status(200).json(resp.data);
    }
    else {
        res.send(400).json({
            msg: 'error',
        });
    }
}
