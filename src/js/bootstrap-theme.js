// Import our custom CSS
import '../scss/bootstrap-theme.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Expose Bootstrap's JS API as `window.bootstrap` (see webpack.config.js `output.library`)
// so consumers can call e.g. `bootstrap.Tooltip.getOrCreateInstance(el)` on demand, without
// also needing to load a separate vanilla Bootstrap bundle just for its JS API surface.
export default bootstrap

//for popovers everywhere
// enable popovers everywhere
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// enable tooltips-bs everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
