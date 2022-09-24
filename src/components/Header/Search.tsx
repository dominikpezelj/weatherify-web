import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Autocomplete, Box, TextField, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useGetLocationByNameQuery } from '../../api/api';
import { apiKey } from '../../common/constants';
import { useLocationSearch } from '../../hooks/useLocationSearch';

const StyledAutocomplete = styled(Autocomplete)`
  & .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    color: #000;
  }
`;

//hide auto generated cancel button inside search input
const StyledTextField = styled(TextField)`
  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  & .MuiInputLabel-root[class*='MuiInputLabel-root'] {
    color: white;
  }
  & .MuiSvgIcon-root[class*='MuiSvgIcon-root'] {
    color: white;
  }
  &
    .MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before[class*='MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before'] {
    border-bottom: 1px solid white !important;
    color: white;
  }
`;

export const SearchBar = () => {
  const theme = useTheme();
  const arr: string[] = [];

  const { handleAutocompleteChange, debouncedResults, searchValue, skip } = useLocationSearch();

  const { data, isFetching, error } = useGetLocationByNameQuery(
    {
      key: apiKey,
      value: searchValue,
    },
    {
      skip,
    },
  );
  data?.forEach((item) => {
    arr.push(item.name);
  });

  return (
    <StyledAutocomplete
      disablePortal
      id="autocomplete"
      options={arr}
      loading={isFetching}
      loadingText={'Loadind data...'}
      noOptionsText={'No options.'}
      autoComplete={true}
      autoSelect={true}
      onChange={handleAutocompleteChange}
      onInputChange={debouncedResults}
      blurOnSelect={'touch'}
      sx={{ flex: 1 }}
      renderInput={(params) => (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <LocationOnIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
          <StyledTextField
            {...params}
            id="search"
            label="Select a location"
            type="search"
            variant="standard"

            /* onChange={debouncedResults} */
          />
        </Box>
      )}
    />
  );
};
