import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { LoginScreen } from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient()

const App = () => {
  return (
    //<LoginScreen />
    //<TermsScreen />
    //<StarshipFeedScreen />
    <QueryClientProvider client={queryClient}>...</QueryClientProvider>

  );
};

// always export default App otherwise Expo is not happy
export default App;