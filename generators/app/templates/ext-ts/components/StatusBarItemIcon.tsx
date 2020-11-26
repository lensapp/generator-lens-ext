import React from "react"
import { Component } from "@k8slens/extensions";

const { Icon } = Component;

const StatusBarItemIcon = ({ navigate }: { navigate?: () => void }): JSX.Element => (
  <Icon
    material="link"
    interactive
    style={{
      color: "rgb(255, 255, 0)"
    }}
    onClick={() => navigate()}
    data-testid="statusbar-item-icon"
  />
)

export default StatusBarItemIcon
