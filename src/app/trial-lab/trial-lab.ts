import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trial-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trial-lab.html',
  styleUrls: ['./trial-lab.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class TrialLab  implements OnInit {
  sections: any[] = [];

  ngOnInit() {
    // เมื่อโหลดหน้าจอ ให้สร้าง Section แรกขึ้นมาทันที
    this.addInitialData();
  }

  addInitialData() {
    // สร้าง 1 Section ที่มี 1 Input เป็นค่าเริ่มต้น
    this.sections.push({
      id: Date.now(),
      inputs: [{ value: 0 }]
    });
  }

  addSection() {
    this.sections.push({
      id: Date.now(),
      inputs: [{ value: 0 }] // เมื่อเพิ่ม Section ใหม่ ให้มี 1 Input
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

  getSectionTotal(sectionIndex: number): number {
    return this.sections[sectionIndex].inputs.reduce(
      (acc: number, curr: any) => acc + (Number(curr.value) || 0), 0
    );
  }
}
