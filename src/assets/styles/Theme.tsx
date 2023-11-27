import { DefaultTheme } from 'styled-components';

//material ui colors 참고 : https://materialuicolors.co/?ref=pns
const colorPalette = {
  red50: '#ffebee',
  red100: '#FFCDD2',
  red200: '#EF9A9A',
  red300: '#E57373',
  red400: '#EF5350',
  red500: '#F44336',
  red600: '#E53935',
  red700: '#D32F2F',
  red800: '#C62828',
  red900: '#B71C1C',
  pink50: '#fce4ec',
  pink100: '#F8BBD0',
  pink200: '#F48FB1',
  pink300: '#F06292',
  pink400: '#EC407A',
  pink500: '#E91E63',
  pink600: '#D81B60',
  pink700: '#C2185B',
  pink800: '#AD1457',
  pink900: '#880E4F',
  purple50: '#f3e5f5',
  purple100: '#E1BEE7',
  purple200: '#CE93D8',
  purple300: '#BA68C8',
  purple400: '#AB47BC',
  purple500: '#9C27B0',
  purple600: '#8E24AA',
  purple700: '#7B1FA2',
  purple800: '#6A1B9A',
  purple900: '#4A148C',
  deepPurple50: '#ede7f6',
  deepPurple100: '#D1C4E9',
  deepPurple200: '#B39DDB',
  deepPurple300: '#9575CD',
  deepPurple400: '#7E57C2',
  deepPurple500: '#673AB7',
  deepPurple600: '#5E35B1',
  deepPurple700: '#512DA8',
  deepPurple800: '#4527A0',
  deepPurple900: '#311B92',
  indigo50: '#e8eaf6',
  indigo100: '#C5CAE9',
  indigo200: '#9FA8DA',
  indigo300: '#7986CB',
  indigo400: '#5C6BC0',
  indigo500: '#3F51B5',
  indigo600: '#3949AB',
  indigo700: '#303F9F',
  indigo800: '#283593',
  indigo900: '#1A237E',
  blue50: '#e3f2fd',
  blue100: '#BBDEFB',
  blue200: '#90CAF9',
  blue300: '#64B5F6',
  blue400: '#42A5F5',
  blue500: '#2196F3',
  blue600: '#1E88E5',
  blue700: '#1976D2',
  blue800: '#1565C0',
  blue900: '#0D47A1',
  lightBlue50: '#e1f5fe',
  lightBlue100: '#B3E5FC',
  lightBlue200: '#81D4FA',
  lightBlue300: '#4FC3F7',
  lightBlue400: '#29B6F6',
  lightBlue500: '#03A9F4',
  lightBlue600: '#039BE5',
  lightBlue700: '#0288D1',
  lightBlue800: '#0277BD',
  lightBlue900: '#01579B',
  cyan50: '#e0f7fa',
  cyan100: '#B2EBF2',
  cyan200: '#80DEEA',
  cyan300: '#4DD0E1',
  cyan400: '#26C6DA',
  cyan500: '#00BCD4',
  cyan600: '#00ACC1',
  cyan700: '#0097A7',
  cyan800: '#00838F',
  cyan900: '#006064',
  teal50: '#e0f2f1',
  teal100: '#B2DFDB',
  teal200: '#80CBC4',
  teal300: '#4DB6AC',
  teal400: '#26A69A',
  teal500: '#009688',
  teal600: '#00897B',
  teal700: '#00796B',
  teal800: '#00695C',
  teal900: '#004D40',
  lightGreen50: '#f1f8e9',
  lightGreen100: '#DCEDC8',
  lightGreen200: '#C5E1A5',
  lightGreen300: '#AED581',
  lightGreen400: '#9CCC65',
  lightGreen500: '#8BC34A',
  lightGreen600: '#7CB342',
  lightGreen700: '#689F38',
  lightGreen800: '#558B2F',
  lightGreen900: '#33691E',
  green50: '#e8f5e9',
  green100: '#C8E6C9',
  green200: '#A5D6A7',
  green300: '#81C784',
  green400: '#66BB6A',
  green500: '#4CAF50',
  green600: '#43A047',
  green700: '#388E3C',
  green800: '#2E7D32',
  green900: '#1B5E20',
  lime50: '#f9fbe7',
  lime100: '#F0F4C3',
  lime200: '#E6EE9C',
  lime300: '#DCE775',
  lime400: '#D4E157',
  lime500: '#CDDC39',
  lime600: '#C0CA33',
  lime700: '#AFB42B',
  lime800: '#9E9D24',
  lime900: '#827717',
  yellow50: '#fffde7',
  yellow100: '#FFF9C4',
  yellow200: '#FFF59D',
  yellow300: '#FFF176',
  yellow400: '#FFEE58',
  yellow500: '#FFEB3B',
  yellow600: '#FDD835',
  yellow700: '#FBC02D',
  yellow800: '#F9A825',
  yellow900: '#F57F17',
  amber50: '#fff8e1',
  amber100: '#FFECB3',
  amber200: '#FFE082',
  amber300: '#FFD54F',
  amber400: '#FFCA28',
  amber500: '#FFC107',
  amber600: '#FFB300',
  amber700: '#FFA000',
  amber800: '#FF8F00',
  amber900: '#FF6F00',
  orange50: '#fff3e0',
  orange100: '#FFE0B2',
  orange200: '#FFCC80',
  orange300: '#FFB74D',
  orange400: '#FFA726',
  orange500: '#FF9800',
  orange600: '#FB8C00',
  orange700: '#F57C00',
  orange800: '#EF6C00',
  orange900: '#E65100',
  deepOrange50: '#fbe9e7',
  deepOrange100: '#FFCCBC',
  deepOrange200: '#FFAB91',
  deepOrange300: '#FF8A65',
  deepOrange400: '#FF7043',
  deepOrange500: '#FF5722',
  deepOrange600: '#F4511E',
  deepOrange700: '#E64A19',
  deepOrange800: '#D84315',
  deepOrange900: '#BF360C',
  brown50: '#efebe9',
  brown100: '#D7CCC8',
  brown200: '#BCAAA4',
  brown300: '#A1887F',
  brown400: '#8D6E63',
  brown500: '#795548',
  brown600: '#6D4C41',
  brown700: '#5D4037',
  brown800: '#4E342E',
  brown900: '#3E2723',
  grey50: '#fafafa',
  grey100: '#F5F5F5',
  grey200: '#EEEEEE',
  grey300: '#E0E0E0',
  grey400: '#BDBDBD',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',
  blueGrey50: '#eceff1',
  blueGrey100: '#CFD8DC',
  blueGrey200: '#B0BEC5',
  blueGrey300: '#90A4AE',
  blueGrey400: '#78909C',
  blueGrey500: '#607D8B',
  blueGrey600: '#546E7A',
  blueGrey700: '#455A64',
  blueGrey800: '#37474F',
  blueGrey900: '#263238',
};

