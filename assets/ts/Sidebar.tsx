import * as React from "react";

import { observer, inject } from "mobx-react";

import { configure } from "mobx";

configure({
  enforceActions: "observed"
});

import { Editor } from "./Store";

interface Props {
  editor?: Editor;
}
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import * as Electrom from "electron";

const electron = (window as any).require("electron");
const remote = electron.remote as Electrom.Remote;
const BrowserWindow = remote.BrowserWindow;

@inject("editor")
@observer
export default class ChartTab extends React.Component<Props, {}> {
  render() {
    const editor = this.props.editor;

    if (!editor) {
      return <div />;
    }

    return (
      <div>
        <Button
          color="primary"
          aria-label="Add"
          onClick={() => {
            editor!.asset.openAudioAssetDirectory();
          }}
          //className={classes.button}
        >
          load audio directory
        </Button>

        {editor.asset.audioAssetPaths.map((audioAssetPath, index) => (
          <div key={index} style={{ margin: "1rem" }}>
            {audioAssetPath}
          </div>
        ))}
      </div>
    );
  }
}
