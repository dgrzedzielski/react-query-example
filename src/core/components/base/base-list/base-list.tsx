import './base-list.scss';

type CharactersListProps<TItem> = {
  items: TItem[];
  renderItem: (item: TItem) => JSX.Element;
  keyExtractor?: (item: TItem) => string | number;
};

export function BaseList<TItem extends Record<string, unknown>>({
  items,
  renderItem,
  keyExtractor,
}: CharactersListProps<TItem>) {
  const getKey = (item: TItem, index: number) => {
    if (item.id) return item.id as number | string;
    if (keyExtractor) return keyExtractor(item);

    return index;
  };

  return (
    <ul className="base-list">
      {items.map((item, index) => (
        <li className="base-list__item" key={getKey(item, index)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
