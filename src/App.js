import React from "react";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import { AuthProvider } from "./contexts/Auth";
import AppRouter from "./routes/AppRouter";
import { ProjectListProvider } from "./contexts/ProjectList";

import { BackendProvider } from "@gooddata/sdk-ui"; // docment missing this import

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";

const backend = bearFactory({ hostname: "staging3.intgdc.com" }).withAuthentication(
    new ContextDeferredAuthProvider(),
);

function App() {
    return (
        <AuthProvider>
            <BackendProvider backend={backend}>
                {/* <ProjectListProvider> */}
                <AppRouter />
                {/* </ProjectListProvider> */}
            </BackendProvider>
        </AuthProvider>
    );
}

export default App;
