import React from "react";
import TopSection from "./topsection";
import CounterSections from "./countersections";
import BecomeAnInstructor from "./becomeAnInstructor";
import ReviewRating from "./ratingsandreview";
import HeadPage from "../Layout/headPage";
import HEAD_TITLE from "@/utils/titleConstant";

function Landling ()
{
    return (
    
         <HeadPage  title = {HEAD_TITLE.home}>
        <TopSection/>
        <CounterSections/>
        <BecomeAnInstructor/>
        <ReviewRating/>
    
        </HeadPage>
    

    )
}

export default Landling;