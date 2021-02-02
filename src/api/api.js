const API_URL = 'https://api.github.com';
const usersPreview = 20;
const reposUser = 100;

const request = (url) => {
  return fetch(
    `${API_URL}${url}`,
    {
      headers: {
        "User-Agent": "search_github_users",
        Accept: "application/vnd.github.v3+json",
        authorization: "token 1c34b6ff35a8445c022973d13306fe3cb4406e94",
      }
    })
    .then(response => {
      if (response.ok) {

        return response.json();
      }

      throw `${response.status} - ${response.statusText}`
    })
}

export const getUsers = () => request(
  `/users?per_page=${usersPreview}`
)

export const getUserInfo = (login) => request(
  `/users/${login}`
)

export const getUserRepos = (login) => request(
  `/users/${login}/repos?per_page=${reposUser}`)

export const getQueryUsers = (sbr) => (
  request(`/search/users?q=${sbr}`)
    .then(users => users.items)
)
