function t(e,o){return!e||!o?!1:(e=r(e),o=r(o),e===o)}function r(e){return e?(e=e.toLowerCase(),e=e.replace(/\s+/gi," "),e=e.replace(/<[^>]*>?/gi," "),e=e.replace(/__+/gi,"____"),e):""}function n(e){return e?(window.URL??window.webkitURL).createObjectURL(e):""}export{t as a,r as b,n as c};