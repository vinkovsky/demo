import Header from "@/common/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { AuthProvider } from "components/providers/authProvider";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <Header />
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default MyApp;
