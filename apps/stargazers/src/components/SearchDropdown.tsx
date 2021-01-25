import React from 'react';
import { Box, Typography, OutlinedInput, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: 500,
    textAlign: 'center',
    fontSize: 30,
  },
  notchedOutline: {
    borderRadius: 50,
  },
  typographyRoot: {
    fontSize: 30,
  },
});

export default function SearchInput({
  onSubmit,
  onChange,
  value,
  dropdown = [],
}) {
  const { notchedOutline, root, typographyRoot } = useStyles();
  return (
    <Box position="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value) {
            onSubmit(value);
          }
        }}
      >
        <FormControl classes={{ root }} variant="outlined">
          <OutlinedInput
            value={value}
            classes={{
              notchedOutline,
              root,
            }}
            inputProps={{
              style: { textAlign: 'center' },
            }}
            placeholder="Search User..."
            startAdornment={<SearchIcon fontSize="large" />}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            onSubmit={onSubmit}
          />
        </FormControl>
      </form>
      <Box
        position="absolute"
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        data-testid="search-dropdown"
      >
        {dropdown.map((item, i) => {
          return (
            <Box
              key={item.id}
              display="flex"
              minHeight="50px"
              minWidth="95%"
              maxWidth="200%"
              borderBottom="1px solid gray"
              justifyContent="center"
              alignItems="center"
              onClick={(e) => {
                onSubmit(item.value);
              }}
              data-testid={`search-dropdown-item-${i}`}
            >
              <Box
                fontSize="30px"
                width="80%"
                display="flex"
                alignItems="center"
                height="100%"
                bgcolor="rgba(255, 255, 255, 0.9)"
              >
                <Typography classes={{ root: typographyRoot }}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
