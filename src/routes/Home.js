import React from "react";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";
import Example from "./example";

const Home = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <Example/>
        </Page>
    );
};

export default Home;
