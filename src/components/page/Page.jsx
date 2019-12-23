import React from 'react';
import { app } from './page.module.css';

function Page({ meta, children }) {
	return <div className={app}>{children}</div>;
}

export default Page;
