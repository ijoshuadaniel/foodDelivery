import { wp } from './../../constants/responsive';
import { homePageText } from './../../constants/textContent';
import {
  salad,
  general,
  millet,
  elderly,
  healthy,
  keto,
  poket,
  pg,
  pregnancy,
  vegan,
} from '../../assets/images';

export const subscriptionMenu = [
  {
    image: salad,
    title: 'Salads and Fruit Bowl',
  },
  {
    image: general,
    title: 'General Pakages',
  },
  {
    image: millet,
    title: 'Millet Meal Packages',
  },
  {
    image: elderly,
    title: 'Elderly Food Packages',
  },
  {
    image: healthy,
    title: 'Healthy Food Packages',
  },
  {
    image: keto,
    title: 'Keto Friendly Packages',
  },
  {
    image: poket,
    title: 'Pocket Friendly Packages',
  },
  {
    image: pregnancy,
    title: 'Pregnancy Packages',
  },
  {
    image: pg,
    title: 'PG Packages',
  },
  {
    image: vegan,
    title: 'Vegan Food Packages',
  },
];

export const showText = (isShow: boolean): string => {
  if (isShow) return homePageText.hideShown;
  return homePageText.showMore;
};

export const computeStyles = (
  index: number,
  maxLength: number,
  showMore: boolean
): object => {
  if (index === 0)
    return {
      borderTopLeftRadius: wp(5),
    };
  if (index === 3)
    return {
      borderTopRightRadius: wp(5),
    };
  if ((index === 4 && !showMore) || (index === 8 && showMore))
    return {
      borderBottomLeftRadius: wp(5),
    };
  if ((index === 7 && !showMore) || maxLength - 1 === index)
    return {
      borderBottomRightRadius: wp(5),
    };
  return {};
};
