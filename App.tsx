import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    //<LoginScreen />
    //<TermsScreen />

    <QueryClientProvider client={queryClient}>
      <StarshipFeedScreen />
    </QueryClientProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App;
