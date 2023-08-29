"use client"

import { useEffect } from "react";

const customError = ({error, reset}) => {
    useEffect(() => {
        console.log(error)
    }, [])
    
    return (
        <section className="search-page px-5">
            <div className="py-4">
                <p className="mb-3">Something went wrong.</p>
                <button onClick={reset} className="btn btn-m btn-prim">Try Again</button>
            </div>
        </section>
    );
}
 
export default customError;