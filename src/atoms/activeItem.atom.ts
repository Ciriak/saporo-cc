import { atom } from 'recoil';
import { IDataItem } from '../data';

const activeItemState = atom<IDataItem | null>({
  key: 'activeItemState', // unique ID (with respect to other atoms/selectors)
  default: null, // valeur par défaut (alias valeur initials)
});

export default activeItemState;
