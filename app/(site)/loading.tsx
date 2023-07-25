"use client";

import Box from "@/components/Box";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <ScaleLoader color="#22c55e" height={40} width={8} radius={4} margin={4}/>
        </Box>
    )
}

export default Loading;