import { Renderer } from "@k8slens/extensions";
import React from "react"

import GlobalPage from "./components/GlobalPage";
import StatusBarItemIcon from "./components/StatusBarItemIcon";

const { Icon } = Renderer.Component;

/**
 * 
 * RendererExtension which extends Renderer.LensExtension runs in Lens' 'renderer' process (NOT 'main' process)
 * main vs renderer <https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes>
 * 
 * LensRendererExtension is the interface to Lens' renderer process. Its api allows you to access, configure, 
 * and customize Lens data add custom Lens UI elements, and generally run custom code in Lens' renderer process.
 * 
 * The custom Lens UI elements that can be added include global pages, cluster pages, 
 * cluster features, app preferences, status bar items... See details:
 * <https://docs.k8slens.dev/master/extensions/capabilities/common-capabilities/#renderer-extension>
 *
 * Renderer.LensExtension API doc <https://docs.k8slens.dev/master/extensions/api/classes/lensrendererextension/>
 *
 * To see console statements in 'renderer' process, go to the console tab in DevTools in Lens
 * View > Toggle Developer Tools > Console.
 * 
 * @export
 * @class RendererExtension
 * @extends {Renderer.LensExtension}
 */
export default class RendererExtension extends Renderer.LensExtension {

  /**
   *  `globalPages` allows you register custom global page.
   * 
   *  The global page is a full-screen page that hides all other content from a window.
   *
   *  ```
   *            Lens
   *   +-----------------------+
   *   |                       |
   *   |                       |
   *   |      globalPages      |
   *   |                       |
   *   |                       |
   *   |                       |
   *   +-----------------------+
   * 
   * ```
   *
   * @memberof RendererExtension
   */
  globalPages = [
    {
      components: {
        Page: GlobalPage,
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
      item: () => <StatusBarItemIcon />,
    }
  ]

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
  #clusterPageId = "cluster_page";
  clusterPages = [
    // a standard cluster page
    {
      id: this.#clusterPageId,
      title: "Cluster Page Title",
      components: {
        Page: (): JSX.Element => (
          <div style={{
            padding: "2em",
          }}>
            <h1>A Standard Extension Cluster Page</h1>
          </div>
        ),
      }
    },
    // a cluster 'sub' page show in a tab
    {
      id: "cluster_sub_page_one",
      title: "Cluster Sub Page One",
      components: {
        Page: (): JSX.Element => (
          <div style={{
            padding: "1em",
          }}>
            <h1>Sub-Page One in Tab</h1>
          </div>
        ),
      }
    },
    {
      id: "cluster_sub_page_two",
      title: "Cluster Sub Page One",
      components: {
        Page: (): JSX.Element => (
          <div style={{
            padding: "1em",
          }}>
            <h1>Sub-Page Two in Tab</h1>
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

  #menuItemParentId = "cluster_page_menu_folder";
  clusterPageMenus = [
    // a cluster menu item which links to a cluster page
    {
      title: "Cluster Page",
      target: {
        pageId: this.#clusterPageId,
        params: {}
      },
      components: {
        Icon: (): JSX.Element => <Icon material="pages" />,
      }
    },
    // the following three items are an example of an menu item (parent)
    // that allows to have child items.
    //
    // the parent, a foldable menu item
    {
      id: this.#menuItemParentId,
      title: "Foldable Item",
      components: {
        Icon: (): JSX.Element => <Icon material="pages" />,
      }
    },
    // the child item one
    {
      parentId: this.#menuItemParentId,
      target: { pageId: "cluster_sub_page_one", params: {} },
      title: "Sub-Page 1",
      components: {
        Icon: (): JSX.Element => <Icon material="arrow_right" />,
      }
    },
    // the child item two
    {
      parentId: this.#menuItemParentId,
      target: { pageId: "cluster_sub_page_two", params: {} },
      title: "Sub-Page 2",
      components: {
        Icon: (): JSX.Element => <Icon material="arrow_right" />,
      }
    },
  ]
}
