import { LensRendererExtension, Component } from "@k8slens/extensions";
import React from "react"

const { Icon } = Component;

/**
 * 
 * RendererExtension which extends LensRendererExtension runs in Lens' 'renderer' process (NOT 'main' process)
 * main vs renderer <https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes>
 * 
 * LensRendererExtension is the interface to Lens' renderer process. Its api allows you to access, configure, 
 * and customize Lens data add custom Lens UI elements, and generally run custom code in Lens' renderer process.
 * 
 * The custom Lens UI elements that can be added include global pages, cluster pages, 
 * cluster features, app preferences, status bar items... See details:
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
    
    #globalPageRoutePath = "/ext_global_page"

    /**
     *  `globalPages` allows you register custom global page.
     * 
     *  The global page is a full-screen page that hides all other content from a window.
     *
     *  ```
     *            Lens
     *   +-----------------------+
     *   |*|                     |
     *   |*|                     |
     *   | |    globalPages      |
     *   | |                     |
     *   | |                     |
     *   | |                     |
     *   +-----------------------+
     * 
     * ```
     *
     * @memberof RendererExtension
     */
    globalPages = [
      {
        id: this.#globalPageRoutePath,
        routePath: this.#globalPageRoutePath,
        components: {
          Page: (): JSX.Element => (
            <div> 
              <h1>"An Extension Global Page"</h1>
            </div>
          ),
        }
      }
    ]

    /**
     *  `globalPageMenus` allows you register custom global page.
     *
     *  ```
     *            Lens
     *   +-----------------------+
     *   |*|                     |
     *   |*| <---------------+ globalPageMenus
     *   | |                     |
     *   | |                     |
     *   | |                     |
     *   | |                     |
     *   +-----------------------+
     * 
     * ```
     *
     * @memberof RendererExtension
     */
    globalPageMenus = [
      {
        title: "To Ext Global Page",
        target: {
          pageId: this.#globalPageRoutePath
        },
        components: {
          Icon: (): JSX.Element => <Icon material="link" />,
        }
      }
    ]

    /**
     *  `statusBarItems` allows you register register custom icons and text to a status bar area.
     *
     *  ```
     *            Lens
     *   +-----------------------+
     *   |*|                     |
     *   |*| 
     *   | |                     |
     *   | |                     |
     *   | |                     |
     *   | |                   * |<---------------+ statusBarItems
     *   +-----------------------+
     *
     * ```
     *
     * @memberof RendererExtension
    */
    statusBarItems = [
      {
        item: (
          <Icon
            material="link"
            onClick={() => this.navigate(this.#globalPageRoutePath)}
          />
        )
      }
    ]


    #clusterPageRoutePath = "/ext_cluster_page"

    /**
     *  `clusterPages` allows you register custom cluster page.
     *
     *  ```
     *            Lens
     *   +-----------------------+
     *   |*|-----|               |
     *   |*|-----|               |
     *   | |-----|  clusterPages |
     *   | +-----+               |
     *   | |     |               |
     *   | |     |               |
     *   +-----------------------+
     * 
     * ```
     *
     * @memberof RendererExtension
     */
    clusterPages = [
      {
        id: this.#clusterPageRoutePath,
        routePath: this.#clusterPageRoutePath,
        title: "Cluster Page Title",
        components: {
          Page: (): JSX.Element => (
            <div>
              <h1>"An Extension Cluster Page"</h1>
            </div>
          ),
        }
      }
    ]
    /**
     *  `clusterPageMenus` allows you register custom cluster page menu items.
     * 
     *  `clusterPageMenus` are menu items showing the sidebar of  a `clusterPages`.
     *  
     * ```
     *             Lens
     *   +-----------------------+
     *   |*|-----|               |
     *   |*|-----|  <---------------+ clusterPageMenus
     *   | |-----|               |
     *   | +-----+               |
     *   | |     |               |
     *   | |     |               |
     *   +-----------------------+
     * 
     * ```
     *
     * @memberof RendererExtension
     */
     clusterPageMenus = [
       {
         target: {
           pageId: this.#clusterPageRoutePath,
           params: {}
         },
         // the text on the menu item
         title: "Cluster Page",
         components: {
           Icon: (): JSX.Element => <Icon material="pages" />,
         }
       }
     ]
}
