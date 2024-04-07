import { setActiveSortType } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Flex } from 'antd';

export const Sort = (/*{ sortType, setSortType, sortTypes }*/) => {
  /**========================================================================
   * !                              SORTING logic
   *   create array of sorting types (sortTypes)
   *   import setActiveSortType action from  '../../redux/slices/filterSlice'
   *   select activeSortType from store (useSelector) (state.filter.activeSortType)
   *   create function that set ActiveSortType and close popup (setIsVisible(false))
   *   render sortTypes, create logic of onClick etc...
   *========================================================================**/
  const sortTypes = [
    { value: 'rating', label: 'популярности' },
    { value: 'price', label: 'цене' },
    { value: 'title', label: 'алфавиту' },
  ];
  // const activeSortType = useSelector((state: any) => state.filter.activeSortType);
  const dispatch = useDispatch();

  return (
    <Flex justify="flex-end" align="center" gap="small">
      <span>Сортировка по</span>
      <Select
        defaultValue="популярности"
        style={{ width: 140 }}
        options={sortTypes}
        onChange={(value) => dispatch(setActiveSortType(value))}
      />
    </Flex>
  );
};
