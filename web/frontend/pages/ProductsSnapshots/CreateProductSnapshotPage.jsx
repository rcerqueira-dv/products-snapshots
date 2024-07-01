import React from 'react';
import {
  Page,
  Layout
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import ProductSnapshotCreate from '../../components/products_snapshots/ProductSnapshotCreate';

const CreateProductSnapshotPage = () => {

  const { t } = useTranslation();
  return (

    <Page>
      <TitleBar title={t("NavigationMenu.productSnapshot.create")} />
      <Layout>
        <Layout.Section>
          <ProductSnapshotCreate />
        </Layout.Section>
      </Layout>
    </Page>

  )
};

export default CreateProductSnapshotPage;
