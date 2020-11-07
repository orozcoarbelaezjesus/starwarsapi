import React from "react";
import CoverPage from "../components/CoverPage";
import CharacterList from "../components/CharacterList";

export default function Page(){
    return(
        <React.Fragment>
            <CoverPage />
            <CharacterList />
        </React.Fragment>
    )
}