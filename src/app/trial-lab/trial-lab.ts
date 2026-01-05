import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trial-lab',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './trial-lab.html',
  styleUrls: ['./trial-lab.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialLab  implements OnInit {
  sections: any[] = [];

  ngOnInit() {
    this.addSection();
  }

  addSection() {
    this.sections.push({
      id: Date.now(),
      inputs: [{ value: 0 }]
    });
  }

  removeSection(index: number) {
    if (this.sections.length > 1) {
      this.sections.splice(index, 1);
    }
  }

  addInput(sectionIndex: number) {
    this.sections[sectionIndex].inputs.push({ value: 0 });
  }

  removeInput(sectionIndex: number, inputIndex: number) {
    if (this.sections[sectionIndex].inputs.length > 1) {
      this.sections[sectionIndex].inputs.splice(inputIndex, 1);
    }
  }


  updateValue(sIdx: number, iIdx: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.sections[sIdx].inputs[iIdx].value = Number(inputElement.value) || 0;
  }

  getSectionTotal(sectionIndex: number): number {
    return this.sections[sectionIndex].inputs.reduce(
      (acc: number, curr: any) => acc + curr.value, 0
    );
  }
}
