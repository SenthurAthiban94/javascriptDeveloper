import {getCLS, getFID, getLCP} from 'web-vitals';

function sendToGoogleAnalytics({name, delta, value, id}) {
    console.log('REPORT : ',name,delta,value,id);
//   gtag('event', name, {
//     // Built-in params:
//     value: delta, // Use `delta` so the value can be summed.
//     // Custom params:
//     metric_id: id, // Needed to aggregate events.
//     metric_value: value, // Optional.
//     metric_delta: delta, // Optional.

//     // OPTIONAL: any additional params or debug info here.
//     // See: https://web.dev/debug-web-vitals-in-the-field/
//     // metric_rating: 'good' | 'ni' | 'poor',
//     // debug_info: '...',
//     // ...
//   });
}

export const reportWebVitals = ()=>{
    getCLS(sendToGoogleAnalytics);
    getFID(sendToGoogleAnalytics);
    getLCP(sendToGoogleAnalytics);
}
