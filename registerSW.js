if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Mysite/sw.js', { scope: '/Mysite/' })})}