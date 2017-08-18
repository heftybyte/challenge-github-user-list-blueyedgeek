const baseUrl = 'https://api.github.com/users/';

const fetchGithubUser = (username) => {
  return fetch(`${baseUrl}${username}`).then((res) => {
    return res.json().then((res) => {
      return res
    })
  });
};

export default fetchGithubUser;