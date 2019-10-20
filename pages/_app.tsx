import "../styles/index.css";

import App from "next/app";
import * as React from "react";

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this[ "props" ];

		return <Component { ...pageProps } />;
	}
}
