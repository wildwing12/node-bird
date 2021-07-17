import React from 'react'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import Head from "next/head";
//공통 파일
const App = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>노드버드</title>
            </Head>
            <Component/>
        </>
    )
}
App.prototype = {
    Component: PropTypes.elementType.isRequired,
}
export default App;
