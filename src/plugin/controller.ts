
// This is the UI panel that is shown
figma.showUI(__html__, { height: 800, width: 1500 });

// This is the message that is sent from the frontend (App.tsx)
figma.ui.onmessage = async (msg:{componentId: string}) => {

    // Selects current page user is on
    const page = figma.currentPage
    
    // Imports the component via a key (componentId) from the frontend
    const component = (await figma.importComponentByKeyAsync(msg.componentId)).createInstance()

    // Inserts that component onto the canvas
    page.insertChild(0,component)

    // The viewport scrolls and zooms the new component into view
    const bounds = figma.viewport.bounds;

    component.x = bounds.x + bounds.width / 2 - component.width / 2;
    component.y = bounds.y + bounds.height / 2 - component.height / 2;

    figma.viewport.scrollAndZoomIntoView([component]);

    // Detaches instance to make it just a frame / frames
    component.detachInstance()

    // Shows toast down the bottom of the screen
    figma.notify("Screens created 🎉")


    figma.closePlugin()

    
    
};


