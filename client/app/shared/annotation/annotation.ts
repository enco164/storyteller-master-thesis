let annotationIdCounter = 1;

export class Annotation {
  id: number;
  startIndex: number;
  endIndex: number;
  data: { ['comment'] };
  type: string;

  constructor(startIndex, endIndex, data = {comment: ''}) {
    this.id = annotationIdCounter++;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.data = data;
  }
}
