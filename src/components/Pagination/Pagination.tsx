import { FC, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';
import { Pagination } from 'antd';

type PaginationProps = {
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  itemsOnPageLimitCount: number;
};

export const _Pagination: FC<PaginationProps> = ({ setCurrentPage, itemsOnPageLimitCount }) => {
  return (
    <Pagination
      defaultCurrent={1}
      defaultPageSize={itemsOnPageLimitCount}
      total={10}
      onChange={(value) => setCurrentPage(value)}
      style={{ padding: '20px 0px 20px 0px' }}
    />
  );
};
