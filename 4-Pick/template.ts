type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
