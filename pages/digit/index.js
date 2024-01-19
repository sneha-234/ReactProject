import CounterPage from "@/components/counterPage";
import LayoutPage from "@/components/Layout";
import React from "react";


const Digit = () =>
{
    return <CounterPage page ="Digit" />
}

Digit.getLayout = function getLayout(page)
{
    return <LayoutPage>{page}</LayoutPage>
}

export default Digit;