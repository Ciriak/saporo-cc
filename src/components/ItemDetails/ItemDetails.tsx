import { Card } from 'react-bootstrap';
import { IDataItem } from '../../data';

export default function ItemDetails(props: { item: IDataItem }) {
  return (
    <Card>
      <h4>{props.item.name}</h4>
      <p>{props.item.lorem}</p>
    </Card>
  );
}
