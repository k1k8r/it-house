import { ISection } from './section.interface';

export interface ISupport {
  title: string;
  content: string;
  section: ISection[];
  file?: string;
}
