import React from 'react';
import {
  Page,
  Layout
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import ProductSnapshotIndexTable from '../../components/products_snapshots/ProductSnapshotIndexTable';

const IndexProductSnapshotPage = () => {

  const { t } = useTranslation();
  return (

    <Page>
      <TitleBar title={t("NavigationMenu.productSnapshot.index")} />
      <Layout>
        <Layout.Section>
          <ProductSnapshotIndexTable />
        </Layout.Section>
      </Layout>
    </Page>

  )
};

export default IndexProductSnapshotPage;
