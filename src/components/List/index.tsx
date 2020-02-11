import React from 'react'

type Item = string | number | undefined

interface IListProps {
  items: Item[],
    renderItem: (props: { item: Item }) => React.ReactNode,
}


 export const List: React.FC<IListProps> = ({ items, renderItem }) => (
  <>
    {items.map(i => renderItem({ item: i }))}
  </>
)