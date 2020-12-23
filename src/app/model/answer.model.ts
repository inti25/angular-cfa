export class Answer {
  text: string;
  isCorrect: boolean;
  correctReason: string;

  constructor() {
    this.text = '';
    this.isCorrect = false;
    this.correctReason = '';
  }
}
