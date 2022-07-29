
figma.showUI(__html__, { height: 800, width: 1400 });

figma.ui.onmessage = async (msg:{componentId: string}) => {

    const page = figma.currentPage
    
    const component = (await figma.importComponentByKeyAsync(msg.componentId)).createInstance()

    page.insertChild(0,component)

    figma.viewport.scrollAndZoomIntoView([component]);

    component.detachInstance()

    figma.notify("Screens created 🤘")
    
};


