import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

const Wallet = lazy(() => import("../views/ui/wallet/WalletMain"));
const WalletCreate = lazy(() => import("../views/ui/wallet/WalletCreate"));
const WalletImport = lazy(() => import("../views/ui/wallet/WalletImport"));
const WalletBalanceTransfer = lazy(() => import("../views/ui/wallet/WalletBalanceTransfer"));


const Explorer = lazy(() => import("../views/ui/explorer/ExplorerMain"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/wallet" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },

      { path: "/wallet", exact: true, element: <Wallet /> },
      { path: "/walletcreate", exact: true, element: <WalletCreate /> },
      { path: "/walletimport", exact: true, element: <WalletImport /> },

      { path: "/walletbalancetransfer", exact: true, element: <WalletBalanceTransfer /> },


      { path: "/explorer", exact: true, element: <Explorer /> },


    ],
  },
];

export default ThemeRoutes;
