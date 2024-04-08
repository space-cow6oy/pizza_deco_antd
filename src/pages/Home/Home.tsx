import { PizzaBlock } from '../../components/PizzaBlock/PizzaBlock';
import { Menu } from '../../components/Menu/Menu';
import { Loader } from '../../components/Loader/Loader';
import { _Pagination } from '../../components/Pagination/Pagination';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../redux/store';
import { Col, Row } from 'antd';

type Items =
  | {
      id: string;
      imageUrl: string;
      title: string;
      types: number[];
      sizes: number[];
      price: number;
      category: number;
      rating: number;
    }[]
  | 'Not found';

export const Home = () => {
  const [items, setItems] = useState<Items>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState<number>(1);

  // const UpdateCurrentPageValue = (n: number) => {
  //   setCurrentPage(n)
  // }

  const page = `page=${currentPage}`;

  /**================================================================================================
   * !                                          SORTING logic
   *   select activeSortType from store useSelect (state.filter.activeSortType)
   *   create object sortBy that will be determine connection between activeSortType and backendSortType
   *   creating variable for inserting it as url parametr
   *   passing activeSortType to useEffect for requesting new data every time input has changed
   *================================================================================================**/
  const activeSortType = useSelector((state: RootState) => state.filter.activeSortType);

  const sortBy = { популярности: 'rating', цене: 'price', алфавиту: 'title' };
  const sort: string = `sortBy=${activeSortType}`;
  /*========================================== END OF Sorting ==========================================*/

  /**========================================================================
   * !                              SEARCHING logic
   *   select searchValue from store useSelect (state.search.searchValue)
   *   creating variable for inserting it as url parametr
   *   passing searchValue to useEffect for requesting new data every time input has changed
   *========================================================================**/
  const searchValue = useSelector((state: any) => state.search.searchValue);
  const search = `search=${searchValue}`;
  /*============================ END OF SEARCHING LOGIC ============================*/

  /**========================================================================
   * !                              FILTERING logic
   *   select activeCategory from store useSelector (state.filter.activeCategory)
   *   creating variable for inserting it as url parametr
   *   passing activeCategory to useEffect for requesing data everytime input has changed
   *========================================================================**/
  const activeCategory = useSelector((state: any) => state.filter.activeCategory);
  const category = activeCategory === 0 ? '' : `category=${activeCategory}`;
  /*============================ END OF FILTERING LOGIC ============================*/

  const itemsOnPageLimitCount = 5;

  useEffect(() => {
    axios
      .get(
        `https://65dc9b63e7edadead7ec86ae.mockapi.io/items?&${page}&limit=${itemsOnPageLimitCount}&${category}&${sort}&${search}`,
      )
      .then((res) => {
        setTimeout(() => {
          setItems(res.data);
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        // console.log(err.response.data)
        setItems(err.response.data);
      });
  }, [activeCategory, activeSortType, searchValue, currentPage]);

  return (
    <>
      <Menu />
      <Row
        gutter={[{ xs: 16, sm: 16, md: 16, lg: 70 }, 16]}
        justify={{ xs: 'center', sm: 'center', md: 'center', lg: 'space-between' }}>
        {items == 'Not found' ? (
          ''
        ) : (
          <>
            {isLoading
              ? [...new Array(5)].map((_, index) => <Loader key={index} />)
              : items.map((item, index) => (
                  <Col>
                    <PizzaBlock key={index} {...item} />
                  </Col>
                ))}
          </>
        )}
      </Row>

      <_Pagination setCurrentPage={setCurrentPage} itemsOnPageLimitCount={itemsOnPageLimitCount} />
    </>
  );
};
