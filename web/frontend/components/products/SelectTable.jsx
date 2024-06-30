import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
  useBreakpoints,
} from '@shopify/polaris';
import React from 'react';

function SelectTable({ products, setProductsOptions }) {

  const resourceName = {
    singular: 'product',
    plural: 'products',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(products);

  const rowMarkup = products.map(
    (
      { id, title, description },
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {title}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{description}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <LegacyCard>
      <IndexTable
        condensed={useBreakpoints().smDown}
        resourceName={resourceName}
        itemCount={products.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        hasMoreItems
        headings={[
          { title: 'Title' },
          { title: 'Description' }
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
}

export default SelectTable;