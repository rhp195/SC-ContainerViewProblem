This sample program highlights an error with the SC.ContainerView. When the contentView property of the ContainerView is set when the object is instantiated and later changed by setting the nowShowing property at runtime, the original content remains in the DOM.  If the contentView property is left null on instantiation, behavior is as expected.

All code has been placed in the resources/main_page.js file.

The 'init.jpg' shows the window with the View #1 object loaded.

The 'View #2.jpg' shows the window after pressing the "Get View #2" button.  Both View1 and View2 are visible.

The 'View #3.jpg' shows the window after pressing the "Get View #3" button.  Both View1 and View3 are visible.  View 2 was removed as expected.

View 1 is stuck.

