import { Redirect, Route } from "react-router-dom";
import * as React from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import createEmotionCache from "./utils/createEmotionCache";

import "./App.css";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import AccountModal from "./components/Account";
import theme from "./theme";
import TabBar from "./components/AppTabBar";

const clientSideEmotionCache = createEmotionCache();

setupIonicReact();

function App({ emotionCache = clientSideEmotionCache }) {
  const [isAccountOpen, setIsAccountOpen] = React.useState<boolean>(false);

  return (
    <CacheProvider value={emotionCache}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiThemeProvider theme={theme}>
          <IonApp>
            <IonReactRouter>
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/tab1">
                    <Tab1 />
                  </Route>
                  <Route exact path="/tab2">
                    <Tab2 />
                  </Route>
                  <Route path="/tab3">
                    <Tab3 />
                  </Route>
                  <Route exact path="/">
                    <Redirect to="/tab1" />
                  </Route>
                </IonRouterOutlet>

                <TabBar setIsAccountOpen={setIsAccountOpen} />
              </IonTabs>
              {/* AccountModal component */}
              <AccountModal
                isOpen={isAccountOpen}
                onClose={() => setIsAccountOpen(false)}
              />
            </IonReactRouter>
          </IonApp>
        </MuiThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;