// Global Tracking Configuration (Meta Pixel & GA4)

// 1. Initialize Google Analytics (GA4)
const gaMeasurementId = 'G-XXXXXXXXXX'; // REPLACE with your actual GA4 Measurement ID
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', gaMeasurementId);

// 2. Initialize Meta Pixel
const metaPixelId = '1022617387099045';
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', metaPixelId);
fbq('track', 'PageView'); // Fires on every page

// 3. Fire 'Lead' event automatically if the user lands on the Thank You page
if (window.location.pathname.includes('thank-you.html')) {
    fbq('track', 'Lead');
}