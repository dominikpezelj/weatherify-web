//bottom menu
export type BottomMenuProps = {
  value: number;
  setValue(value: number): void;
  toggleDrawer(open: boolean): any;
};

//navigation
export type NavigationDrawerProps = {
  menuItems: MenuItems[];
  state: boolean;
  weatherInfo: WeatherInfo;
  toggleDrawer(open: boolean): any; //check type
};

export interface WeatherInfo {
  name: string;
  localtime: string;
  country: string;
  region: string;
  tz_id: string;
  temp_c: number;
  icon: string;
}

export type MenuItems = {
  route: string;
  path: string;
};

//navigation logo

export type NavigationLogoProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
  title: string;
  titleSize: string;
  titleColor?: string;
  display: { xs: string; md: string };
  iconColor: string;
  iconSize: string;
  flexGrow?: number;
};
