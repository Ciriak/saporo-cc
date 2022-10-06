import { ListGroup } from 'react-bootstrap';
import useData from '../../hooks/data.hook';
import useSaporoHistory from '../../hooks/history.hook';

export default function ItemsList() {
  const { data, setActiveItem, activeItem } = useData();
  const { addEntry } = useSaporoHistory();

  return (
    <ListGroup defaultActiveKey="#link1">
      {data.map((item, itemIndex) => {
        return (
          <ListGroup.Item
            // yeah this condition sucks
            active={activeItem !== null && activeItem.name === item.name}
            key={itemIndex}
            action
            onClick={() => {
              setActiveItem(item);
              addEntry(item);
            }}
          >
            <span>{item.name}</span>
            <br />
            <small>{item.lorem.substring(0, 50) + '...'}</small>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
