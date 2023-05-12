interface IGhosts {
  id: number | string;
  name: string;
  history: string;
  strengths?: string;
  weak?: string;
  evidName: string[];
  marked: boolean;
}
