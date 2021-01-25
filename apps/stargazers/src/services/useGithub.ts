import { useEffect, useState } from 'react';

import { getGithubUsers, getGithubUserRepos } from './github.services';

export function useGithubUsers(user, debounce?) {
  const [response, setResponse] = useState({ items: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let current = true;
    setError(null)
    if (user) {
      getGithubUsers(user)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((data) => {
          if (current) {
            setResponse(data);
          }
        })
        .catch((e) => {
          setError(e);
          setResponse({ items: [] });
        })
        .finally(() => setLoading(false));
    } else {
      setResponse({ items: [] });
    }
    return () => {
      current = false;
    };
  }, [user]);

  return [response, loading, error];
}

export function useGithubUserRepos({ user, pageLimit, page }) {
  const [response, setResponse] = useState({ items: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let current = true;
    setError(null)
    if (user) {
      getGithubUserRepos({ user, pageLimit, page, order: 'desc' })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((data) => {
          if (current) {
            setResponse(data);
          }
        })
        .catch((e) => {
          setError(e);
          setResponse({ items: [] });
        })
        .finally(() => setLoading(false));
    }

    return () => {
      current = false;
    };
  }, [user, pageLimit, page]);
  return [response, loading, error];
}
