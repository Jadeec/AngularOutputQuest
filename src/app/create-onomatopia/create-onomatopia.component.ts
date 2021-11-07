import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent implements OnInit {
  @Output()
  public sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter<string>();

  newOnomatopia: string | undefined;
  constructor() {}

  ngOnInit(): void {}
  createOnomatopia($event: string): void {
    this.sendOnomatopiaToParent.emit($event);
  }
}
