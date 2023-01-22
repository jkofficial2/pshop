import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../src/assets/styles/globals.css";
import { AppProps } from "next/app";
import { useState } from "react";

import Page from "Page";

// const client = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Page {...pageProps}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Page>
  );
};

export default MyApp;
