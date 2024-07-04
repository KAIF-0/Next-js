import React from 'react'
import Script from 'next/script'

const Scripttag = () => {
    return (
        <div>
            {console.log("Running on server side")}

            {/* <Script src="scrpt.js" strategy="lazyOnload" />            (strategy used for when to load script) */}

            <Script>                                                          
            {`console.log("Running on client side")`}
            </Script>
        </div>
    )
}

export default Scripttag