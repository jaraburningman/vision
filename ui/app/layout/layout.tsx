import { Outlet } from "react-router";
import 'normalize.css';
import "./layout.css";
import { HeaderProvider } from "../context/header-context";
import { ConstantsProvider } from "../context/constants-context";
import Header from "../components/header";

export default function Layout() {
  return (
    <ConstantsProvider>
      <HeaderProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </HeaderProvider>
    </ConstantsProvider>
  );
}
