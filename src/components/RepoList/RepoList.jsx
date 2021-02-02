import React from 'react';
import PropTypes from 'prop-types';

import { Repo } from '../Repo';

export const RepoList = ({ repos, userLogin }) => (
  repos.map(repo => (
    <Repo
      key={repo.id}
      id={repo.id}
      starsCount={repo.stargazers_count}
      forksCount={repo.forks}
      repoName={repo.name}
      userLogin={userLogin}
    />
  ))
)

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      forks: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  userLogin: PropTypes.string.isRequired,
}
