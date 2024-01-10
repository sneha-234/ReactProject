
import React from "react";
import Landling from "@/components/LandingPage";
import LayoutPage from "@/components/Layout";


function Land ()
{
    return (
    <Landling/>
    )
}

Land.getLayout = function getLayout(page)
{
  return <LayoutPage>{page}</LayoutPage>
}
export default Land;