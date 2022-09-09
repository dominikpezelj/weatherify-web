import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { navigationActions } from '../../store/navigation';
export const Settings = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.navigation.isDarkModeEnabled);
  const handleChange = () => {
    dispatch(navigationActions.toggleDarkMode(!darkMode));
  };
  console.log(darkMode);
  return <Switch checked={darkMode} onChange={handleChange}></Switch>;
};
