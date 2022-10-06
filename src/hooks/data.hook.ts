import { useRecoilState } from 'recoil';
import activeItemState from '../atoms/activeItem.atom';
import data from '../data';

export default function useData() {
  const [activeItem, setActiveItem] = useRecoilState(activeItemState);

  return { data, activeItem, setActiveItem };
}
