import { AfterContentInit, Component, ContentChildren, ElementRef, input, OnChanges, OnInit, output, QueryList, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent implements OnChanges, AfterContentInit{
  fromParent = input<string>();
  val = '';
  toParent = output<string>();

  @ContentChildren('#title') title: QueryList<HTMLElement> | undefined;
//  contentChildren
  onUserInput(){
    // console.log(this.val);
    this.toParent.emit(this.val);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Only triggers when input properties (NOT user input) changes
    console.log("child comp, On Changes")
  }

  ngAfterContentInit(): void {
    console.log(this.title);
  }

}
