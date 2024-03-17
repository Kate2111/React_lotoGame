interface SelectedNumbers {
  firstField: number[];
  secondField: number[];
}

export interface RequestData {
  selectedNumbers: SelectedNumbers;
  isTicketWon: boolean;
}
