import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/slices/filterSlice';
import { Button, Flex } from 'antd';

export const Navigation = (/*{ categoryId, setCategoryId }*/) => {
  const navlinks = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const activeCategory = useSelector((state: any) => state.filter.activeCategory);
  const dispatch = useDispatch();

  return (
    <Flex wrap="wrap" gap="small" style={{ padding: '0px 0px 0px 0px' }}>
      {navlinks.map((link, index) => (
        <Button
          onClick={() => dispatch(setActiveCategory(index))}
          type={index === activeCategory ? 'dashed' : 'link'}>
          {link}
        </Button>
      ))}
    </Flex>
  );
};
