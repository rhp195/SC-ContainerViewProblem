This sample program highlights an error with the SC.ContainerView. When the contentView property of the ContainerView is set when the object is instantiated and later changed by setting the nowshowing property at runtime, the original content remains in the DOM.  If the contentView property is left null on instantiation, behavior is as expected.

All code has been placed in the resources/main_page.js file.
The 'init.jpg' shows the window with the ViewMe1 object loaded.  The 'after click.jpg' shows the window with the ViewMe2 object loaded via the button click.
 