export const LightTheme: DefaultTheme = {
  color: {
    background: '#FFFFFF',
    border: '#DEDEDF',
    text: '#333333',
    reversalText: '#FFFFFF',

    disabledBackground: '#F8F8F8',
    disabledBorder: '#AAAAAA',
    disabledText: '#AAAAAA',

    placeholderText: '#CCCCCC',
    checkboxBorder: '#D4D4D4',

    blueLight: {
      moreLight: colorPalette.blue50,
      light: colorPalette.blue100,
      lessLight: colorPalette.blue200,
      lessDeep: colorPalette.blue300,
      deep: colorPalette.blue400,
      moreDeep: colorPalette.blue500,
    },

    error: colorPalette.red500,
    warning: colorPalette.amber300,
  },
};

export const DarkTheme: DefaultTheme = {
  defaultWidth: {
    xxs: 34,
    xs: 94,
    small: 106,
    medium: 148,
    large: 184,
    xl: 276,
    xxl: 432,
    full: '100%',
  },

  defaultHeight: 34,

  color: {
    background: '#181920',
    surface: '#2C2D32',
    border: '#42424A',
    borderActive: '#F2F3F9',

    disabled: '#35363B',
    disabledButton: '#36373F',
    disabledText: '#777777',
    disabledSelect: '#36373F',

    placeholderText: '#CCCCCC',

    text: '#B5B5BD',

    checkboxBorder: '#747474',

    point: '#4585FF',
    point2: '#83CAD3',

    tabBackground: '#25262E',
    tabText: '#5A5A5A',

    accordionBackground: '#36373F',
    accordionBackgroundBlue: '#3B3C43',
    scrollbar: '#3B3C41',

    tableHeaderText: '#C6C7CD',
    tableHeaderBackground: '#494A51',
    tableBackground: '#36373F',
    tableHoverBackground: '#304674',

    error: '#FF5C5C',
    warning: '#ffe850',
    arrow: '#AAA',

    guideBoxText: '#92C8D1',
    guideBoxBackground: '#36373E',
    guideBoxFoldText: '#71A1AB',

    darkmodeHoverButton: '#0072CE',
    darkmodeHoverBackground: '#F2F3F9',
  },
};
