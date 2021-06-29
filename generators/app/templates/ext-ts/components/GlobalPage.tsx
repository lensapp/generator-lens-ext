import React from "react"
import { Renderer } from "@k8slens/extensions";

const { SettingLayout } = Renderer.Component;

const GlobalPage = () =>
  <SettingLayout
    data-testid="global-page-pagelayout"
  >
    <div key={"wrapper"}>
      <h1 data-testid="global-page-title">Global Page Content</h1>
      <br />
      <p data-testid="global-page-paragraph">A very long paragraph</p>
    </div>
  </SettingLayout>

export default GlobalPage
