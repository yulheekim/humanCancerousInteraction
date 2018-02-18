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
  daysBool: boolean[]; //weekdays
  startDate: string;
  endDate: string;
  progressValue: number;
  shouldDo?: boolean;
}

export class MilestoneMaker implements Milestone {
  constructor(public name: string, public days: string[], public daysBool: boolean[],
              public startDate: string, public endDate: string, public progressValue: number, public shouldDo = false) { }
}
