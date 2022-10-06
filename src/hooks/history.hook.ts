import { useRecoilState } from 'recoil';
import historyState from '../atoms/history.atom';
import { IDataItem } from '../data';
import useData from './data.hook';

export default function useSaporoHistory() {
  const [history, setHistory] = useRecoilState(historyState);
  const { activeItem } = useData();

  /**
   * Add an entry into the history state (with more control if needed like ignoring dupes etc...)
   * @param entry
   */
  function addEntry(entry: IDataItem) {
    // ignore if current entry is the same
    if (activeItem && activeItem.name === entry.name) {
      return;
    }
    setHistory([...history, entry]);
  }

  /**
   * Reset the history to the specified index
   * @param index
   */
  function resetHistoryToIndex(index: number) {
    const updatedHistory = [...history].slice(0, index + 1);
    setHistory(updatedHistory);
  }

  return { history, addEntry, resetHistoryToIndex };
}
