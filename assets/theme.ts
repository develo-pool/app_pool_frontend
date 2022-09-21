const colors = {
  Black: '#000000',
  White: '#FFFFFF',
  Poolgreen: '#00C2AB',
  Poolblue: '#0B96D2',
  Deepgreen: '#005C5C',
  Deepblue: '#033144',
  Ivory: '#F5F3F0',
  Skyblue: '#E6F6FA',
  Error: '#CF3F48',
  Correct: '#10966E',
  Grey10: '#F0F0F0',
  Grey20: '#E4E4E3',
  Grey30: '#C8C7C6',
  Grey40: '#9E9D9A',
  Grey50: '#5B5B59',
  Grey60: '#363634',
  Grey70: '#252523',
  Grey80: '#161615',
};

const fontFamily = {
  // Pretendard: 'Apple SD Gothic Neo',
  Pretendard: 'PretendardVariable',
};

const fontSize = {
  H1: 40,
  H2: 28,
  H3: 24,
  H4: 20,
  H5: 18,
  P1: 16,
  P2: 14,
  P3: 12,
};

const fontWeight: {
  Bold: '400' | '700' | undefined;
  Light: '400' | '700' | undefined;
} = {
  Bold: '700',
  Light: '400',
};

const theme = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
};

export default theme;
