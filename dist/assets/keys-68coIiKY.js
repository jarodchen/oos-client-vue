function o(n){return n?n.split("/").filter(e=>e!=="."&&e!=="..").map(e=>encodeURIComponent(e)).join("/"):""}export{o as e};
