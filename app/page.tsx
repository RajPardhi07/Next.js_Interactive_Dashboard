import Dashboard from "./pages/Dashboard";
import ClientProvider from "./components/ClientProvider";

export default function Home() {
  return (
    <main>
      <ClientProvider>
        <Dashboard />
      </ClientProvider>
    </main>
  );
}
