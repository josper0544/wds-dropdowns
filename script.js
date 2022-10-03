// set up an event listener on the body
// and check what we are clicking on
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    // but if we are already in a dropdown 
    // we do not want to do anything at all
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    // but if we are clicking on a dropdown button, find out what we are clicking
    
    // declare a variable for the currentDropdown in which a
    // DropdownButton is being clicked
    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        // make this currentDropdown active
        currentDropdown.classList.toggle('active')
    }

    // check all Dropdowns. 
    // if the currentDropdown do nothing.
    // if not the acurrentDropdown, remove the active class
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})