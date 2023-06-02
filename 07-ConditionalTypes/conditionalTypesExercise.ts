type answer_1 = 64 extends number ? true : false;
type answer_2 = number extends 64 ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = never extends any ? true : false;
type answer_6 = Date extends { new: (...args: any[]) => any } ? true : false;
type answer_7 = typeof Date extends { new: (...args: any[]) => any }
  ? true
  : false;
type answer_9 = any extends any ? true : false;

//> does everything(every possible type  ) on the left fits inside whatever is on the right
//# OR can be understood as - smallers  set extends(contains) the larger set
//> extends means more specific type
