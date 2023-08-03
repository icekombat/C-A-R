export class MultipleChoiceQuestion{
  question:string;
  answerOptions:{readonly id:number, readonly text: string, checked: boolean}[];

  constructor(question:string, answers:string[]) {
    this.question = question;
    this.answerOptions = [];
    for (let i = 0; i<answers.length;i++ ) {
      this.answerOptions.push({id:i,text:answers[i], checked:false});
    }
  }

  public checkAnswer(id:number){
    this.answerOptions[id].checked = true;
  }

  public unCheckAnswer(id:number){
    this.answerOptions[id].checked = false;
  }
}
