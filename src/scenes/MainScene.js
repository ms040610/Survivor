import * as Phaser from "phaser";
import config from "../config";
import Button from "../ui/Button";

import { setBackground } from "../utils/backgroundManager";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");
  }

  create() {
    if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
      this.add
        .bitmapText(
          config.width / 2,
          150,
          "pixelFont",
          "MOBILE DEVICE NOT SUPPORTED",
          20,
        )
        .setOrigin(0.5);

      return;
    }

    setBackground(this, "main");

    this.add
      .bitmapText(config.width / 2, 150, "pixelFont", "AirForce", 100)
      .setOrigin(0.5);

    this.add
      .sprite(config.width / 2, config.height / 2, "idle")
      .setScale(3)
      .play("playerIdle");

    new Button(
      config.width / 2,
      config.height / 2 + 150,
      "Start Game!",
      this,
      () => {
        this.scene.start("playGame");
      },
    );
  }
}
