import { FC, useCallback, useRef, useState } from 'react';
import cl from 'classnames';
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Card, Radio, Image } from 'antd';
import type { CheckboxOptionType, RadioChangeEvent } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
// import { Input, Radio, Space } from 'antd';

type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  title: string;
  types: number[];
};

export const PizzaBlock: FC<PizzaBlockProps> = ({ id, imageUrl, price, sizes, title, types }) => {
  const pizzaTypes = ['Тонкое', 'Традиционное'];
  const firstRenderPizzaTypes = types.map((item) => pizzaTypes[item]);
  // const firstRenderPizzaSizes = sizes.

  const [activeType, setActiveType] = useState<String>(firstRenderPizzaTypes[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const realSize = sizes[activeSize];
  const realId = useRef(id);

  const dispatch = useDispatch();

  const { Meta } = Card;

  console.log(types);

  const cartClick = () => {
    dispatch(
      addToCart({
        id: realId.current,
        imageUrl,
        price,
        activeSize,
        title,
        activeType,
        count: 1,
      }),
    );
  };

  type Option = (string | number | CheckboxOptionType<CheckboxValueType>) | undefined;

  const onChangeType = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setActiveType(value);
  };

  const onChangeSize = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio2 checked', value);
    setActiveSize(value);
  };

  return (
    <Card hoverable style={{ width: 300 }} cover={<Image alt={title} src={imageUrl} />}>
      <Flex justify="space-between" align="start" vertical gap="small">
        <Flex justify="space-between" align="start" vertical gap="small">
          <Meta title={title} />

          <Radio.Group
            options={firstRenderPizzaTypes}
            onChange={onChangeType}
            value={activeType}
            optionType="button"
          />

          <Radio.Group
            options={sizes}
            onChange={onChangeSize}
            value={activeSize}
            optionType="button"
          />
        </Flex>

        <Flex align="center" justify="space-between" style={{ width: '100%' }}>
          <div>от {price} Р</div>
          <Button onClick={cartClick}>
            <span>Добавить </span>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
