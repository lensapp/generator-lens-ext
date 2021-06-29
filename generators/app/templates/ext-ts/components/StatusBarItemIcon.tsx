import React from "react"
import { Renderer } from "@k8slens/extensions";

const { Icon } = Renderer.Component;

const StatusBarItemIcon = () => (
  <Icon
    material="link"
    interactive
    style={{
      color: "rgb(255, 255, 0)"
    }}
    data-testid="statusbar-item-icon"
  />
)

export default StatusBarItemIcon
