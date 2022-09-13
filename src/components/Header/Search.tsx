import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Box,
  TextField,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetLocationByNameQuery, useLazyGetCurrentWeatherByLocationQuery } from '../../api/api';
import { weatherActions } from '../../store/weather';

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
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.length > 1) {
      setSearchValue(event.target.value);
    }
    if (event.target.value.length === 0) {
      setSearchValue('');
    }
  };

  const [trigger, { data: weatherData, isFetching: weatherIsFetching, error: weatherError }] =
    useLazyGetCurrentWeatherByLocationQuery();

  const handleAutocompleteChange = (
    event: SyntheticEvent<Element, Event>,
    value: unknown,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined,
  ) => {
    console.log(value);
    if (value) {
      trigger({ key: '8ef102dbbdfd46d1abb203040211309', value }, true);
    }
  };

  if (weatherData) {
    dispatch(weatherActions.weather(weatherData));
  }
  console.log(weatherData);
  const { data, isFetching, error } = useGetLocationByNameQuery({
    key: '8ef102dbbdfd46d1abb203040211309',
    value: searchValue,
  });
  if (error) console.log(error);
  data?.forEach((item) => {
    arr.push(item.name);
  });
  console.log(arr.length);
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
            onChange={handleInputChange}
          />
        </Box>
      )}
    />
  );
};
