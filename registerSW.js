if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/MySite/sw.js', { scope: '/MySite/' })})}