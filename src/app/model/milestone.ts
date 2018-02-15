// export class Milestone {
//   constructor(public name: string, public days: number[], progressValue = 0) {}
// }
//
// export class MilestoneMaker {
//   static create(event: Milestone) {
//     return new Milestone(event.name, event.days);
//   }
// }


export interface Milestone {
  name: string;
  days: string[];
  startDate: string;
  endDate: string;
  progressValue: number;
}

export class MilestoneMaker implements Milestone {
  constructor(public name: string, public days: string[], public startDate: string, public endDate: string, public progressValue: number) { }
}
