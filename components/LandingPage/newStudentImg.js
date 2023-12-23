import Image from "next/image";
import React from "react";

function NewStudentimage ({avatar})
{
    return (
        <Image
        className="avatar-img rounded-circle border-white"
        src = {`/assests/images/avatar/${avatar}.jpg`}
        width={50}
        height={50}
        alt="avatar"
        />
    )
}
export default NewStudentimage;