import React from 'react';
import {
  Page,
  Layout
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import ProductSnapshotCreateForm from '../../components/products_snapshots/ProductSnapshotCreateForm';

const CreateProductSnapshotPage = () => {

  const { t } = useTranslation();
  return (

    <Page>
      <TitleBar title={t("NavigationMenu.productSnapshot.create")} />
      <Layout>
        <Layout.Section>
          <ProductSnapshotCreateForm />
        </Layout.Section>
      </Layout>
    </Page>

  )
};

export default CreateProductSnapshotPage;
