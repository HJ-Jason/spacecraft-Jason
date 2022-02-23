import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

export const App = () => {
  return (
    //<LoginScreen />
    //<TermsScreen />

    <QueryClientProvider client={queryClient}>
      <StarshipFeedScreen />
    </QueryClientProvider>
  );
};

// always export default App otherwise Expo is not happy
// eslint-disable-next-line import/no-default-export
export default App;
