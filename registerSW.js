// asset.js
/*!
MIT License

Copyright (c) 2020-PRESENT Anthony Fu <https://github.com/antfu>

https://github.com/userquin/quini-pwa-monorepo/blob/main/LICENSE.
*/
if ("serviceWorker" in navigator) navigator.serviceWorker.register("/MySite/sw.js", {
	scope: "/MySite/",
	type: "classic",
	updateViaCache: "imports"
});
