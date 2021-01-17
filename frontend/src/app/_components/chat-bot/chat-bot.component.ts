import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-bot",
  templateUrl: "./chat-bot.component.html",
  styleUrls: ["./chat-bot.component.scss"],
})
export class ChatBotComponent implements OnInit {
  open = false;

  constructor() {}

  ngOnInit() {}

  openChatBot() {
    this.open = !this.open;
    console.log(this.open);
  }
}
