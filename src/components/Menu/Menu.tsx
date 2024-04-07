import { Sort } from '../Sort/Sort';
import { Navigation } from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import { Flex } from 'antd';

export const Menu = ({}) => {
  return (
    <Flex justify="space-between" align="center">
      <Navigation />
      <Search />
      <Sort />
    </Flex>
  );
};
