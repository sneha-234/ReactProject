import CounterPage from "@/components/counterPage";
import LayoutPage from "@/components/Layout";
import React from "react";

const Sum = () =>
{
    return <CounterPage page ="Sum" />;
}

Sum.getLayout = function getLayout(page)
{
    return <LayoutPage>{page}</LayoutPage>
};

export default Sum ;