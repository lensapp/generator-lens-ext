import { LensRendererExtension, Component } from "@k8slens/extensions";
import path from "path";
import React from "react"

export function ExampleIcon(props: Component.IconProps) {
    return <Component.Icon {...props} material="pages" tooltip={path.basename(__filename)} />
}

export class ExamplePage extends React.Component<{ extension: LensRendererExtension }> {
    render() {
        return (
            <div className="flex column gaps align-flex-start">
                <p>Hello world!</p>
                <p>File: <i>{__filename}</i></p>
            </div>
        )
    }
}
