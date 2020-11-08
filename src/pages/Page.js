import React from "react";
import CoverPage from "../components/CoverPage";
import CharacterList from "../components/CharacterList";

export default function Page(props){
    return(
        <React.Fragment>
            <CoverPage />
            <CharacterList client={props.client}/>
        </React.Fragment>
    )
}