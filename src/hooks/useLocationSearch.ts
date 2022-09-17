import { AutocompleteChangeDetails, AutocompleteChangeReason } from '@mui/material';
import debouce from 'lodash.debounce';
import { ChangeEvent, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { weatherActions } from '../store/weather';

export const useLocationSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [skip, setSkip] = useState<boolean>(true);

  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.length > 1) {
      setSearchValue(event.target.value);
      setSkip(false);
    }
    if (event.target.value.length === 0) {
      dispatch(weatherActions.weatherSearch(false));
      dispatch(weatherActions.weatherSearchCompleted(''));
      setSearchValue('');
      setSkip(true);
    }
  };

  const handleAutocompleteChange = (
    event: SyntheticEvent<Element, Event>,
    value: unknown,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined,
  ) => {
    if (value) {
      dispatch(weatherActions.weatherSearch(true));
      dispatch(weatherActions.weatherSearchCompleted(value));
    } else {
      dispatch(weatherActions.weatherSearch(false));
    }
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleInputChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return { handleInputChange, handleAutocompleteChange, debouncedResults, searchValue, skip };
};
