import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { Container, Box, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import PaginationTable, {
  PaginationCell,
  PaginationRow,
} from '../components/PaginationTable';
import SearchDropdown from '../components/SearchDropdown';
import AppBar from '../components/AppBar';
import ErrorMsg from '../components/ErrorMsg';

import { useGithubUsers, useGithubUserRepos } from '../services/useGithub';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState();
  const [typeAhead, setTypeahead] = useState(true);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const [githubUsers, loading, error] = useGithubUsers(
    typeAhead ? searchValue : ''
  );
  const [reposResponse, resposLoading, reposError] = useGithubUserRepos({
    user,
    pageLimit,
    page,
  });

  useEffect(() => {
    if (reposResponse.total_count) {
      const totalPages = Math.ceil(reposResponse.total_count / pageLimit);
      setPageCount(totalPages);
    }
  }, [reposResponse.total_count, pageLimit]);

  useEffect(() => {
    setSearchValue('');
    setPage(1)
  }, [user])

  const renderPropPaginationTable = (repo) => {
    return (
      <PaginationRow key={repo.id}>
        <PaginationCell>
          <a
            href={repo.html_url}
            target="blank"
            style={{ textDecoration: 'none' }}
          >
            <Typography>{repo.full_name}</Typography>
          </a>
        </PaginationCell>
        <PaginationCell>
          <Box display="flex" alignItems="center" flexDirection="row-reverse">
            <StarIcon />
            <Typography>{repo.stargazers_count}</Typography>
          </Box>
        </PaginationCell>
      </PaginationRow>
    );
  };

  return (
    <Container maxWidth="lg">
      <AppBar />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginTop="100px"
      >
        <SearchDropdown
          value={searchValue}
          dropdown={map(githubUsers.items, ({ id, login }) => ({
            id,
            value: login,
          }))}
          onChange={setSearchValue}
          onSubmit={setUser}
        />

        {reposError ? (
          <ErrorMsg
            message={`Failed to fetch repos for "${user}". May have reached rate limit.`}
          />
        ) : (
          <Box
            width="100%"
            display="flex"
            marginTop="50px"
            justifyContent="space-between"
          >
            <Box margin="60px 10px" flex="1">
              <Typography variant="h2">{user}</Typography>
            </Box>
            <Box margin="10px" flex="1" display="flex">
              {reposResponse?.items?.length > 0 && (
                <PaginationTable
                  data={reposResponse.items}
                  pageCount={pageCount}
                  page={page}
                  onChange={(e, page) => {
                    setPage(page);
                  }}
                >
                  {renderPropPaginationTable}
                </PaginationTable>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
