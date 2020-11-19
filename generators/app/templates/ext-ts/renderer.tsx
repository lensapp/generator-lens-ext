import { LensRendererExtension, Component } from "@k8slens/extensions";
import React from "react"

const { Icon } = Component;
/**
 * 
 * RendererExtension which extends LensRendererExtension runs in Lens' 'renderer' process (NOT 'main' process)
 * main vs renderer <https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes>
 * 
 * LensRendererExtension is the interface to Lens' renderer process
 *
 * LensRendererExtension api allows you to access, configure, and customize Lens data add
 * custom Lens UI elements, and generally run custom code in Lens' renderer process.
 *  The custom Lens UI elements that can be added include global pages, cluster pages, 
 * cluster features, app preferences, status bar items... and more. See details:
 * <https://docs.k8slens.dev/master/extensions/capabilities/common-capabilities/#renderer-extension>
 *
 * LensRendererExtension API doc <https://docs.k8slens.dev/master/extensions/api/classes/lensrendererextension/>
 *
 * To see console statements in 'renderer' process, go to the console tab in DevTools in Lens
 * View > Toggle Developer Tools > Console.
 * 
 * @export
 * @class RendererExtension
 * @extends {LensRendererExtension}
 */
export default class RendererExtension extends LensRendererExtension {
    
    #globalPageRoutePath = '/ext_global_page'
    /**
     * +--------Lens--------+
     * +--------------------+
     * |                    |
     * |                    |
     * |    globalPages     |
     * |                    |
     * |                    |
     * +--------------------+
     * +--------------------+
     *
     * @memberof RendererExtension
     */
    globalPages = [
        {
            id: this.#globalPageRoutePath,
            routePath: this.#globalPageRoutePath,
            components: {
                Page: () => (
                    <div>
                        <h1>"An Extension Global Page"</h1>
                    </div>
                ),
            }
        }
    ]

    globalPageMenus = [
        {
            title: "To Ext Global Page", // used in icon's tooltip
            target: { pageId: this.#globalPageRoutePath },
            components: {
              Icon: () => <Icon material="pages" />,
            }
        }
    ]


    #clusterPageRoutePath = '/ext_global_page'
    /**
     *
     *
     * +--------Lens--------+
     * |--------------------+
     * |-----|              |
     * |-----| clusterPages |
     * +-----+              |
     * |     |              |
     * |     |              |
     * +-----+--------------+
     *
     * @memberof RendererExtension
     */
    clusterPages = [
        {
            id: this.#clusterPageRoutePath,
            routePath: this.#clusterPageRoutePath,
            title: "Cluster Page Title",
            components: {
                Page: () => (
                    <div>
                        <h1>"An Extension Cluster Page"</h1>
                    </div>
                ),
            }
        }
    ]
    /**
     * 
     * 
     * +--------Lens--------+
     * |--------------------+
     * |-----|              |
     * |-----| <-------+ clusterPageMenus
     * +-----+              |
     * |     |              |
     * |     |              |
     * +-----+--------------+
     *
     * @memberof RendererExtension
     */
     clusterPageMenus = [
        {
            target: { pageId: this.#clusterPageRoutePath, params: {} },
            // the text on the menu item
            title: "Cluster Page",
            components: {
                Icon: () => <Icon material="pages" />,
            }
        }
    ]
}
